import React from "react";

import styles from "./TopPanel.module.scss";

const elements = [
  {
    name: "Игра",
  },
  {
    name: "Задачи",
  },
  {
    name: "Обучение",
  },
  {
    name: "Просмотр",
  },
  {
    name: "Сообщество",
  },
  {
    name: "Инструменты",
  },
];

function TopPanel() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <text className={styles.title}>Super Chess</text>
        {elements.map((v, i) => (
          <div className={styles.item}>
            <text>{v.name}</text>
          </div>
        ))}
        <input className={styles.search}></input>
      </div>
    </div>
  );
}

export default TopPanel;
