import { BoardData, State } from 'types';

const getNumbOfStone = (data: BoardData) => {
  const black = data.flatMap((row) => {
    return row.flatMap((cell) => {
      if (cell.state !== State.BLACK) return [];
      return cell;
    });
  });
  const white = data.flatMap((row) => {
    return row.flatMap((cell) => {
      if (cell.state !== State.WHITE) return [];
      return cell;
    });
  });
  return {
    black: black.length,
    white: white.length,
    total: black.length + white.length,
  };
};

export default getNumbOfStone;
