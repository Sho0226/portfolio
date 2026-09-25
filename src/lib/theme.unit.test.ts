import { describe, expect, test } from 'vitest';
import { oppositeTheme, parsePreference, resolveTheme } from './theme';

describe('resolveTheme', () => {
  test('OSがダークを好むとき、選択がなければダークになる', () => {
    expect(resolveTheme('system', true)).toBe('dark');
  });

  test('OSがライトを好むとき、選択がなければライトになる', () => {
    expect(resolveTheme('system', false)).toBe('light');
  });

  test('明示的な選択はOSの設定より優先される', () => {
    expect(resolveTheme('light', true)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
  });
});

describe('parsePreference', () => {
  test('保存された値がそのまま設定として読み出される', () => {
    expect(parsePreference('dark')).toBe('dark');
    expect(parsePreference('light')).toBe('light');
  });

  test('未保存や壊れた値はOS追従として扱われる', () => {
    expect(parsePreference(null)).toBe('system');
    expect(parsePreference('')).toBe('system');
    expect(parsePreference('Dark')).toBe('system');
  });
});

test('oppositeThemeは2つのテーマを往復する', () => {
  expect(oppositeTheme('light')).toBe('dark');
  expect(oppositeTheme('dark')).toBe('light');
});
