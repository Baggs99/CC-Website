import { useEffect } from "react";

/**
 * Render's SPA fallback serves the club app for `/zoom` (no trailing slash).
 * `/zoom/` is a real static folder and already hosts the generator.
 */
export function ZoomRedirectPage() {
  useEffect(() => {
    window.location.replace("/zoom/");
  }, []);

  return (
    <p className="px-6 py-16 text-sm text-navy-700">
      Opening the Zoom background generator…
    </p>
  );
}
