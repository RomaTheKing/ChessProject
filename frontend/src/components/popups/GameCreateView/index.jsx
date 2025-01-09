import React, { useEffect, useState } from "react";

import styles from "./GameCreateView.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addGame, clearAddGameStatus } from "../../../redux/slices/searchSlice";
import { useNavigate } from "react-router-dom";

function GameCreateView({ isActive, setIsActive }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addGameStatus = useSelector((state) => state.searchSlice.addGameStatus);

  const [rating, setRating] = useState({ min: -500, max: 500 });
  const [time, setTime] = useState({ init: "05:00", delta: "00:03" });
  const [mode, setMode] = useState(0);

  //   useEffect(() => {
  //     setOpen(isActive);
  //   }, isActive);

  const onClick = () => {
    setIsActive(false);
    const initTime =
      (time.init[0] - "0") * 10 * 60 +
      (time.init[1] - "0") * 60 +
      (time.init[3] - "0") * 10 +
      (time.init[4] - "0");
    const deltaTime =
      (time.delta[0] - "0") * 10 * 60 +
      (time.delta[1] - "0") * 60 +
      (time.delta[3] - "0") * 10 +
      (time.delta[4] - "0");
    dispatch(addGame({ initTime, deltaTime, mode }));
  };

  useEffect(() => {
    if (addGameStatus === "success") {
      dispatch(clearAddGameStatus());
      navigate("/Game");
    }
  }, [addGameStatus]);

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
            <select
              onChange={(event) => {
                setMode(event.target.value);
              }}
            >
              <option>Рейтинговая</option>
              <option>Товарищеская</option>
            </select>
          </div>
          <div className={styles.button_div}>
            <button onClick={() => onClick()}>Создать</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameCreateView;
