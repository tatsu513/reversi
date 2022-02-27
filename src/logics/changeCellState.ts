import { AllCellsData, ReversibleInfo, State } from 'types';
import getReversibleStatus from './getReversibleStatus';
import searchBottom from './searchBottom';

const changeCellState = (
  currentData: AllCellsData,
  x: number,
  y: number,
  currentState: State,
  reversibleState: ReversibleInfo,
): AllCellsData => {
  const newData: AllCellsData = JSON.parse(JSON.stringify(currentData));
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
