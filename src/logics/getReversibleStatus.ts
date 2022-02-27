import { AllCellsData, ReversibleState, State } from 'types';
import searchBottom from './search/searchBottom';
import searchBottomRight from './search/searchBottomRight';
import searchLeft from './search/searchLeft';
import searchRight from './search/searchRight';
import searchTop from './search/searchTop';
import searchTopLeft from './search/searchTopLeft';
import searchTopRight from './search/searchTopRight';

const getReversibleStatus = (
  data: AllCellsData,
  x: number,
  y: number,
  state: State,
): ReversibleState => {
  const localData: AllCellsData = JSON.parse(JSON.stringify(data));
  const reversibleState: ReversibleState = {
    top: searchTop(data, x, y, state),
    topRight: searchTopRight(data, x, y, state),
    right: searchRight(data, x, y, state),
    bottomRight: searchBottomRight(data, x, y, state),
    bottom: searchBottom(data, x, y, state),
    bottomLeft: searchBottomRight(data, x, y, state),
    left: searchLeft(data, x, y, state),
    topLeft: searchTopLeft(data, x, y, state),
  };
  return reversibleState;
};

export default getReversibleStatus;
