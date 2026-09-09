/**
 * Pure-CSS entrance animation. Unlike <Reveal>, this needs no JavaScript, so
 * it paints on first frame — use it for above-the-fold content.
 */
export default function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
