import { Box } from '@mui/material';
import Board from 'components/Board';
import { getAllCellsData } from 'models/getAllCellsData';
import { NextPage } from 'next';
import React from 'react';

const Index: NextPage = () => {
  const data = getAllCellsData();
  return (
    <Box display='flex' justifyContent='center' sx={{ marginTop: '80px' }}>
      <Board data={data} />
    </Box>
  );
};

export default Index;
