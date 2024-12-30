import React, { useState } from "react";

import styles from "./GameBoardTile.module.scss";
import Unit from "../Unit";

function GameBoardTile({ x, y }) {
  const [unit, setUnit] = useState(-1);

  return (
    <div
      className={(x + y) % 2 ? styles.rootBlack : styles.rootWhite}
      onClick={() => {
        console.log("x: " + x + " y: " + y);
        setUnit(0);
      }}
    >
      {x == 7 && <text className={styles.idX}>{8 - y}</text>}
      {y == 7 && <text className={styles.idY}>{"abcdefgh"[x]}</text>}
      {unit !== -1 && <Unit />}
    </div>
  );
}

export default GameBoardTile;
