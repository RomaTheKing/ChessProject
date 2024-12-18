import React from "react";

import styles from "./Monitor.module.scss";
import GameLabel from "../GameLabel";

function Monitor() {
  return (
    <div className={styles.root}>
      <GameLabel
        name={"valavshonok"}
        rating={1234}
        timeControl={{ base: 5, delta: 3 }}
        mode={0}
      />
      <GameLabel
        name={"The_Andrey"}
        rating={1233}
        timeControl={{ base: 8, delta: 0 }}
        mode={1}
      />
    </div>
  );
}

export default Monitor;
