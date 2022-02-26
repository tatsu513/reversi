import { Box } from '@mui/material';
import React from 'react';
import { CellType } from 'types';
import Cell from './Cell';

type RowProps = {
  num: number;
  row: CellType[];
};

const Row: React.VFC<RowProps> = ({ num, row }) => {
  return (
    <Box>
      {row.map((cell, i) => (
        <Cell key={i} cell={cell} />
      ))}
    </Box>
  );
};

export default Row;
