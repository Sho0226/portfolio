import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import App from '../App';

const scrollTo = async (id: string) => {
  document.getElementById(id)!.scrollIntoView();
  // One frame for the observer callback, one for React to paint the result.
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
};

test('ヘッダーは現在地の項目だけを太字で強調する', async () => {
  const screen = await render(<App />);

  await scrollTo('works');

  await expect(screen.getByRole('banner')).toMatchScreenshot('nav-current-works');
});

test('ページ最下部では、Contactが強調される', async () => {
  const screen = await render(<App />);

  await scrollTo('contact');

  await expect(screen.getByRole('banner')).toMatchScreenshot('nav-current-contact');
});

test('ページ先頭では、どの項目も強調されない', async () => {
  const screen = await render(<App />);

  window.scrollTo(0, 0);
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  await expect(screen.getByRole('banner')).toMatchScreenshot('nav-current-none');
});

test('ダークモードでも現在地の強調が見える', async () => {
  const screen = await render(<App />);

  // Press the real toggle rather than setting the class, so the screenshot
  // also locks in the toggle's own dark state.
  await screen.getByRole('button', { name: 'ダークモード' }).click();
  await scrollTo('works');

  await expect(screen.getByRole('banner')).toMatchScreenshot('nav-current-works-dark');
});
