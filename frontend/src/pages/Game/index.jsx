import React from "react";
import GameBoard from "../../components/game/GameBoard";

import styles from "./Game.module.scss";
import { sendMessage } from "../../redux/slices/messageSlice";
import { useDispatch } from "react-redux";

function Game() {
  const dispatch = useDispatch();
  dispatch(sendMessage({ mes: "Hello World!!!" }));
  return (
    <div>
      <div className={styles.MainTitle_div}>
        <text>Super Chess</text>
      </div>
      <div>
        <GameBoard />
      </div>
    </div>
  );
}

export default Game;
