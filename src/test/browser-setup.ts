import 'vitest-browser-react';
// Components never import the stylesheet themselves, so without this the
// browser tests would run unstyled and axe's colour-contrast rule would
// silently pass on colours the site never actually renders.
import '../index.css';
import * as axeMatchers from 'vitest-axe/matchers';
import { afterEach, expect } from 'vitest';

expect.extend(axeMatchers);

// The theme lives on <html> and in localStorage, both of which outlive a single
// render, so reset them between tests.
afterEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});
