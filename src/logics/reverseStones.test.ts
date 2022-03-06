import { getInitialBoard } from 'src/models/getInitialBoard';
import { State } from 'src/types';
import getNumberOfStone from './getNumberOfStone';
import getReverseData from './getReverseData';
import reverseStones from './reverseStones';

describe('reverseStonesのテスト', () => {
  let initialBoard = getInitialBoard();
  test('石を置いた位置で適切な反転可否が返却される', () => {
    // 1手目：黒【2, 4】
    const reverseData = getReverseData(initialBoard, 2, 4, State.BLACK);
    const newBoard = reverseStones(
      initialBoard,
      2,
      4,
      State.BLACK,
      reverseData!,
    );
    const board = JSON.parse(JSON.stringify(initialBoard));
    board[4][2].state = State.BLACK;
    board[4][3].state = State.BLACK;
    expect(newBoard).toEqual(board);

    // 2手目：白【2, 3】
    const reverseData2 = getReverseData(newBoard, 2, 3, State.WHITE);
    const newBoard2 = reverseStones(newBoard, 2, 3, State.WHITE, reverseData2!);
    board[3][2].state = State.WHITE;
    board[3][3].state = State.WHITE;
    expect(newBoard2).toEqual(board);
  });
});
