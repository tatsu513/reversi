import { AllCellsData, State } from 'types';

const predictBottomLeft = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  const cells: { x: number; y: number }[] = [];
  let isClosed: boolean = false;
  if (x <= 1) return false;
  const yDistance = 7 - y + 1;
  const xDistance = x + 1;
  const loopNum = yDistance - xDistance > 0 ? yDistance : xDistance;
  for (let i = 0; i < loopNum; i++) {
    if (y + i > 7) break;
    if (x - i < 0) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y + i][x - i];
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

export default predictBottomLeft;
