import { Box, Button, Typography } from '@mui/material';
import Board from 'components/Board';
import changeCellState from 'logics/changeCellState';
import getTurnColor from 'logics/converter/getTurnColor';
import getHasEnableCells from 'logics/getHasEnableCells';
import getNumbOfStone from 'logics/getNumbOfStone';
import getReversibleStatus from 'logics/getReversibleStatus';
import { getAllCellsData } from 'models/getAllCellsData';
import getNextState from 'models/getNextState';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { AllCellsData, ReversibleInfo, State } from 'types';

const stoneStyle = {
  display: 'inline-block',
  height: '40px',
  width: '40px',
  border: '1px solid black',
  borderRadius: '20px',
  lineHeight: '40px',
  textAlign: 'center',
};

const Index: NextPage = () => {
  const [data, setData] = useState<AllCellsData>(getAllCellsData());
  const [currentState, setCurrentState] = useState<State>(State.BLACK);
  const [canPut, setCanPut] = useState(true);

  const counter = getNumbOfStone(data);
  const enableMoreButton =
    counter.total === 64 || counter.black === 0 || counter.white === 0;
  const putStone = (x: number, y: number) => {
    const reversibleState = getReversibleStatus(data, x, y, currentState);
    if (!reversibleState) return;
    const updatedData = changeCellState(
      data,
      x,
      y,
      currentState,
      reversibleState,
    );
    setData(updatedData);
    // setCanPut(getHasEnableCells(updatedData, currentState));
    setCurrentState(getNextState(currentState));
  };

  useEffect(() => {
    const canPutStatus = getHasEnableCells(data, currentState);
    console.log({ canPutStatus });
    setCanPut(canPutStatus);
  }, [data, currentState]);

  const handlePassClick = useCallback(() => {
    setCurrentState(getNextState(currentState));
  }, [currentState]);
  const handleMoreClick = useCallback(() => {
    setData(getAllCellsData());
  }, []);
  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{ margin: '80px auto', flexFlow: 'column', width: '512px' }}
    >
      <Box display='flex' justifyContent='space-between'>
        <Typography
          variant='h6'
          sx={{ ...stoneStyle, backgroundColor: 'black', color: 'white' }}
        >
          {counter.black}
        </Typography>
        <Typography variant='h4' textAlign='center'>
          {getTurnColor(currentState)}番
        </Typography>
        <Typography
          variant='h6'
          sx={{ ...stoneStyle, backgroundColor: 'white' }}
        >
          {counter.white}
        </Typography>
      </Box>
      <Box sx={{ marginTop: '24px' }}>
        <Board data={data} onClick={putStone} />
      </Box>
      <Box sx={{ width: '50%', margin: '24px auto' }}>
        {!enableMoreButton && (
          <Button
            onClick={handlePassClick}
            variant='contained'
            size='large'
            sx={{ width: '100%' }}
            disabled={canPut}
          >
            パス
          </Button>
        )}
        {enableMoreButton && (
          <Button
            onClick={handleMoreClick}
            variant='contained'
            size='large'
            sx={{ width: '100%' }}
          >
            もう一度プレイ
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Index;
