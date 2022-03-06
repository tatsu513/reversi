import { getInitialBoard } from 'src/models/getInitialBoard';
import { State } from 'src/types';
import getNumberOfStone from './getNumberOfStone';
import getReverseData from './getReverseData';
import reverseStones from './reverseStones';

describe('getNumberOfStoneのテスト', () => {
  const initialBoard = getInitialBoard();
  test('初期ボードのカウントは黒2/白2/合計4', () => {
    const actual = getNumberOfStone(initialBoard);
    expect(actual).toEqual({ black: 2, white: 2, total: 4 });
  });

  test('石を置くと結果がカウントされる', () => {
    // 1手目：黒【2, 4】
    const reverseData = getReverseData(initialBoard, 2, 4, State.BLACK);
    const newBoard = reverseStones(
      initialBoard,
      2,
      4,
      State.BLACK,
      reverseData!,
    );
    const actual = getNumberOfStone(newBoard);
    expect(actual).toEqual({ black: 4, white: 1, total: 5 });

    // 2手目：白【4, 5】
    const reverseData2 = getReverseData(newBoard, 4, 5, State.WHITE);
    const newBoard2 = reverseStones(newBoard, 4, 5, State.WHITE, reverseData2!);
    const actual2 = getNumberOfStone(newBoard2);
    expect(actual2).toEqual({ black: 3, white: 3, total: 6 });
  });
});
