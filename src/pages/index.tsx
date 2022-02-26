import type { NextPage } from 'next';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Box display='flex' justifyContent='center' sx={{ marginTop: '80px' }}>
      <Link href='/game' passHref>
        <Button variant='contained' size='large'>
          ゲームスタート
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
