import { AllCellsData, CellState, State } from 'types';

const predictTopRight = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  const cells: { x: number; y: number }[] = [];
  let isClosed: boolean = false;
  if (y <= 1 || x > 5) return false;
  const yDistance = y + 1;
  const xDistance = 7 - x + 1;
  const loopNum = yDistance - xDistance > 0 ? yDistance : xDistance;
  for (let i = 0; i < loopNum; i++) {
    if (x + i > 7) break;
    if (y - i < 0) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y - i][x + i];
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    if (i >= 1 && target.state === state) {
      cells.push({ x, y });
    }
    if (i >= 2 && target.state === state) {
      if (cells.length > 0) isClosed = true;
      break;
    }
  }
  return isClosed;
};

export default predictTopRight;
