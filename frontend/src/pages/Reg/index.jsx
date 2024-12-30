import React from "react";

import styles from "./Reg.module.scss";
import { Link } from "react-router-dom";

function Reg() {
  return (
    <div className={styles.root}>
      <text className={styles.title}>Регистрация</text> <br />
      <div className={styles.input_div}>
        <text className={styles.input_title}>Имя</text>
        <br />
        <input placeholder="Имя пользователя" type="login"></input>
      </div>
      <br />
      <div className={styles.input_div}>
        <text className={styles.input_title}>Логин</text>
        <br />
        <input placeholder="Логин" type="login"></input>
      </div>
      <br />
      <div className={styles.input_div}>
        <text className={styles.input_title}>Пароль</text>
        <br />
        <input placeholder="Пароль" type="password"></input>
      </div>
      <br />
      <div className={styles.input_div}>
        <text className={styles.input_title}>Повторите Пароль</text>
        <br />
        <input placeholder="Повторите Пароль" type="password"></input>
      </div>
      <div className={styles.button_div}>
        <button>Регистрация</button>
      </div>
    </div>
  );
}

export default Reg;
