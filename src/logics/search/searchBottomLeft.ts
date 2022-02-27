import { AllCellsData, State } from 'types';

const searchBottomRight = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  let enable = false;
  if (x <= 1) return enable;
  const loopNum = x - y < 0 ? x : y;
  for (let i = 0; i < loopNum; i++) {
    if (y + i > 7) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y + i][x - i];
    if (i === 1 && target.state === state) break;
    if (i >= 2 && target.state === state) {
      enable = true;
      break;
    }
  }
  return enable;
};

export default searchBottomRight;
