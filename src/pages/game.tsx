import { Box } from '@mui/material';
import Board from 'components/Board';
import changeCellState from 'logics/changeCellState';
import getReversibleStatus from 'logics/getReversibleStatus';
import { getAllCellsData } from 'models/getAllCellsData';
import getNextState from 'models/getNextState';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { AllCellsData, ReversibleInfo, State } from 'types';

const Index: NextPage = () => {
  const [data, setData] = useState<AllCellsData>(getAllCellsData());
  const [currentState, setCurrentState] = useState<State>(State.BLACK);

  const putStone = (x: number, y: number) => {
    const reversibleState = getReversibleStatus(data, x, y, currentState);
    const success = Object.values(reversibleState)
      .map((value) => value)
      .some((v) => !!v.enable);
    if (!success) return;
    setData(changeCellState(data, x, y, currentState, reversibleState));
    setCurrentState(getNextState(currentState));
  };
  return (
    <Box display='flex' justifyContent='center' sx={{ marginTop: '80px' }}>
      <Board data={data} onClick={putStone} />
    </Box>
  );
};

export default Index;
