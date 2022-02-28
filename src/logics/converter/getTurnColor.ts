import { State } from 'types';

const getTurnColor = (state: State) => {
  switch (state) {
    case State.BLACK:
      return '黒';
    case State.WHITE:
      return '白';
    default:
      return 'Loading';
  }
};

export default getTurnColor;
