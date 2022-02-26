import { State } from 'types';

const getNextState = (state: State) => {
  switch (state) {
    case State.BLACK:
      return State.WHITE;
    case State.WHITE:
      return State.BLACK;
    default:
      return State.NONE;
  }
};

export default getNextState;
