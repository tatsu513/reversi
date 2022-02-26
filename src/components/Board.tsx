import React from 'react';
import { AllCellsData } from 'types';
import Row from './Row';

type BoardProps = {
  data: AllCellsData;
  onClick: (x: number, y: number) => void;
};

const Board: React.VFC<BoardProps> = ({ data, onClick }) => {
  return (
    <>
      {data.map((row, i) => (
        <Row key={i} row={row} num={i} onClick={onClick} />
      ))}
    </>
  );
};

export default Board;
