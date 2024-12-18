import React from "react";

import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className={styles.root}>
      <text className={styles.title}>Авторизация</text> <br />
      <text className={styles.login_title}>Логин</text>
      <br />
      <input placeholder="Логин" type="login"></input> <br />
      <text className={styles.password_title}>Пароль</text>
      <br />
      <input placeholder="Пароль" type="password"></input> <br />
      <button>Войти</button> <br />
      <Link to="Reg" className={styles.reg_link}>
        Регистрация
      </Link>
    </div>
  );
}

export default Auth;
