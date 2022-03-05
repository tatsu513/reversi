import { Typography } from '@mui/material';
import React from 'react';

type CounterStoneProps = {
  number: number;
  color: 'black' | 'white';
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

const CounterStone: React.VFC<CounterStoneProps> = ({ number, color }) => {
  const textColor = color === 'black' ? 'white' : 'black';
  return (
    <Typography
      variant='h6'
      sx={{
        ...stoneStyle,
        backgroundColor: color,
        color: textColor,
      }}
    >
      {number}
    </Typography>
  );
};

export default CounterStone;
