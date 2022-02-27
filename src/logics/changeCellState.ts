import { AllCellsData, State } from 'types';
import getReversibleStatus from './getReversibleStatus';
import searchBottom from './searchBottom';

const changeCellState = (
  currentData: AllCellsData,
  x: number,
  y: number,
  currentState: State,
): AllCellsData => {
  const reversibleState = getReversibleStatus(currentData, x, y, currentState);
  const success = Object.values(reversibleState)
    .map((value) => value)
    .some((v) => v);
  if (!success) return currentData;
  const newData: AllCellsData = JSON.parse(JSON.stringify(currentData));

  const allTargetCells = Object.values(reversibleState).flatMap((value) => {
    if (!value.enable) return [];
    return value.cells;
  });
  allTargetCells.forEach((cell) => {
    newData[cell.y][cell.x].state = currentState;
    newData[y][x].state = currentState;
  });
  console.log(newData);

  // const successData = bottomResult.data.map((row, i) => {
  //   if (i !== y) return row;
  //   return row.map((cell, index) => {
  //     if (index !== x) return cell;
  //     return { x: cell.x, y: cell.y, state: state };
  //   });
  // });
  return newData;
};

export default changeCellState;
