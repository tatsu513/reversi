import getNextState from 'models/getNextState';
import { AllCellsData, ReversibleInfo, State } from 'types';
import getReversibleStatus from './getReversibleStatus';

const getHasEnableCells = (
  updatedData: AllCellsData,
  currentState: State,
): boolean => {
  const canPutPosition = updatedData.flatMap((row) => {
    return row.flatMap((cell) => {
      if (cell.state !== State.NONE) return [];
      const hasEnableCell = getReversibleStatus(
        updatedData,
        cell.x,
        cell.y,
        getNextState(currentState),
      );
      if (!hasEnableCell) return [];
      return { x: cell.x, y: cell.y };
    });
  });
  console.log({ canPutPosition });
  return canPutPosition.length > 0;
};

export default getHasEnableCells;
