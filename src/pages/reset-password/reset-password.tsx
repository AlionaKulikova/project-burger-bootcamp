import { useState, FC, FormEvent } from 'react';
import styles from './reset-password.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../utils/hooks';
import { postDataPassword } from "../../services/actions/ResetPassword";
import { Navigate } from "react-router-dom";
import type { } from 'redux-thunk/extend-redux';


export const ResetPasswordPage: FC = () => {

  const { nameUser, escRequest } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const { buttonClick } = useSelector((state) => ({
    buttonClick: state.postForgotPasswordReducer.buttonClick,
  }));

  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  function resetPassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(postDataPassword(password, number));
  }

  const [password, setPassword] = useState('');

  if (!escRequest) {
    if (nameUser || !buttonClick) {
      return (
        <Navigate to="/" replace />
      );
    }
  }

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={resetPassword}>
        <div className={styles.name}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <PasswordInput
            placeholder={'Введите новый пароль'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={'password'}
            extraClass="mt-6"
          />
          <Input
            placeholder={'Введите код из письма'}
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            name={'number'}
            extraClass="mt-6"
          />
        </div>
        <div className={styles.button}>
          <Button htmlType="submit" type="primary" size="medium" >
            Сохранить
          </Button>
        </div>
      </form>
      <div className={styles.registration}>
        <p className="text text_type_main-default text_color_inactive"> Вспомнили пароль?</p>
        <Link to={{ pathname: `/login` }}>Войти</Link>
      </div>
    </div>
  );
}