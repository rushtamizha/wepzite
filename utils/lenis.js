"use client";

/**
 * Tiny registry around the single site-wide Lenis instance owned by
 * <SmoothScroll />. Components that need to pause smooth scrolling (modals,
 * the mobile nav sheet) or scroll programmatically talk to Lenis through
 * here instead of reaching for a global, so they keep working on the render
 * pass before the Lenis chunk has finished loading — and when it never
 * loads at all, because the visitor asked for reduced motion.
 */

let instance = null;
let locks = 0;

/** Called by <SmoothScroll />. Returns the matching unregister function. */
export function registerLenis(next) {
  instance = next;
  // A lock may have been taken while the chunk was still in flight.
  if (locks > 0) next.stop();

  return () => {
    if (instance === next) instance = null;
  };
}

export function getLenis() {
  return instance;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Freeze scrolling while an overlay is open. Reference counted, so nested
 * overlays release cleanly. Returns the release function — call it once.
 */
export function lockSmoothScroll() {
  locks += 1;
  if (locks === 1) instance?.stop();

  let released = false;
  return () => {
    if (released) return;
    released = true;
    locks -= 1;
    if (locks === 0) instance?.start();
  };
}

/** Back-to-top that animates through Lenis when it is running. */
export function scrollToTop() {
  if (instance) {
    instance.scrollTo(0);
    return;
  }
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}
