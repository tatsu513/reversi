import { getInitialBoard } from 'src/models/getInitialBoard';
import { State } from 'src/types';
import getCanPut from './getCanPut';

describe('getCanPutのテスト', () => {
  const initialBoard = getInitialBoard();
  test('初期ボードの黒番はtrueが返却', () => {
    const actual = getCanPut(initialBoard, State.BLACK);
    expect(actual).toBe(true);
  });
  test('初期ボードの白番はtrueが返却', () => {
    const actual = getCanPut(initialBoard, State.WHITE);
    expect(actual).toBe(true);
  });
});
