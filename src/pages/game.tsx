import { Box, Button, Typography } from '@mui/material';
import Board from 'components/Board';
import GameData from 'components/GameData';
import Judgement from 'components/Judgement';
import MainButton from 'components/MainButton';
import reverseStones from 'logics/reverseStones';
import getTurnColor from 'logics/converter/getTurnColor';
import getCanPut from 'logics/getCanPut';
import getNumberOfStone from 'logics/getNumberOfStone';
import getReverseData from 'logics/getReverseData';
import { getInitialBoard } from 'models/getInitialBoard';
import getNextStone from 'models/getNextStone';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { BoardData, State } from 'types';

const Index: NextPage = () => {
  const [boardData, setBoardData] = useState<BoardData>(getInitialBoard());
  const [currentStone, setCurrentStone] = useState<State>(State.BLACK);
  const [canPut, setCanPut] = useState(true);
  const [numOfPass, setNumOfPass] = useState(0);

  const counter = getNumberOfStone(boardData);
  const isFinished =
    counter.total === 64 ||
    counter.black === 0 ||
    counter.white === 0 ||
    numOfPass > 1;
  const putStone = (x: number, y: number) => {
    const reverseData = getReverseData(boardData, x, y, currentStone);
    if (reverseData == null) return;
    const reversedStoneData = reverseStones(
      boardData,
      x,
      y,
      currentStone,
      reverseData,
    );
    setBoardData(reversedStoneData);
    setCurrentStone(getNextStone(currentStone));
  };

  const handleClickPass = useCallback(() => {
    setNumOfPass((prev) => prev++);
    setCurrentStone(getNextStone(currentStone));
  }, [currentStone]);

  const handleClickMore = useCallback(() => {
    setBoardData(getInitialBoard());
  }, []);

  useEffect(() => {
    const isOk = getCanPut(boardData, currentStone);
    setCanPut(isOk);
    if (isOk) setNumOfPass(0);
  }, [boardData, currentStone]);
  return (
    <Box
      display='flex'
      justifyContent='center'
      position='relative'
      sx={{ margin: '80px auto', flexFlow: 'column', width: '512px' }}
    >
      {/* ゲームの実況 */}
      <GameData counter={counter} currentStone={getTurnColor(currentStone)} />
      {/* ボード */}
      <Box mt={3}>
        <Board data={boardData} onClick={putStone} />
      </Box>
      {/* パス・最初からボタン */}
      <Box sx={{ width: '50%', margin: '24px auto' }}>
        {isFinished ? (
          <MainButton
            onClick={handleClickMore}
            disabled={false}
            text='もう一度プレイ'
          />
        ) : (
          <MainButton onClick={handleClickPass} disabled={canPut} text='パス' />
        )}
      </Box>
      {/* 判定 */}
      {isFinished && (
        <Box
          sx={{ top: '50%', transform: 'translateY(-50%)', width: '100%' }}
          position='absolute'
        >
          <Judgement winner={counter.black > counter.white ? '黒' : '白'} />
        </Box>
      )}
    </Box>
  );
};

export default Index;
