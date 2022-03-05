import getNextStone from 'src/models/getNextStone';
import { BoardData, State } from 'src/types';

const predictBottom = (
  data: BoardData,
  x: number,
  y: number,
  state: State,
): boolean => {
  // y6以上の場合は石を取れないのでfalse
  if (y >= 6) return false;

  const cells: { x: number; y: number }[] = [];
  let enable: boolean = false;
  // 相手の色
  const nextState = getNextStone(state);
  for (let i = 0; i < 7 - y + 1; i++) {
    // 自分の列は探索しない
    if (i === 0) continue;
    // 探索する行がボーダから出る場合は探索終了
    if (y + i > 7) break;
    // 探索中のセル
    const target = data[y + i][x];
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

export default predictBottom;
