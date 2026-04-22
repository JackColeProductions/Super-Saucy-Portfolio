"use client";

import { useEffect, useState } from "react";

export function PageVeil() {
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setRemoved(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className="page-veil fixed inset-0 z-[200] bg-background pointer-events-none"
    />
  );
}
