import axe from 'axe-core';
import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import App from './App';

test('ユーザーがポートフォリオを開いたとき、アクセシビリティ違反がない', async () => {
  const screen = await render(<App />);

  const results = await axe.run(screen.container);

  expect(results).toHaveNoViolations();
});

test('ユーザーがダークモードに切り替えたとき、アクセシビリティ違反がない', async () => {
  const screen = await render(<App />);

  await screen.getByRole('button', { name: 'ダークモード' }).click();
  await expect.element(screen.getByRole('button', { name: 'ダークモード' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  const results = await axe.run(screen.container);

  expect(results).toHaveNoViolations();
});
