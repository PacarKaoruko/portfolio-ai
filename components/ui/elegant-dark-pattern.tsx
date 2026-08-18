import type { ReactNode } from "react";

type DarkGradientBgProps = {
  children: ReactNode;
};

/** A layered dark gradient and grid treatment for the page canvas. */
export function DarkGradientBg({ children }: DarkGradientBgProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060b16] waguri:bg-space-indigo-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(59,130,246,0.17),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(14,165,233,0.11),transparent_24%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,auto,42px_42px,42px_42px] waguri:bg-[radial-gradient(circle_at_18%_0%,rgba(205,50,65,0.26),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(228,40,27,0.15),transparent_25%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
