import React, { useRef, useState } from "react";

import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

function Auth() {
  const email = useRef();
  const password = useRef();

  const [emailErrorID, setEmailErrorID] = useState(0);
  const [passwordErrorID, setPasswordErrorID] = useState(0);

  return (
    <div>
      <div className={styles.MainTitle_div}>
        <text className={styles.MainTitle}>Super Chess</text>
      </div>
      <div className={styles.root}>
        <text className={styles.title}>Авторизация</text> <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Логин</text>
          <br />
          <input ref={email} placeholder="Логин" type="login"></input> <br />
          {emailErrorID === 1 && (
            <text className={styles.error}>Логин не должен быть пустым</text>
          )}
        </div>
        <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Пароль</text>
          <br />
          <input ref={password} placeholder="Пароль" type="password"></input>
          <br />
          {passwordErrorID === 1 && (
            <text className={styles.error}>Пароль не должен быть пустым</text>
          )}
        </div>
        <div className={styles.button_div}>
          <Link to="/home">
            <button
              onClick={() => {
                setEmailErrorID(0);
                setPasswordErrorID(0);
                if (email.current.value === "") setEmailErrorID(1);
                if (password.current.value === "") setPasswordErrorID(1);
              }}
            >
              Войти
            </button>{" "}
            <br />
          </Link>
        </div>
        <Link to="/Reg" className={styles.reg_link}>
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Auth;
