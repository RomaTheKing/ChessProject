import React from "react";
import GameBoard from "../../components/game/GameBoard";

import styles from "./Game.module.scss";

function Game() {
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
