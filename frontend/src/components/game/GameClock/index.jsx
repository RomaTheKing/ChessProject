import React, { useEffect, useState } from "react";

import styles from "./GameClock.module.scss";
import { useSelector } from "react-redux";

function GameClock({ time, isRevert }) {
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();

  const setTime = (newTime1, newTime2) => {
    newTime1 = Math.max(newTime1, 0);
    newTime2 = Math.max(newTime2, 0);
    setTime1(
      "" +
        ((newTime1 / 600) << 0) +
        (((newTime1 % 600) / 60) << 0) +
        ":" +
        (((newTime1 % 60) / 10) << 0) +
        (newTime1 % 10)
    );
    setTime2(
      "" +
        ((newTime2 / 600) << 0) +
        (((newTime2 % 600) / 60) << 0) +
        ":" +
        (((newTime2 % 60) / 10) << 0) +
        (newTime2 % 10)
    );
  };

  time = 1;

  useEffect(() => {
    setTime(0, 0);
    // setInterval(() => {
    //   setTime((300 - 1.2 * time) << 0, (300 - 0.9 * time) << 0);
    //   time++;
    // }, 100);
    // setTime(1, 1);
  }, []);

  const gameSlice = useSelector((state) => state.gameSlice);
  useEffect(() => {
    if (gameSlice.gameStateStatus === "success")
      setTime(gameSlice.blackTime, gameSlice.whiteTime);
  }, [gameSlice.gameStateStatus]);

  return (
    <div className={styles.root}>
      <div className={isRevert ? styles.white_div : styles.black_div}>
        <div className={styles.time_div}>
          <text>{time1}</text>
        </div>
      </div>
      <div className={!isRevert ? styles.white_div : styles.black_div}>
        <div className={styles.time_div}>
          <text>{time2}</text>
        </div>
      </div>
    </div>
  );
}

export default GameClock;
