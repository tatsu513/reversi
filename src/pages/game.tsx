import { Box } from '@mui/material';
import Board from 'components/Board';
import changeCellState from 'logics/changeCellState';
import { getAllCellsData } from 'models/getAllCellsData';
import getNextState from 'models/getNextState';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { AllCellsData, State } from 'types';

const Index: NextPage = () => {
  const [data, setData] = useState<AllCellsData>(getAllCellsData());
  const [currentState, setCurrentState] = useState<State>(State.BLACK);

  const putStone = (x: number, y: number) => {
    setData(changeCellState(data, x, y, currentState));
    setCurrentState(getNextState(currentState));
  };
  return (
    <Box display='flex' justifyContent='center' sx={{ marginTop: '80px' }}>
      <Board data={data} onClick={putStone} />
    </Box>
  );
};

export default Index;
