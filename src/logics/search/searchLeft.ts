import { AllCellsData, State } from 'types';

const searchLeft = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  let enable = false;
  if (x <= 1) return enable;
  for (let i = 0; i < x; i++) {
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y][x - i];
    if (i === 1 && target.state === state) break;
    if (i >= 2 && target.state === state) {
      enable = true;
      break;
    }
  }
  return enable;
};

export default searchLeft;
