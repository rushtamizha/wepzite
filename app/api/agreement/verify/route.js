/**
 * POST /api/agreement/verify — checks the access code a client is given over
 * WhatsApp before the agreement PDF can be generated.
 *
 * Why this is a route handler and not a check in the browser: a code compared
 * in client code ships the code itself to every visitor, where View Source
 * finds it in seconds. Validating here keeps it on the server.
 *
 * Be clear-eyed about what this is, though. It gates PDF *generation*, and it
 * is a shared code rather than a per-client one, so it stops casual visitors
 * from minting agreements — it is not authentication, and anyone who has been
 * given the code can generate an agreement with any details they like. Treat a
 * generated PDF as a document you still have to countersign, not as proof.
 */

// Codes are compared case-insensitively and ignoring surrounding space, since
// these get retyped off a phone screen.
const normalise = (value) => String(value ?? "").trim().toUpperCase();

/** Constant-time-ish comparison so the endpoint does not leak length quickly. */
function matches(given, expected) {
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < given.length; i += 1) {
    diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export async function POST(request) {
  // Set AGREEMENT_ACCESS_CODE in the environment (Vercel → Settings →
  // Environment Variables, or .env.local for development). The fallback keeps
  // the page usable before that is configured, and the response says so, so an
  // unconfigured deploy is obvious rather than silently insecure.
  const configured = process.env.AGREEMENT_ACCESS_CODE;
  const expected = normalise(configured || "WEPZITE-2026");

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ valid: false, error: "Malformed request." }, { status: 400 });
  }

  const given = normalise(body?.code);

  if (!given) {
    return Response.json(
      { valid: false, error: "Enter the agreement code." },
      { status: 400 },
    );
  }

  if (!matches(given, expected)) {
    // Small delay to make repeated guessing tedious without holding a worker
    // open for long.
    await new Promise((resolve) => setTimeout(resolve, 400));
    return Response.json(
      { valid: false, error: "That code is not valid. Check the code sent to you on WhatsApp." },
      { status: 401 },
    );
  }

  return Response.json({
    valid: true,
    usingFallbackCode: !configured,
  });
}
