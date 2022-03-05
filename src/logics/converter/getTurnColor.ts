import { State } from 'src/types';

const getTurnColor = (state: State) => {
  switch (state) {
    case State.BLACK:
      return '黒';
    case State.WHITE:
      return '白';
    default:
      console.error('whiteとblack以外が指定されました');
      throw new Error('whiteとblack以外が指定されました');
  }
};

export default getTurnColor;
