import { AllCellsData, PredictState, State } from 'types';
import predictBottom from './search/predict/predictBottom';
import predictBottomLeft from './search/predict/predictBottomLeft';
import predictBottomRight from './search/predict/predictBottomRight';
import predictLeft from './search/predict/predictLeft';
import predictRight from './search/predict/predictRight';
import predictTop from './search/predict/predictTop';
import predictTopLeft from './search/predict/predictTopLeft';
import predictTopRight from './search/predict/predictTopRight';

const getCanPut = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): boolean => {
  const reversibleState: PredictState = {
    top: predictTop(data, x, y, state),
    topRight: predictTopRight(data, x, y, state),
    right: predictRight(data, x, y, state),
    bottomRight: predictBottomRight(data, x, y, state),
    bottom: predictBottom(data, x, y, state),
    bottomLeft: predictBottomLeft(data, x, y, state),
    left: predictLeft(data, x, y, state),
    topLeft: predictTopLeft(data, x, y, state),
  };
  const success = Object.values(reversibleState)
    .map((b) => b)
    .some((v) => !!v);
  return success;
};

export default getCanPut;
