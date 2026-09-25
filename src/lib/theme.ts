export type Theme = 'light' | 'dark';

/** 'system' means "no explicit choice yet, follow the OS". */
export type ThemePreference = Theme | 'system';

const STORAGE_KEY = 'theme';

export function resolveTheme(preference: ThemePreference, systemPrefersDark: boolean): Theme {
  if (preference !== 'system') return preference;
  return systemPrefersDark ? 'dark' : 'light';
}

export function oppositeTheme(theme: Theme): Theme {
  return theme === 'dark' ? 'light' : 'dark';
}

export function parsePreference(stored: string | null): ThemePreference {
  return stored === 'light' || stored === 'dark' ? stored : 'system';
}

// Reading localStorage throws (SecurityError) when the browser blocks site
// data. This runs in a useState initialiser, so an escaping throw would take
// the whole app down with it.
export function readStoredPreference(): ThemePreference {
  try {
    return parsePreference(localStorage.getItem(STORAGE_KEY));
  } catch {
    return 'system';
  }
}

export function storePreference(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Blocked or full storage: the choice simply does not survive a reload.
  }
}

// The class the `dark:` variant keys off; see index.css.
export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}
