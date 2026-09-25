import 'vitest-browser-react';
import * as axeMatchers from 'vitest-axe/matchers';
import { afterEach, expect } from 'vitest';

expect.extend(axeMatchers);

// The theme lives on <html> and in localStorage, both of which outlive a single
// render, so reset them between tests.
afterEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});
