import { Box } from '@mui/material';
import React from 'react';
import { BoardData } from 'src/types';
import Row from './Row';

type BoardProps = {
  data: BoardData;
  onClick: (x: number, y: number) => void;
};

const Board: React.VFC<BoardProps> = ({ data, onClick }) => {
  return (
    <Box>
      {data.map((row, i) => (
        <Row key={i} row={row} num={i} onClick={onClick} />
      ))}
    </Box>
  );
};

export default Board;
