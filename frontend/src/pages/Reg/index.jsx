import React, { useRef, useState } from "react";

import styles from "./Reg.module.scss";
import { Link } from "react-router-dom";

function Reg() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordRepeat = useRef();

  const [nameErrorID, setNameErrorID] = useState(0);
  const [emailErrorID, setEmailErrorID] = useState(0);
  const [passwordErrorID, setPasswordErrorID] = useState(0);

  return (
    <div>
      <div className={styles.MainTitle_div}>
        <text className={styles.MainTitle}>Super Chess</text>
      </div>
      <div className={styles.root}>
        <text className={styles.title}>Регистрация</text> <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Имя</text>
          <br />
          <input ref={name} placeholder="Имя пользователя" type="login"></input>
          {nameErrorID === 1 && (
            <text className={styles.error}>
              Имя пользователя не должно быть пустым
            </text>
          )}
        </div>
        <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Логин</text>
          <br />
          <input ref={email} placeholder="Логин" type="login"></input>
          {emailErrorID === 1 && (
            <text className={styles.error}>Логин не должен быть пустым</text>
          )}
          {emailErrorID === 2 && (
            <text className={styles.error}>Некорректный адрес почты</text>
          )}
        </div>
        <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Пароль</text>
          <br />
          <input ref={password} placeholder="Пароль" type="password"></input>
          {passwordErrorID === 1 && (
            <text className={styles.error}>Пароль не должен быть пустым</text>
          )}
        </div>
        <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Повторите Пароль</text>
          <br />
          <input
            ref={passwordRepeat}
            placeholder="Повторите Пароль"
            type="password"
          ></input>
          {passwordErrorID === 2 && (
            <text className={styles.error}>Пароли должны совпадать</text>
          )}
        </div>
        <div className={styles.button_div}>
          <button
            onClick={() => {
              const regexp = new RegExp(
                "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
              );
              setNameErrorID(0);
              setEmailErrorID(0);
              setPasswordErrorID(0);
              if (name.current.value === "") setNameErrorID(1);
              if (!regexp.test(email.current.value)) setEmailErrorID(2);
              if (email.current.value === "") setEmailErrorID(1);
              if (password.current.value !== passwordRepeat.current.value)
                setPasswordErrorID(2);
              if (password.current.value === "") setPasswordErrorID(1);
            }}
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reg;
