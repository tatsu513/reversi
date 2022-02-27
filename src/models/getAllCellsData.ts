import { AllCellsData, State } from 'types';

const getCells = (cellNum: number, rowNum: number) => {
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

const getRows = (rowNum: number) => {
  return [...Array(8).keys()].map((cellNum: number) =>
    getCells(cellNum, rowNum),
  );
};

export const getAllCellsData = (): AllCellsData => {
  return [...Array(8).keys()].map((key: number) => getRows(key));
};
