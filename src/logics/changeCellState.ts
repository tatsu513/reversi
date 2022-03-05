import { BoardData, ReversibleInfo, State } from 'types';

const changeCellState = (
  currentData: BoardData,
  x: number,
  y: number,
  currentState: State,
  reversibleState: ReversibleInfo,
): BoardData => {
  const newData: BoardData = JSON.parse(JSON.stringify(currentData));
  const allTargetCells = Object.values(reversibleState).flatMap((value) => {
    if (!value.enable) return [];
    return value.cells;
  });
  allTargetCells.forEach((cell) => {
    newData[cell.y][cell.x].state = currentState;
    newData[y][x].state = currentState;
  });
  return newData;
};

export default changeCellState;
