import React, { useEffect, useState } from "react";

import styles from "./GameCreateView.module.scss";

function GameCreateView({ isActive, setIsActive }) {
  const [rating, setRating] = useState({ min: -500, max: 500 });
  const [time, setTime] = useState({ init: "05:00", delta: "00:03" });

  //   useEffect(() => {
  //     setOpen(isActive);
  //   }, isActive);

  return (
    <div>
      {isActive && (
        <div className={styles.root}>
          <text className={styles.title}>Создание игры</text> <br />
          <div className={styles.timeControl_div}>
            <text className={styles.delimiter}>Контроль времени:</text>
            <br />
            <input
              type="time"
              value={time.init}
              onChange={(event) => {
                setTime({ init: event.target.value, delta: time.delta });
              }}
            ></input>
            <text className={styles.delimiter}> + </text>
            <input
              type="time"
              value={time.delta}
              onChange={(event) => {
                setTime({ init: time.init, delta: event.target.value });
              }}
            ></input>
          </div>
          <div className={styles.timeControl_div}>
            <text className={styles.delimiter}>Рейтинг соперника:</text>
            <br />
            <text className={styles.delimiter}>-</text>
            <input
              type="number"
              value={rating.min}
              onChange={(event) => {
                setRating({ min: event.target.value, max: rating.max });
              }}
            ></input>
            <text className={styles.delimiter}>+</text>
            <input
              type="number"
              value={rating.max}
              onChange={(event) => {
                setRating({ min: rating.min, max: event.target.value });
              }}
            ></input>
          </div>
          <div className={styles.timeControl_div}>
            <text className={styles.delimiter}>Режим игры:</text>
            <br />
            <select>
              <option>Рейтинговая</option>
              <option>Товарищеская</option>
            </select>
          </div>
          <div className={styles.button_div}>
            <button
              onClick={() => {
                setIsActive(false);
              }}
            >
              Создать
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameCreateView;
