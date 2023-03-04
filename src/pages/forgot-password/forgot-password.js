import React, { useState } from 'react';
import styles from './forgot-password.module.css';
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postDataEmail } from "../../services/actions/ForgotPassword";
import { Navigate } from "react-router-dom";


export function ForgotPasswordPage() {

  const { nameUser, escRequest } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const [email, setEmail] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function postEmail() {
    dispatch(postDataEmail(email));
    navigate('/reset-password');
  }

  if (!escRequest) {
    if (nameUser) {
      console.log(nameUser);
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
          <EmailInput
            placeholder={'Укажите e-mail'}
            onChange={onChangeEmail}
            value={email}
            name={'email'}
            extraClass="mt-6"
          />
        </div>
        <div className={styles.button}>
          <Button htmlType="button" type="primary" size="medium" onClick={postEmail}>
            Восстановить
          </Button>
        </div>
        <div className={styles.registration}>
          <p className="text text_type_main-default text_color_inactive"> Вспомнили пароль?</p>
          <Link
            to={{ pathname: `/login` }}>Войти</Link>
        </div>
      </form>
    </div>
  );
}