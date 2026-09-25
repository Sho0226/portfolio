import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import App from '../App';

test('ユーザーがWorksまでスクロールすると、ヘッダーのWorksが現在地として強調される', async () => {
  const screen = await render(<App />);

  document.getElementById('works')!.scrollIntoView();

  await expect
    .element(screen.getByRole('link', { name: 'Works' }))
    .toHaveAttribute('aria-current', 'location');
  await expect
    .element(screen.getByRole('link', { name: 'About' }))
    .not.toHaveAttribute('aria-current');
});

test('ユーザーが別のセクションへ移動すると、強調も一緒に移る', async () => {
  const screen = await render(<App />);

  document.getElementById('works')!.scrollIntoView();
  await expect
    .element(screen.getByRole('link', { name: 'Works' }))
    .toHaveAttribute('aria-current', 'location');

  document.getElementById('blog')!.scrollIntoView();

  await expect
    .element(screen.getByRole('link', { name: 'Blog' }))
    .toHaveAttribute('aria-current', 'location');
  await expect
    .element(screen.getByRole('link', { name: 'Works' }))
    .not.toHaveAttribute('aria-current');
});

test('ページ先頭では、どの項目も現在地として強調されない', async () => {
  const screen = await render(<App />);

  window.scrollTo(0, 0);

  await expect
    .element(screen.getByRole('link', { name: 'About' }))
    .not.toHaveAttribute('aria-current');
});
