import { AllCellsData, State } from 'types';

const changeCellState = (
  currentData: AllCellsData,
  x: number,
  y: number,
  state: State,
): AllCellsData => {
  const data = currentData.map((row, i) => {
    if (i !== y) return row;
    return row.map((cell, index) => {
      if (index !== x) return cell;
      return { x: cell.x, y: cell.y, state: state };
    });
  });
  return data;
};

export default changeCellState;
