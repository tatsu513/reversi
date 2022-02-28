import { AllCellsData, State } from 'types';

const searchBottom = (
  currentData: AllCellsData,
  x: number,
  y: number,
  state: State,
): { data: AllCellsData; error: boolean } => {
  const localData: AllCellsData = JSON.parse(JSON.stringify(currentData));
  let error = false;

  for (let i = 0; i < localData.length; i++) {
    if (i + y > 7) {
      const targetRow = localData[i];
      const targetCellState = targetRow[x].state;
      if (
        (i === y + 1 && targetCellState === state) ||
        (i === y + 1 && targetCellState === State.NONE)
      ) {
        error = true;
        break;
      }
      if (state !== targetCellState) {
        localData[i][x].state = state;
      }
      if (state === targetCellState) {
        break;
      }
    }
  }
  return { data: localData, error };
};

export default searchBottom;
