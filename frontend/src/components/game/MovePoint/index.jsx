import React from "react";

import styles from "./MovePoint.module.scss";

function MovePoint({ color }) {
  return (
    <div
      className={[styles.root, !color ? styles.white : styles.black].join(" ")}
    ></div>
  );
}

export default MovePoint;
