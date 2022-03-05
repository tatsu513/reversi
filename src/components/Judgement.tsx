import { Box, Typography } from '@mui/material';
import React from 'react';

type JudgementProps = {
  winner: '黒' | '白';
};

const Judgement: React.VFC<JudgementProps> = ({ winner }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant='h2' sx={{ lineHeight: '2' }}>
        【{winner}】の勝ち
      </Typography>
    </Box>
  );
};

export default Judgement;
