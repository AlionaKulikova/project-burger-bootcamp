import React, { useState } from 'react';
import styles from './login.module.css';
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postDataLogin } from "../../services/actions/Login";
import { USER_PASSWORD } from "../../services/actions/Login";


export function LoginPage() {

  const { nameUser, escRequest } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const [email, setEmail] = useState('');
  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('');
  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const dispatch = useDispatch();

  function goProfile() {
    dispatch(
      postDataLogin(email, password),
    )
    dispatch({
      type: USER_PASSWORD,
      password: password,
    })
  }
  if (!escRequest) {
    if (nameUser) {
      return (
        <Navigate to="/" replace />
      );
    }
  }

  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <div className={styles.name}>
          <p className="text text_type_main-medium">Вход</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <EmailInput
            placeholder={'E-mail'}
            onChange={onChangeEmail}
            value={email}
            name={'email'}
            isIcon={false}
            extraClass="mt-6"
          />
          <PasswordInput
            onChange={onChangePassword}
            value={password}
            name={'password'}
            extraClass="mt-6"
          />
        </div>
        <div className={styles.button}>
          <Button htmlType="button" type="primary" size="medium" onClick={goProfile}>
            Вход
          </Button>
        </div>
        <div className={styles.registration}>
          <p className="text text_type_main-default text_color_inactive"> Вы — новый пользователь?</p>
          <Link
            to={{ pathname: `/register` }}>Зарегистрироваться</Link>
        </div>
        <div className={styles.recovery}>
          <p className="text text_type_main-default text_color_inactive"> Забыли пароль?</p>
          <Link
            to={{ pathname: `/forgot-password` }}>Восстановить пароль</Link>
        </div>
      </form>
    </div>
  );
}