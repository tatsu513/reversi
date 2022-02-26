import React from 'react';
import { AllCellsData } from 'types';
import Row from './Row';

type BoardProps = {
  data: AllCellsData;
};

const Board: React.VFC<BoardProps> = ({ data }) => {
  return (
    <>
      {data.map((row, i) => (
        <Row key={i} row={row} num={i} />
      ))}
    </>
  );
};

export default Board;
