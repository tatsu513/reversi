import getNextStone from 'src/models/getNextStone';
import { BoardData, CellState, State } from 'src/types';

const searchTopRight = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): CellState => {
  const info: CellState = {
    enable: false,
    cells: [],
  };
  // y1以下 or x6以上の場合は石を取れないのでfalse
  if (y <= 1 || x >= 6) return info;
  // y方向への距離
  const yDistance = y + 1;
  // x方向への距離
  const xDistance = 7 - x + 1;
  // ループする回数を算出
  const loopNum = yDistance - xDistance > 0 ? yDistance : xDistance;
  for (let i = 0; i < loopNum; i++) {
    // 自分のセルの場合は次へ
    if (i === 0) continue;
    // ボードから出る場合は終了
    if (x + i > 7) break;
    if (y - i < 0) break;
    // 探索中のセル
    const target = data[y - i][x + i];
    // 次のセルが同じ色or石がなければ探索終了
    const nextState = getNextStone(state);
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

export default searchTopRight;
