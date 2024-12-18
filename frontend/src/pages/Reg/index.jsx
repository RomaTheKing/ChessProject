import React from "react";

import styles from "./Reg.module.scss";
import { Link } from "react-router-dom";

function Reg() {
  return (
    <div className={styles.root}>
      <text className={styles.title}>Регистрация</text> <br />
      <text className={styles.name_title}>Имя</text>
      <br />
      <input placeholder="Имя пользователя" type="login"></input> <br />
      <text className={styles.login_title}>Логин</text>
      <br />
      <input placeholder="Логин" type="login"></input> <br />
      <text className={styles.password_title}>Пароль</text>
      <br />
      <input placeholder="Пароль" type="password"></input> <br />
      <text className={styles.password_repeat_title}>Повторите Пароль</text>
      <br />
      <input placeholder="Повторите Пароль" type="password"></input> <br />
      <button>Регистрация</button> <br />
    </div>
  );
}

export default Reg;
