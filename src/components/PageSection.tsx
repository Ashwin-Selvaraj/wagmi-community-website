import { type ReactNode, useLayoutEffect, useRef, useState } from "react";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  forcedPages?: 1 | 2;
  /** When false, height follows content (no min 100dvh / 200dvh shell). */
  fillViewport?: boolean;
};

export default function PageSection({
  children,
  className = "",
  forcedPages,
  fillViewport = true,
}: PageSectionProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [pageSpan, setPageSpan] = useState<1 | 2>(forcedPages ?? 1);

  useLayoutEffect(() => {
    if (!fillViewport) {
      setPageSpan(1);
      return;
    }
    if (forcedPages) {
      setPageSpan(forcedPages);
      return;
    }

    const measure = () => {
      const host = hostRef.current;
      const content = contentRef.current;
      if (!host || !content) return;

      const computed = window.getComputedStyle(host);
      const paddingTop = parseFloat(computed.paddingTop) || 0;
      const paddingBottom = parseFloat(computed.paddingBottom) || 0;
      const availableViewportHeight = Math.max(window.innerHeight - paddingTop - paddingBottom, 1);
      const nextSpan: 1 | 2 = content.scrollHeight > availableViewportHeight ? 2 : 1;
      setPageSpan(nextSpan);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [forcedPages, fillViewport]);

  const heightClass = fillViewport
    ? pageSpan === 1
      ? "min-h-[100dvh]"
      : "min-h-[200dvh]"
    : "min-h-0";

  const innerClass = fillViewport
    ? "h-full overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem]"
    : "h-auto min-h-0 rounded-[1.5rem] md:rounded-[2.25rem]";

  return (
    <div
      ref={hostRef}
      className={`relative overflow-hidden rounded-[2rem] border border-white/5 p-2 md:rounded-[2.75rem] md:p-3 ${heightClass} ${className}`}
    >
      <div ref={contentRef} className={innerClass}>
        {children}
      </div>
    </div>
  );
}
