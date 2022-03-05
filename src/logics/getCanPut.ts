import { BoardData, PredictState, State } from 'types';
import predictBottom from './check/predictBottom';
import predictBottomLeft from './check/predictBottomLeft';
import predictBottomRight from './check/predictBottomRight';
import predictLeft from './check/predictLeft';
import predictRight from './check/predictRight';
import predictTop from './check/predictTop';
import predictTopLeft from './check/predictTopLeft';
import predictTopRight from './check/predictTopRight';

// 置けるセルがあるかのチェック
const getCanPut = (data: BoardData, state: State): boolean => {
  const reverseData = data.flatMap((row) => {
    return row.flatMap((cell) => {
      if (cell.state !== State.NONE) return [];
      const reversible = {
        top: predictTop(data, cell.x, cell.y, state),
        topRight: predictTopRight(data, cell.x, cell.y, state),
        right: predictRight(data, cell.x, cell.y, state),
        bottomRight: predictBottomRight(data, cell.x, cell.y, state),
        bottom: predictBottom(data, cell.x, cell.y, state),
        bottomLeft: predictBottomLeft(data, cell.x, cell.y, state),
        left: predictLeft(data, cell.x, cell.y, state),
        topLeft: predictTopLeft(data, cell.x, cell.y, state),
      };
      return Object.values(reversible)
        .map((b) => b)
        .some((v) => !!v);
    });
  });
  return reverseData.some((d) => !!d);
};

export default getCanPut;
