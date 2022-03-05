import { Box, Typography } from '@mui/material';
import React from 'react';
import CounterStone from './CounterStone';

type counter = {
  black: number;
  white: number;
  total: number;
};

type GameDataProps = {
  counter: counter;
  currentStone: string;
};

const stoneStyle = {
  display: 'inline-block',
  height: '40px',
  width: '40px',
  border: '1px solid black',
  borderRadius: '20px',
  lineHeight: '40px',
  textAlign: 'center',
};

const GameData: React.VFC<GameDataProps> = ({ counter, currentStone }) => {
  return (
    <Box display='flex' justifyContent='space-between'>
      <CounterStone number={counter.black} color='black' />
      <Typography variant='h4' textAlign='center'>
        {currentStone}番
      </Typography>
      <CounterStone number={counter.white} color='white' />
    </Box>
  );
};

export default GameData;
