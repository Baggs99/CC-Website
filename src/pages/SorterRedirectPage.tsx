import { useEffect } from "react";

/**
 * Render's SPA fallback serves the club app for `/sorter` when the static
 * rewrite is not in front of it. `/sorter/index.html` is the chart itself.
 */
export function SorterRedirectPage() {
  useEffect(() => {
    window.location.replace("/sorter/index.html");
  }, []);

  return (
    <p className="px-6 py-16 text-sm text-navy-700">
      Opening the breakout room chart…
    </p>
  );
}
