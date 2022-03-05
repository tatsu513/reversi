import { Button } from '@mui/material';
import React from 'react';

type MainButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const MainButton: React.VFC<MainButtonProps> = ({
  text,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant='contained'
      size='large'
      sx={{ width: '100%' }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default MainButton;
