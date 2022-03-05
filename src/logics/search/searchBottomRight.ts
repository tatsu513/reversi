import getNextStone from 'models/getNextStone';
import { BoardData, CellState, State } from 'types';

const searchBottomRight = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): CellState => {
  const info: CellState = {
    enable: false,
    cells: [],
  };
  if (x > 5) return info;
  const yDistance = 7 - y + 1;
  const xDistance = x + 1;
  const loopNum = yDistance - xDistance > 0 ? yDistance : xDistance;
  for (let i = 0; i < loopNum; i++) {
    if (x + i > 7) break;
    if (y + i > 7) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y + i][x + i];
    const nextState = getNextStone(state);
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    if (i >= 1 && target.state === nextState) {
      info.cells.push({ x: target.x, y: target.y });
    }
    if (i >= 1 && target.state === state) {
      info.enable = true;
      break;
    }
  }
  if (!info.enable && info.cells.length > 0) {
    info.cells = [];
  }
  return info;
};

export default searchBottomRight;
