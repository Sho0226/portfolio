import './browser-setup';

// Transitions are the main source of "the pixels were mid-fade" flake, so the
// VRT project renders every state settled.
const style = document.createElement('style');
style.textContent = `*, *::before, *::after {
  transition: none !important;
  animation: none !important;
  scroll-behavior: auto !important;
}`;
document.head.append(style);
