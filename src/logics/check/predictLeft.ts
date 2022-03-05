import getNextStone from 'src/models/getNextStone';
import { BoardData, State } from 'src/types';

const predictLeft = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): boolean => {
  // x1以下の場合は石を取れないのでfalse
  if (x <= 1) return false;

  const cells: { x: number; y: number }[] = [];
  let enable: boolean = false;
  // 相手の色
  const nextState = getNextStone(state);
  for (let i = 0; i < x + 1; i++) {
    // 自分の列の場合は次の列へ
    if (i === 0) continue;
    // 探索する行がボードから出る場合は探索終了
    if (x - i < 0) break;
    // 探索中のセル
    const target = data[y][x - i];
    // 次のセルが同じ色or石がなければ探索終了
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    // 探索中のセルが相手の石の場合データをpush
    if (i >= 1 && target.state === nextState) {
      cells.push({ x, y });
    }
    // 相手の石を挟んだらセルを有効にする
    if (i >= 2 && target.state === state) {
      if (cells.length > 0) enable = true;
      break;
    }
  }
  return enable;
};

export default predictLeft;
