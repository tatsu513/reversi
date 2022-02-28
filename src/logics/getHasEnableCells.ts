import getNextState from 'models/getNextState';
import { AllCellsData, ReversibleInfo, State } from 'types';
import getReversibleStatus from './getReversibleStatus';

const getHasEnableCells = (
  updatedData: AllCellsData,
  currentState: State,
): ReversibleInfo[] => {
  return updatedData.flatMap((row) => {
    return row.flatMap((cell) => {
      if (cell.state !== State.NONE) return [];
      const hasEnableCell = getReversibleStatus(
        updatedData,
        cell.x,
        cell.y,
        getNextState(currentState),
      );
      if (!hasEnableCell) return [];
      return hasEnableCell;
    });
  });
};

export default getHasEnableCells;
