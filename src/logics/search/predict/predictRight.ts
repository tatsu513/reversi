import { AllCellsData, State } from 'types';

const predictRight = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  const cells: { x: number; y: number }[] = [];
  let isClosed: boolean = false;
  if (x > 5) return false;
  for (let i = 0; i < 7 - x + 1; i++) {
    if (x + i > 7) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y][x + i];
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

export default predictRight;
