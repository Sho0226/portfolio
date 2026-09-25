import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import About from './About';

const renderPhoto = async () => {
  const screen = await render(<About />);
  return screen.container.querySelector('img')!;
};

test('ユーザーがプロフィール写真を長押ししても、保存メニューが開かない', async () => {
  const image = await renderPhoto();

  const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
  image.dispatchEvent(event);

  expect(event.defaultPrevented).toBe(true);
});

test('ユーザーがプロフィール写真をドラッグしても、画像が引き出されない', async () => {
  const image = await renderPhoto();

  expect(image.draggable).toBe(false);
});
