import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import Board from 'src/components/Board';
import GameData from 'src/components/GameData';
import Judgement from 'src/components/Judgement';
import MainButton from 'src/components/MainButton';
import getTurnColor from 'src/logics/converter/getTurnColor';
import getCanPut from 'src/logics/getCanPut';
import getNumberOfStone from 'src/logics/getNumberOfStone';
import getReverseData from 'src/logics/getReverseData';
import reverseStones from 'src/logics/reverseStones';
import { getInitialBoard } from 'src/models/getInitialBoard';
import getNextStone from 'src/models/getNextStone';
import { BoardData, State } from 'src/types';

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
