import { useState } from 'react';
import type { TimelineCategory } from '../data/timeline';
import { timelineData } from '../data/timeline';
import { filterTimelineByCategory } from '../lib/filters';
import TabList from './TabList';

const TABS: { key: TimelineCategory; label: string }[] = [
  { key: 'student', label: '学生' },
  { key: 'professional', label: '社会人' },
];

export default function Timeline() {
  const [tab, setTab] = useState<TimelineCategory>('student');
  const items = filterTimelineByCategory(timelineData, tab);

  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="scroll-mt-20 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-black/60 dark:text-white/50 uppercase">Timeline</p>
        <h2 id="timeline-heading" className="mb-8 text-3xl font-semibold">
          活動履歴
        </h2>

        <TabList tabs={TABS} active={tab} onChange={setTab} label="活動履歴の切り替え" idPrefix="timeline" />

        <div
          role="tabpanel"
          id={`timeline-panel-${tab}`}
          aria-labelledby={`timeline-tab-${tab}`}
          tabIndex={0}
        >
          <ol className="relative border-l border-black/15 dark:border-white/15">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="mb-10 ml-6 last:mb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white"
                  >
                    <Icon className="h-2.5 w-2.5 text-white dark:text-black" />
                  </span>
                  <span className="text-xs tracking-widest text-black/60 dark:text-white/50 uppercase">
                    {item.date}
                  </span>
                  <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-black/70 dark:text-white/70">{item.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
