import { getInitialBoard } from 'src/models/getInitialBoard';
import { State } from 'src/types';
import getNumberOfStone from './getNumberOfStone';
import getReverseData from './getReverseData';
import reverseStones from './reverseStones';

describe('getReverseDataのテスト', () => {
  const initialBoard = getInitialBoard();
  test('石を置いた位置で適切な反転可否が返却される', () => {
    // 1手目：黒【2, 4】
    const actual = getReverseData(initialBoard, 2, 4, State.BLACK);
    expect(actual).toEqual({
      top: { enable: false, cells: [] },
      topRight: { enable: false, cells: [] },
      right: { enable: true, cells: [{ x: 3, y: 4 }] },
      bottomRight: { enable: false, cells: [] },
      bottom: { enable: false, cells: [] },
      bottomLeft: { enable: false, cells: [] },
      left: { enable: false, cells: [] },
      topLeft: { enable: false, cells: [] },
    });

    // 2手目：白【2, 6】
    const newBoard = reverseStones(initialBoard, 2, 4, State.BLACK, actual!);
    const actual2 = getReverseData(newBoard, 2, 5, State.WHITE);
    expect(actual2).toEqual({
      top: { enable: false, cells: [] },
      topRight: { enable: true, cells: [{ x: 3, y: 4 }] },
      right: { enable: false, cells: [] },
      bottomRight: { enable: false, cells: [] },
      bottom: { enable: false, cells: [] },
      bottomLeft: { enable: false, cells: [] },
      left: { enable: false, cells: [] },
      topLeft: { enable: false, cells: [] },
    });
  });
});
