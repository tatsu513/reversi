import getNextState from 'models/getNextState';
import { AllCellsData, CellState, State } from 'types';

const searchRight = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): CellState => {
  const info: CellState = {
    enable: false,
    cells: [],
  };
  if (x > 5) return info;
  for (let i = 0; i < 7 - x + 1; i++) {
    if (x + i > 7) break;
    if (i === 0) continue;
    // 探索中のセル
    const target = data[y][x + i];
    const nextState = getNextState(state);
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    if (i >= 1 && target.state === nextState) {
      info.cells.push({ x: target.x, y: target.y });
    }
    if (i >= 2 && target.state === state) {
      info.enable = true;
      break;
    }
  }
  return info;
};

export default searchRight;
