import getNextStone from 'models/getNextStone';
import { BoardData, State } from 'types';

const predictTopRight = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): boolean => {
  // y1以下 or x6以上の場合は石を取れないのでfalse
  if (y <= 1 || x >= 6) return false;

  const cells: { x: number; y: number }[] = [];
  let enable: boolean = false;
  // 相手の色
  const nextState = getNextStone(state);
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
    // 1つ左上が同じ色or石がなければ探索終了
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

export default predictTopRight;
