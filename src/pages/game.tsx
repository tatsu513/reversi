import { Box, Button, Typography } from '@mui/material';
import Board from 'components/Board';
import changeCellState from 'logics/changeCellState';
import getTurnColor from 'logics/converter/getTurnColor';
import getCanPut from 'logics/getCanPut';
import getNumbOfStone from 'logics/getNumbOfStone';
import getReversibleStatus from 'logics/getReversibleStatus';
import { getAllCellsData } from 'models/getAllCellsData';
import getNextState from 'models/getNextState';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { AllCellsData, State } from 'types';

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

  const [numOfPass, setNumOfPass] = useState(0);

  const counter = getNumbOfStone(data);
  const enableMoreButton =
    counter.total === 64 ||
    counter.black === 0 ||
    counter.white === 0 ||
    numOfPass > 1;
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
    setCurrentState(getNextState(currentState));
  };

  const handlePassClick = useCallback(() => {
    setCurrentState(getNextState(currentState));
  }, [currentState]);

  const handleMoreClick = useCallback(() => {
    setData(getAllCellsData());
  }, []);

  useEffect(() => {
    const canPuts = data.flatMap((row) => {
      return row.flatMap((cell) => {
        if (cell.state !== State.NONE) return [];
        return getCanPut(data, cell.x, cell.y, currentState);
      });
    });
    const isOk = canPuts.some((v) => !!v);
    isOk ? setNumOfPass(0) : setNumOfPass((prev) => prev++);
    setCanPut(isOk);
  }, [data, currentState]);
  return (
    <Box
      display='flex'
      justifyContent='center'
      position='relative'
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
      {enableMoreButton && (
        <Box
          sx={{
            width: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            textAlign: 'center',
          }}
          position='absolute'
        >
          <Typography variant='h2' sx={{ lineHeight: '2' }}>
            【{counter.black > counter.white ? '黒' : '白'}】の勝ち
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Index;
