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
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input className={styles.search}></input>
      </div>
    </div>
  );
}

export default TopPanel;
