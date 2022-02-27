import { AllCellsData, State } from 'types';
import getReversibleStatus from './getReversibleStatus';
import searchBottom from './searchBottom';

const changeCellState = (
  currentData: AllCellsData,
  x: number,
  y: number,
  state: State,
): AllCellsData => {
  console.log({ a: getReversibleStatus(currentData, x, y, state) });
  // const bottomResult = searchBottom(currentData, x, y, state);
  // const topResult = searchTop(bottomResult.data, x, y, state);
  // if (topResult.error) return currentData;

  // const successData = bottomResult.data.map((row, i) => {
  //   if (i !== y) return row;
  //   return row.map((cell, index) => {
  //     if (index !== x) return cell;
  //     return { x: cell.x, y: cell.y, state: state };
  //   });
  // });
  return currentData;
};

export default changeCellState;
