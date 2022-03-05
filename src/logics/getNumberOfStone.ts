import { BoardData, State } from 'src/types';

// 石の数を記録
const getNumberOfStone = (data: BoardData) => {
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

export default getNumberOfStone;
