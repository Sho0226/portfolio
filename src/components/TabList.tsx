import { useRef } from 'react';

type Tab<K extends string> = { key: K; label: string };

type Props<K extends string> = {
  tabs: Tab<K>[];
  active: K;
  onChange: (key: K) => void;
  label: string;
  idPrefix: string;
};

export default function TabList<K extends string>({
  tabs,
  active,
  onChange,
  label,
  idPrefix,
}: Props<K>) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let next: number | null = null;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    if (next === null) return;

    event.preventDefault();
    onChange(tabs[next].key);
    tabRefs.current[next]?.focus();
  };

  return (
    <div role="tablist" aria-label={label} className="mb-12 flex flex-wrap gap-2">
      {tabs.map(({ key, label: tabLabel }, index) => (
        <button
          key={key}
          ref={(el) => {
            tabRefs.current[index] = el;
          }}
          role="tab"
          id={`${idPrefix}-tab-${key}`}
          aria-selected={active === key}
          aria-controls={`${idPrefix}-panel-${key}`}
          tabIndex={active === key ? 0 : -1}
          onClick={() => onChange(key)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          className={`px-4 py-2 text-sm tracking-widest uppercase transition-colors ${
            active === key
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'border border-black/15 text-black/60 hover:border-black hover:text-black dark:border-white/15 dark:text-white/60 dark:hover:border-white dark:hover:text-white'
          }`}
        >
          {tabLabel}
        </button>
      ))}
    </div>
  );
}
