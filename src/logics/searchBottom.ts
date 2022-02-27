import getNextState from 'models/getNextState';
import { AllCellsData, CellType, State } from 'types';

const searchBottom = (
  currentData: AllCellsData,
  x: number,
  y: number,
  state: State,
): { data: AllCellsData; error: boolean } => {
  const localData: AllCellsData = JSON.parse(JSON.stringify(currentData));
  let error = false;
  const newState = getNextState(state);

  for (let i = 0; i < localData.length; i++) {
    if (i > y) {
      const data = localData[i];
      const targetCellState = data[x].state;
      if (i === y + 1 && targetCellState === state) {
        error = true;
        break;
      }
      if (state !== targetCellState) {
        localData[i][x].state = newState;
      }
      if (state === targetCellState) {
        break;
      }
    }
  }
  return { data: localData, error };
};

export default searchBottom;
