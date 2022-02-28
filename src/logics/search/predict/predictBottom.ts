import { AllCellsData, State } from 'types';

const predictBottom = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  const cells: { x: number; y: number }[] = [];
  let isClosed: boolean = false;
  if (y > 5) return false;
  for (let i = 0; i < 7 - y + 1; i++) {
    if (y + i > 7) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y + i][x];
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    if (i >= 1 && target.state === state) {
      cells.push({ x, y });
    }
    if (i >= 2 && target.state === state) {
      isClosed = true;
      break;
    }
  }
  return isClosed;
};

export default predictBottom;
