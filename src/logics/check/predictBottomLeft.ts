import getNextStone from 'models/getNextStone';
import { BoardData, State } from 'types';

const predictBottomLeft = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): boolean => {
  // y6以上 or x1以下は石が取れないのでfalse
  if (x <= 1 || y >= 6) return false;

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
    // 自分の列・行は探索しない
    if (i === 0) continue;
    // ボードから出る場合は探索終了
    if (y + i > 7) break;
    if (x - i < 0) break;
    // 探索中のセル
    const target = data[y + i][x - i];
    // 1つ左下が同じ色or石がなければ探索終了
    if (i === 1 && (target.state === state || target.state === State.NONE))
      break;
    // 1つ左下以上が相手の石の場合データをpush
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

export default predictBottomLeft;