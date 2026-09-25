import { useEffect, useState } from 'react';

// Shrinking the root to the top half of the viewport turns "is it visible?"
// into "has its top edge passed the middle of the screen?", which is the line
// a reader is actually looking at.
const ABOVE_READING_LINE = '0px 0px -50% 0px';

/**
 * Tracks which of the given section ids the reader has arrived at: the
 * bottom-most one whose top edge is above the middle of the viewport.
 * `ids` must be a stable array (a module constant), not a fresh literal.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const started = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) started.add(entry.target.id);
          else started.delete(entry.target.id);
        }
        // The last one in document order is the one just entered. Taking the
        // first instead would strand the reader on Blog at the foot of the
        // page, where the short Contact footer only grazes the line.
        setActive(ids.findLast((id) => started.has(id)) ?? null);
      },
      { rootMargin: ABOVE_READING_LINE },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
