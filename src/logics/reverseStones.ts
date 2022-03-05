import { BoardData, ReversibleInfo, State } from 'types';

// 石を反転してボードの状態を返す
const reverseStones = (
  currentData: BoardData,
  x: number,
  y: number,
  currentState: State,
  reversibleState: ReversibleInfo,
): BoardData => {
  const localData: BoardData = JSON.parse(JSON.stringify(currentData));
  // 反転するセルを抽出
  const targetCells = Object.values(reversibleState).flatMap((value) => {
    if (!value.enable) return [];
    return value.cells;
  });
  // 抽出したセルのデータをもとに反転させる
  targetCells.forEach((cell) => {
    localData[cell.y][cell.x].state = currentState;
    localData[y][x].state = currentState;
  });
  return localData;
};

export default reverseStones;
