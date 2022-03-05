import { State } from 'src/types';
import getTurnColor from './getTurnColor';

describe('getTurnColorのテスト', () => {
  test('State.BLACKを渡すと黒が返却', () => {
    const actual = getTurnColor(State.BLACK);
    expect(actual).toBe('黒');
  });
  test('State.BLACKを渡すと黒が返却', () => {
    const actual = getTurnColor(State.WHITE);
    expect(actual).toBe('白');
  });
});
