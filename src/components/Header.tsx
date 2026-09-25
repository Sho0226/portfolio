import { useActiveSection } from '../lib/useActiveSection';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#works', label: 'Works' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export default function Header() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <nav
          aria-label="メインナビゲーション"
          className="flex gap-4 overflow-x-auto text-xs tracking-widest uppercase sm:gap-6 sm:text-sm"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.href.slice(1) === activeId;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`grid whitespace-nowrap transition-colors ${
                  isActive
                    ? 'font-semibold text-black dark:text-white'
                    : 'text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white'
                }`}
              >
                {/* A hidden bold copy holds the column width, so promoting the
                    current item to semibold does not shuffle the rest of the
                    nav. It is aria-hidden rather than only visually hidden:
                    generated or invisible content still reaches some name
                    calculations, and "About About" is what that sounds like. */}
                <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-semibold">
                  {item.label}
                </span>
                <span className="col-start-1 row-start-1">{item.label}</span>
              </a>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
