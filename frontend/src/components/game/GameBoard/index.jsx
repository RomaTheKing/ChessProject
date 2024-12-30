import React from "react";

import styles from "./GameBoard.module.scss";
import GameBoardTile from "../GameBoardTile";

function GameBoard() {
  return (
    <div className={styles.root}>
      {[...Array(64)].map((val, id) => {
        return <GameBoardTile x={id % 8} y={id >> 3} key={id} />;
      })}
    </div>
  );
}

export default GameBoard;
