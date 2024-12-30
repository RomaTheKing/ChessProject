import React from "react";

import styles from "./GameBoard.module.scss";
import GameBoardTile from "../GameBoardTile";

function GameBoard() {
  return (
    <div className={styles.root}>
      {[...Array(64)].map((val, id) => {
        return (
          <GameBoardTile
            x={(id % 8) + 1}
            y={8 - (id >> 3)}
            isInit={true}
            key={id}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
