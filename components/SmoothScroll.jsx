"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis, registerLenis } from "@/utils/lenis";
import "lenis/dist/lenis.css";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// Same tuning the home page used before smooth scroll moved site-wide.
// `anchors`/`stopInertiaOnNavigate`/`allowNestedScroll` are the options that
// make one shared instance behave across every route: in-page #links animate,
// clicking through to another page kills leftover inertia, and inner scroll
// panes (the mobile nav sheet, the pricing modal) keep their own scrolling.
const LENIS_OPTIONS = {
  duration: 1,
  lerp: 0.05,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
  anchors: true,
  allowNestedScroll: true,
  stopInertiaOnNavigate: true,
};

/**
 * Site-wide smooth scroll. Mounted once in the root layout, so every current
 * and future route inherits it without touching the page file.
 *
 * Renders nothing and adds no wrapper element: the document keeps scrolling
 * natively on the window, markup is untouched, and the layout stays a Server
 * Component. Lenis itself is imported lazily after hydration so it never adds
 * to the first-load JS that Core Web Vitals are measured against.
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION);

    let lenis = null;
    let unregister = null;
    let frame = 0;
    let loading = false;
    let disposed = false;

    function teardown() {
      if (!lenis) return;
      cancelAnimationFrame(frame);
      unregister();
      lenis.destroy();
      lenis = null;
      unregister = null;
    }

    async function setup() {
      if (lenis || loading || media.matches) return;
      loading = true;
      try {
        const { default: Lenis } = await import("lenis");
        // Reduced motion may have been switched on, or the app unmounted,
        // while the chunk was in flight.
        if (disposed || media.matches) return;

        lenis = new Lenis(LENIS_OPTIONS);
        unregister = registerLenis(lenis);

        const raf = (time) => {
          lenis.raf(time);
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
      } finally {
        loading = false;
      }
    }

    // Honour the preference live, not just on first paint.
    const onPreferenceChange = () => (media.matches ? teardown() : setup());

    setup();
    media.addEventListener("change", onPreferenceChange);

    return () => {
      disposed = true;
      media.removeEventListener("change", onPreferenceChange);
      teardown();
    };
  }, []);

  // A route change swaps the whole document under the instance: drop any
  // in-flight inertia and re-measure the new content height. Deliberately
  // does not scroll to top — that stays with Next.js, so back/forward scroll
  // restoration keeps working.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    lenis.reset();
    lenis.resize();
  }, [pathname]);

  return null;
}
