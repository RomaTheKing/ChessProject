import React, { useEffect } from "react";
import GameBoard from "../../components/game/GameBoard";

import styles from "./Game.module.scss";
import { sendMessage } from "../../redux/slices/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import GameClock from "../../components/game/GameClock";
import { getGameId, getGameState, move } from "../../redux/slices/gameSlice";
import { setColor } from "../../redux/slices/boardSlice";

function Game() {
  const dispatch = useDispatch();
  const gameSlice = useSelector((state) => state.gameSlice);

  useEffect(() => {
    if (gameSlice.gameId === -1) dispatch(getGameId({}));
  }, [gameSlice.gameIdStatus]);

  useEffect(() => {
    setTimeout(() => {
      if (gameSlice.gameStateStatus !== "loading")
        dispatch(getGameState({ gameId: gameSlice.gameId }));
    }, 60);
  }, [gameSlice.gameStateStatus]);

  useEffect(() => {
    if (gameSlice.gameStateStatus === "success")
      dispatch(setColor({ color: gameSlice.color }));
  }, [gameSlice.gameStateStatus]);

  const board = useSelector((state) => state.board);
  useEffect(() => {
    const { sx, sy, fx, fy } = board;
    if (sx != -1 && sy != -1 && fx != -1 && fy != -1)
      dispatch(move({ sx, sy, fx, fy }));
  }, [board.sx, board.sy, board.fx, board.fy]);

  // useEffect(() => {
  //   console.log(gameId);
  // }, [gameId]);
  // dispatch(sendMessage({ mes: "Hello World!!!" }));
  return (
    <div>
      <div className={styles.MainTitle_div}>
        <text>Super Chess</text>
      </div>
      <div className={styles.root}>
        <GameClock />
        <GameBoard />
      </div>
    </div>
  );
}

export default Game;
