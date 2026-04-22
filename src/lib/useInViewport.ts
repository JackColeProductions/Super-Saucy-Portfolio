"use client";

import { useEffect, useRef, useState } from "react";

export function useInViewport<T extends HTMLElement>(
  rootMargin = "200px"
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin, inView]);

  return [ref, inView];
}
