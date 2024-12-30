import React, { useEffect, useState } from "react";

import styles from "./GameBoardTile.module.scss";
import Unit from "../Unit";

function GameBoardTile({ x, y, isInit }) {
  const [unit, setUnit] = useState("");

  const getStartUnit = (x, y) => {
    if (y == 2) return "pawm_w";
    if (y == 7) return "pawm_b";

    if (y < 7 && y > 2) return "";

    let color = "_b";
    if (y == 1) color = "_w";
    if (x == 1 || x == 8) return "rook" + color;
    if (x == 2 || x == 7) return "knight" + color;
    if (x == 3 || x == 6) return "bishop" + color;
    if (x == 4) return "queen" + color;
    if (x == 5) return "king" + color;
    return "";
  };

  useEffect(() => {
    setUnit(getStartUnit(x, y));
  }, []);
  return (
    <div
      className={(x + y) % 2 === 0 ? styles.rootBlack : styles.rootWhite}
      onClick={() => {
        console.log("x: " + x + " y: " + y);
        setUnit(0);
      }}
    >
      {x == 8 && <text className={styles.idX}>{y}</text>}
      {y == 1 && <text className={styles.idY}>{"abcdefgh"[x - 1]}</text>}
      {unit !== "" && <Unit type={unit} />}
    </div>
  );
}

export default GameBoardTile;
