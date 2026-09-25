import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import ThemeToggle from './ThemeToggle';

const NAME = { name: 'ダークモード' };

test('ユーザーがトグルを押すと、ページがダークモードに切り替わる', async () => {
  const screen = await render(<ThemeToggle />);

  await expect.element(screen.getByRole('button', NAME)).toHaveAttribute('aria-pressed', 'false');

  await screen.getByRole('button', NAME).click();

  await expect.element(screen.getByRole('button', NAME)).toHaveAttribute('aria-pressed', 'true');
  expect(document.documentElement).toHaveClass('dark');
});

test('ユーザーがもう一度押すと、ライトモードに戻る', async () => {
  const screen = await render(<ThemeToggle />);

  await screen.getByRole('button', NAME).click();
  await screen.getByRole('button', NAME).click();

  await expect.element(screen.getByRole('button', NAME)).toHaveAttribute('aria-pressed', 'false');
  expect(document.documentElement).not.toHaveClass('dark');
});

test('ユーザーが選んだテーマは、次の訪問のために保存される', async () => {
  const screen = await render(<ThemeToggle />);

  await screen.getByRole('button', NAME).click();

  expect(localStorage.getItem('theme')).toBe('dark');
});

test('前回ダークを選んだ状態で開くと、最初からダークモードで表示される', async () => {
  localStorage.setItem('theme', 'dark');

  const screen = await render(<ThemeToggle />);

  await expect.element(screen.getByRole('button', NAME)).toHaveAttribute('aria-pressed', 'true');
  expect(document.documentElement).toHaveClass('dark');
});
