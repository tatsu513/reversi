import { BoardData, State } from 'types';

const predictTop = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): boolean => {
  const cells: { x: number; y: number }[] = [];
  let isClosed = false;
  if (y <= 1) return false;
  for (let i = 0; i < y + 1; i++) {
    if (y - i < 0) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y - i][x];
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

export default predictTop;
