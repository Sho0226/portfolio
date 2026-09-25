import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ThemePreference } from '../lib/theme';
import {
  applyTheme,
  oppositeTheme,
  readStoredPreference,
  resolveTheme,
  storePreference,
} from '../lib/theme';

const DARK_QUERY = '(prefers-color-scheme: dark)';

export default function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>(readStoredPreference);
  const [systemPrefersDark, setSystemPrefersDark] = useState(
    () => window.matchMedia(DARK_QUERY).matches,
  );
  const theme = resolveTheme(preference, systemPrefersDark);

  // Until the visitor picks a side, the OS keeps driving the theme.
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    const onChange = (event: MediaQueryListEvent) => setSystemPrefersDark(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => {
    const next = oppositeTheme(theme);
    setPreference(next);
    storePreference(next);
  };

  const Icon = theme === 'dark' ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      className="shrink-0 border border-black/15 p-2 text-black/60 transition-colors hover:border-black hover:text-black dark:border-white/15 dark:text-white/60 dark:hover:border-white dark:hover:text-white"
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      <span className="sr-only">ダークモード</span>
    </button>
  );
}
