import getNextStone from 'src/models/getNextStone';
import { BoardData, State } from 'src/types';

const predictRight = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): boolean => {
  // x6以下の場合は石を取れないのでfalse
  if (x >= 6) return false;

  const cells: { x: number; y: number }[] = [];
  let enable: boolean = false;
  // 相手の色
  const nextState = getNextStone(state);
  for (let i = 0; i < 7 - x + 1; i++) {
    // 自分のセルの場合は次へ
    if (i === 0) continue;
    // ボードから出る場合は終了
    if (x + i > 7) break;
    // 探索中のセル
    const target = data[y][x + i];
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

export default predictRight;
