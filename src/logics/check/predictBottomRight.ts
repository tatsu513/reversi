import getNextStone from 'models/getNextStone';
import { BoardData, State } from 'types';

const predictBottomRight = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): boolean => {
  // y6以上 or x6以下は石が取れないのでfalse
  if (x >= 6 || y >= 6) return false;

  const cells: { x: number; y: number }[] = [];
  let enable: boolean = false;
  // 相手の色
  const nextState = getNextStone(state);
  // y方向への距離
  const yDistance = 7 - y + 1;
  // x方向への距離
  const xDistance = x + 1;
  // ループする回数を算出
  const loopNum = yDistance - xDistance > 0 ? yDistance : xDistance;
  for (let i = 0; i < loopNum; i++) {
    // 自分のセルの場合は次へ
    if (i === 0) continue;
    // ボードから出る場合は終了
    if (x + i > 7) break;
    if (y + i > 7) break;
    // 探索中のセル
    const target = data[y + i][x + i];
    // 次のセルが同じ色or石がなければ探索終了
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    // 次のセルが相手の石の場合データをpush
    if (i >= 1 && target.state === nextState) {
      cells.push({ x, y });
    }
    // 相手の石を挟んだらセルを有効にする
    if (i >= 1 && target.state === state) {
      if (cells.length > 0) enable = true;
      break;
    }
  }
  return enable;
};

export default predictBottomRight;
