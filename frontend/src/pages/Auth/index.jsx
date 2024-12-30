import React from "react";

import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className={styles.root}>
      <text className={styles.title}>Авторизация</text> <br />
      <div className={styles.input_div}>
        <text className={styles.input_title}>Логин</text>
        <br />
        <input placeholder="Логин" type="login"></input> <br />
      </div>
      <br />
      <div className={styles.input_div}>
        <text className={styles.input_title}>Пароль</text>
        <br />
        <input placeholder="Пароль" type="password"></input> <br />
      </div>
      <div className={styles.button_div}>
        <Link to="/home">
          <button>Войти</button> <br />
        </Link>
      </div>
      <Link to="Reg" className={styles.reg_link}>
        Регистрация
      </Link>
    </div>
  );
}

export default Auth;
