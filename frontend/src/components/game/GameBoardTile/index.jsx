import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./GameBoardTile.module.scss";
import Unit from "../Unit";
import { addUnit, selectUnit } from "../../../redux/slices/boardSlice";
import MovePoint from "../MovePoint";

function GameBoardTile({ x, y, isInit }) {
  const [unit, setUnit] = useState("");
  const [isMovePointActive, setMovePointActive] = useState(false);
  const dispatch = useDispatch();

  const board = useSelector((state) => state.board);

  const getStartUnit = (x, y) => {
    if (y == 2) return "pawn_w";
    if (y == 7) return "pawn_b";

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
    // setUnit(getStartUnit(x, y));
    if (isInit) {
      dispatch(addUnit({ name: getStartUnit(x, y), x: x, y: y }));
    }
  }, []);

  useEffect(() => {
    setUnit(board.tiles[y * 8 + x - 9]);
  }, board.tiles);

  useEffect(() => {
    // console.log(321);
    // console.log(board.selectedTiles);
    setMovePointActive(board.selectedTiles[y * 8 + x - 9]);
  }, [board.selectedTiles]);
  return (
    <div
      className={
        [
          isMovePointActive && unit !== "" ? styles.selected : "",
          (x + y) % 2 === 0 ? styles.rootBlack : styles.rootWhite,
        ].join(" ")
        // isMovePointActive ? styles.selected : styles.selected)
      }
      onClick={(e) => {
        // console.log("x: " + x + " y: " + y);
        // setUnit(0);
        dispatch(selectUnit({ x: x, y: y }));
      }}
    >
      {x == 8 && <text className={styles.idX}>{y}</text>}
      {y == 1 && <text className={styles.idY}>{"abcdefgh"[x - 1]}</text>}
      {isMovePointActive && unit === "" && (
        <MovePoint color={(x + y) % 2 === 0} />
      )}
      {unit !== "" && <Unit type={unit} />}
    </div>
  );
}

export default GameBoardTile;
