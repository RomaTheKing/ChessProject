import React, { useRef, useState } from "react";

import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/slices/authSlice";

function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Логин"
            type="login"
          ></input>{" "}
          <br />
          {emailErrorID === 1 && (
            <text className={styles.error}>Логин не должен быть пустым</text>
          )}
        </div>
        <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Пароль</text>
          <br />
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль"
            type="password"
          ></input>
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

                let isFound = false;
                if (email === "") {
                  setEmailErrorID(1);
                  isFound = true;
                }
                if (password === "") {
                  setPasswordErrorID(1);
                  isFound = true;
                }

                if (!isFound) {
                  dispatch(auth({ email, password }));
                }
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
