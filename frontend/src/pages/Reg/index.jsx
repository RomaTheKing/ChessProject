import React, { useEffect, useState } from "react";

import styles from "./Reg.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearState, regUser } from "../../redux/slices/regSlices";

function Reg() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const regState = useSelector((state) => state.regSlice.regState);
  // const name = useRef();
  // const email = useRef();
  // const password = useRef();
  // const passwordRepeat = useRef();

  const [isSuccess, setIsSuccess] = useState(false);
  const [nameErrorID, setNameErrorID] = useState(0);
  const [emailErrorID, setEmailErrorID] = useState(0);
  const [passwordErrorID, setPasswordErrorID] = useState(0);

  useEffect(() => {
    setIsSuccess(false);
    dispatch(clearState());
  }, []);

  useEffect(() => {
    setIsSuccess(regState === 1);
  }, [regState]);

  const onClick = () => {
    const regexp = new RegExp(
      "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
    );
    let isFound = false;

    setNameErrorID(0);
    setEmailErrorID(0);
    setPasswordErrorID(0);
    if (name.length == "") {
      setNameErrorID(1);
      isFound = true;
    }
    if (!regexp.test(email)) {
      setEmailErrorID(2);
      isFound = true;
    }
    if (email == "") {
      setEmailErrorID(1);
      isFound = true;
    }
    if (password !== passwordRepeat) {
      setPasswordErrorID(2);
      isFound = true;
    }
    if (password == "") {
      setPasswordErrorID(1);
      isFound = true;
    }

    if (!isFound) {
      dispatch(
        regUser({
          userName: name,
          email,
          password,
        })
      );
    }
  };

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
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder="Имя пользователя"
            type="login"
          ></input>
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
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Логин"
            type="login"
          ></input>
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
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль"
            type="password"
          ></input>
          {passwordErrorID === 1 && (
            <text className={styles.error}>Пароль не должен быть пустым</text>
          )}
        </div>
        <br />
        <div className={styles.input_div}>
          <text className={styles.input_title}>Повторите Пароль</text>
          <br />
          <input
            onChange={(event) => setPasswordRepeat(event.target.value)}
            placeholder="Повторите Пароль"
            type="password"
          ></input>
          {passwordErrorID === 2 && (
            <text className={styles.error}>Пароли должны совпадать</text>
          )}
        </div>
        <div className={styles.button_div}>
          <button onClick={onClick}>Регистрация</button>
          {isSuccess && (
            <text className={styles.success_message}>
              Пользователь добавлен
            </text>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reg;
