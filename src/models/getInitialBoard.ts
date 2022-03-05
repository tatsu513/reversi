import { BoardData, State } from 'types';
// 初期セル
const getInitialCells = (cellNum: number, rowNum: number) => {
  if (rowNum === 3 && cellNum === 3) {
    return { x: cellNum, y: rowNum, state: State.BLACK };
  } else if (rowNum === 3 && cellNum === 4) {
    return { x: cellNum, y: rowNum, state: State.WHITE };
  } else if (rowNum === 4 && cellNum === 3) {
    return { x: cellNum, y: rowNum, state: State.WHITE };
  } else if (rowNum === 4 && cellNum === 4) {
    return { x: cellNum, y: rowNum, state: State.BLACK };
  } else {
    return { x: cellNum, y: rowNum, state: State.NONE };
  }
};
// 初期行
const getInitialRows = (rowNum: number) => {
  return [...Array(8).keys()].map((cellNum: number) =>
    getInitialCells(cellNum, rowNum),
  );
};
// 初期ボード
export const getInitialBoard = (): BoardData => {
  return [...Array(8).keys()].map((key: number) => getInitialRows(key));
};
