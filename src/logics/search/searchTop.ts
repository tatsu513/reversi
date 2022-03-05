import getNextStone from 'src/models/getNextStone';
import { BoardData, CellState, State } from 'src/types';

const searchTop = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): CellState => {
  const info: CellState = {
    enable: false,
    cells: [],
  };
  // y1以下の場合は石を取れないのでfalse
  if (y <= 1) return info;
  // 相手の色
  const nextState = getNextStone(state);
  for (let i = 0; i < y + 1; i++) {
    // 自分の列は探索しない
    if (i === 0) continue;
    // ボーダから出る場合は探索終了
    if (y - i < 0) break;
    // 探索中のセル
    const target = data[y - i][x];
    // 次のセルが同じ色or石がなければ探索終了
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    // 探索中のセルが相手の石の場合データをpush
    if (i >= 1 && target.state === nextState) {
      info.cells.push({ x: target.x, y: target.y });
    }
    // 相手の石を挟んだらセルを有効にする
    if (i >= 2 && target.state === state) {
      info.enable = true;
      break;
    }
  }
  // 石を挟めなかった場合はcellsを空にする
  if (!info.enable && info.cells.length > 0) {
    info.cells = [];
  }
  return info;
};

export default searchTop;
