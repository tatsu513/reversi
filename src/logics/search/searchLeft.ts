import getNextStone from 'models/getNextStone';
import { BoardData, CellState, State } from 'types';

const searchLeft = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): CellState => {
  const info: CellState = {
    enable: false,
    cells: [],
  };
  // x1以下の場合は石を取れないのでfalse
  if (x <= 1) return info;
  // 相手の色
  const nextState = getNextStone(state);
  for (let i = 0; i < x + 1; i++) {
    // 自分のセルの場合は次へ
    if (i === 0) continue;
    // ボードから出る場合は終了
    if (x - i < 0) break;
    // 探索中のセル
    const target = data[y][x - i];
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

export default searchLeft;
