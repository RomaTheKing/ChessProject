import React from "react";

import styles from "./GameLabel.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { join } from "../../redux/slices/searchSlice";

function GameLabel({ name, rating, timeControl, mode, gameID }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(join({ gameID: gameID }));
        navigate("/Game");
      }}
      className={styles.root}
    >
      <span>{name}</span>
      <span>{rating}</span>
      <span>{timeControl.base + "+" + timeControl.delta}</span>
      <span>{mode ? "Рейтинговая" : "Товарищеская"}</span>
    </div>
  );
}

export default GameLabel;
