import { Box } from '@mui/material';
import React from 'react';
import { CellType } from 'types';
import Cell from './Cell';

type RowProps = {
  num: number;
  row: CellType[];
  onClick: (x: number, y: number) => void;
};

const Row: React.VFC<RowProps> = ({ num, row, onClick }) => {
  return (
    <Box>
      {row.map((cell, i) => (
        <Cell key={i} cell={cell} onClick={onClick} />
      ))}
    </Box>
  );
};

export default Row;
