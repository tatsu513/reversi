import { BoardData, PredictState, State } from 'types';
import predictBottom from './search/predict/predictBottom';
import predictBottomLeft from './search/predict/predictBottomLeft';
import predictBottomRight from './search/predict/predictBottomRight';
import predictLeft from './search/predict/predictLeft';
import predictRight from './search/predict/predictRight';
import predictTop from './search/predict/predictTop';
import predictTopLeft from './search/predict/predictTopLeft';
import predictTopRight from './search/predict/predictTopRight';

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
