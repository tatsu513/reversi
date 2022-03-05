import { State } from 'types';
// 次に置く石の色
const getNextStone = (state: State) => {
  switch (state) {
    case State.BLACK:
      return State.WHITE;
    case State.WHITE:
      return State.BLACK;
    default:
      throw new Error('getNextStoneの引数に不正なデータが指定されました');
  }
};

export default getNextStone;
