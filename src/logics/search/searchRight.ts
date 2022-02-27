import { AllCellsData, State } from 'types';

const searchRight = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  let enable = false;
  if (x > 5) return enable;
  for (let i = 0; i < 7 - x + 1; i++) {
    if (x + i > 7) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y][x + i];
    if (i === 1 && target.state === state) break;
    if (i >= 2 && target.state === state) {
      enable = true;
      break;
    }
  }
  return enable;
};

export default searchRight;
