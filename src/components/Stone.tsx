import { Box } from '@mui/material';
import React from 'react';
import { State } from 'types';

type StoneProps = {
  state: State;
};

const stone = {
  height: '100%',
  width: '100%',
  borderRadius: '50%',
};

const Stone: React.VFC<StoneProps> = ({ state }) => {
  console.log(state);
  const color =
    state === State.WHITE
      ? 'white'
      : state === State.BLACK
      ? 'black'
      : 'transparent';
  return <Box sx={{ ...stone, backgroundColor: color }} />;
};

export default Stone;
