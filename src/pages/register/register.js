import React, { useState } from 'react';
import styles from './register.module.css';
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postDataRegister } from "../../services/actions/Register";
import { Navigate } from "react-router-dom";

export function RegisterPage() {

  const { nameUser, escRequest } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const [name, setName] = useState('');

  const onChangeName = e => {
    setName(e.target.value)
  }

  const [email, setEmail] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('');

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const dispatch = useDispatch();

  function postRegister() {
    dispatch(postDataRegister(name, email, password));
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
          <p className="text text_type_main-medium">Регистрация</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Input
            placeholder={'Имя'}
            onChange={onChangeName}
            value={name}
            name={'name'}
            isIcon={false}
            extraClass="mt-6"
          />
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
          <Button htmlType="button" type="primary" size="medium" onClick={postRegister}>
            Зарегистрироваться
          </Button>
        </div>
        <div className={styles.registration}>
          <p className="text text_type_main-default text_color_inactive"> Уже зарегистрированы?</p>
          <Link
            to={{ pathname: `/login` }}>Войти</Link>
        </div>
      </form>
    </div>
  );
}