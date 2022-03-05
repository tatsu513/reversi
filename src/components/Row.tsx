import { Box } from '@mui/material';
import React from 'react';
import { RowData } from 'src/types';
import Cell from './Cell';

type RowProps = {
  num: number;
  row: RowData;
  onClick: (x: number, y: number) => void;
};

const Row: React.VFC<RowProps> = ({ num, row, onClick }) => {
  return (
    <Box display='flex'>
      {row.map((cell, i) => (
        <Cell key={i} cell={cell} onClick={onClick} />
      ))}
    </Box>
  );
};

export default Row;
