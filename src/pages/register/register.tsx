import React, { useState, FC } from 'react';
import styles from './register.module.css';
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../utils/hooks';
import { postDataRegister } from "../../services/actions/Register";
import { Navigate } from "react-router-dom";
import type { } from 'redux-thunk/extend-redux';

export const RegisterPage: FC = () => {

  const { nameUser, escRequest } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function postRegister(e: React.SyntheticEvent) {
    e.preventDefault();
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
      <form className={styles.form} onSubmit={postRegister}>
        <div className={styles.name}>
          <p className="text text_type_main-medium">Регистрация</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Input
            placeholder={'Имя'}
            onChange={(e) => setName(e.target.value)}
            value={name}
            name={'name'}
            extraClass="mt-6"
          />
          <EmailInput
            placeholder={'E-mail'}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={'email'}
            isIcon={false}
            extraClass="mt-6"
          />
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={'password'}
            extraClass="mt-6"
          />
        </div>
        <div className={styles.button}>
          <Button htmlType="submit" type="primary" size="medium" >
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <div className={styles.registration}>
        <p className="text text_type_main-default text_color_inactive"> Уже зарегистрированы?</p>
        <Link
          to={{ pathname: `/login` }}>Войти</Link>
      </div>

    </div>
  );
}