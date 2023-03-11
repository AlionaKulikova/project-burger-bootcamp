import React, { useState, FC } from 'react';
import styles from './forgot-password.module.css';
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { postDataEmail } from "../../services/actions/ForgotPassword";
import { Navigate } from "react-router-dom";
import type { } from 'redux-thunk/extend-redux';


export const ForgotPasswordPage: FC = () => {

  const { nameUser, escRequest } = useSelector((state: any) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function postEmail(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(postDataEmail(email));
    navigate('/reset-password');
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
      <form className={styles.form} onSubmit={postEmail}>
        <div className={styles.name}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <EmailInput
            placeholder={'Укажите e-mail'}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={'email'}
            extraClass="mt-6"
          />
        </div>
        <div className={styles.button}>
          <Button htmlType="submit" type="primary" size="medium">
            Восстановить
          </Button>
        </div>
      </form>
      <div className={styles.registration}>
        <p className="text text_type_main-default text_color_inactive"> Вспомнили пароль?</p>
        <Link
          to={{ pathname: `/login` }}>Войти</Link>
      </div>
    </div>
  );
}