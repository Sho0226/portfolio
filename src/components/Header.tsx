import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#works', label: 'Works' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <nav
          aria-label="メインナビゲーション"
          className="flex gap-4 overflow-x-auto text-xs tracking-widest uppercase sm:gap-6 sm:text-sm"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
