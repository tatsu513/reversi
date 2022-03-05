import { State } from 'src/types';
// 次に置く石の色
const getNextStone = (state: State) => {
  switch (state) {
    case State.BLACK:
      return State.WHITE;
    case State.WHITE:
      return State.BLACK;
    default:
      console.error('getNextStoneの引数に不正なデータが指定されました');
      throw new Error('getNextStoneの引数に不正なデータが指定されました');
  }
};

export default getNextStone;
