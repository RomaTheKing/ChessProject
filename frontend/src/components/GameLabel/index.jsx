import React from "react";

import styles from "./GameLabel.module.scss";

function GameLabel({ name, rating, timeControl, mode }) {
  return (
    <div className={styles.root}>
      <span>{name}</span>
      <span>{rating}</span>
      <span>{timeControl.base + "+" + timeControl.delta}</span>
      <span>{mode ? "Рейтинговая" : "Товарищеская"}</span>
    </div>
  );
}

export default GameLabel;
