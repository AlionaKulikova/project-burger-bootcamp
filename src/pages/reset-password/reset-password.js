import React, { useState } from 'react';
import styles from './reset-password.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postDataPassword } from "../../services/actions/ResetPassword";
import { Navigate } from "react-router-dom";


export function ResetPasswordPage() {

  const { nameUser, escRequest } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const { buttonClick } = useSelector((state) => ({
    buttonClick: state.postForgotPasswordReducer.buttonClick,
  }));

  const [number, setNumber] = useState('');

  const onChangeNumber = e => {
    setNumber(e.target.value)
  }

  const dispatch = useDispatch();

  function resetPassword() {
    dispatch(postDataPassword(password, number));
  }

  const [password, setPassword] = useState('');

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  if (!escRequest) {
    if (nameUser || !buttonClick) {
      return (
        <Navigate to="/" replace />
      );
    }
  }

  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <div className={styles.name}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <PasswordInput
            placeholder={'Введите новый пароль'}
            onChange={onChangePassword}
            value={password}
            name={'password'}
            extraClass="mt-6"
          />
          <Input
            placeholder={'Введите код из письма'}
            onChange={onChangeNumber}
            value={number}
            name={'number'}
            extraClass="mt-6"
          />
        </div>
        <div className={styles.button}>
          <Button htmlType="button" type="primary" size="medium" onClick={resetPassword}>
            Сохранить
          </Button>
        </div>
        <div className={styles.registration}>
          <p className="text text_type_main-default text_color_inactive"> Вспомнили пароль?</p>
          <Link to={{ pathname: `/login` }}>Войти</Link>
        </div>
      </form>
    </div>
  );
}