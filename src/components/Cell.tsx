import { Box, Button } from '@mui/material';
import { borderBottom } from '@mui/system';
import React from 'react';
import Stone from './Stone';
import { CellType } from 'types';

type CellProps = {
  cell: CellType;
  onClick: (x: number, y: number) => void;
};

const cellStyle = {
  height: '64px',
  width: '64px',
  backgroundColor: 'darkGreen',
  border: '2px solid black',
  position: 'relative',
  cursor: 'pointer',
};

const StoneBox = {
  height: '48px',
  width: '48px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const Cell: React.VFC<CellProps> = ({ cell, onClick }) => {
  const putStone = () => {
    onClick(cell.x, cell.y);
  };
  return (
    <Box sx={{ ...cellStyle }} onClick={putStone}>
      <Box sx={{ ...StoneBox }}>
        <Stone state={cell.state} />
      </Box>
    </Box>
  );
};

export default Cell;
