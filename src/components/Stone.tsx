import { Box } from '@mui/material';
import events from 'events';
import React from 'react';
import { State } from 'src/types';

type StoneProps = {
  state: State;
};

const stone = {
  height: '100%',
  width: '100%',
  borderRadius: '50%',
  pointerEvents: 'none',
};

const Stone: React.VFC<StoneProps> = ({ state }) => {
  const color =
    state === State.WHITE
      ? 'white'
      : state === State.BLACK
      ? 'black'
      : 'transparent';
  return <Box sx={{ ...stone, backgroundColor: color }} />;
};

export default Stone;
