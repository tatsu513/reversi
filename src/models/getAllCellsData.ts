import { AllCellsData, State } from 'types';

const getCells = (index: number, rowNum: number) => {
  if (rowNum === 3 && index === 3) {
    return { x: index, y: rowNum, state: State.BLACK };
  } else if (rowNum === 3 && index === 4) {
    return { x: index, y: rowNum, state: State.WHITE };
  } else if (rowNum === 4 && index === 3) {
    return { x: index, y: rowNum, state: State.WHITE };
  } else if (rowNum === 4 && index === 4) {
    return { x: index, y: rowNum, state: State.BLACK };
  } else {
    return { x: index, y: rowNum, state: State.NONE };
  }
};

const getRows = (rowNum: number) => {
  return [...Array(8).keys()].map((key: number) => getCells(key, rowNum));
};

export const getAllCellsData = (): AllCellsData => {
  return [...Array(8).keys()].map((key: number) => getRows(key));
};
