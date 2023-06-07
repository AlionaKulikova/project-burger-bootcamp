import { useState, useEffect, FormEvent, ChangeEvent, FC } from 'react';
import styles from './login.module.css';
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../utils/hooks';
import { postDataLogin } from "../../services/actions/Login";
import { USER_PASSWORD } from "../../services/actions/Login";
import { useNavigate } from 'react-router-dom';
import type { } from 'redux-thunk/extend-redux';
import { getCookie, setCookie } from 'typescript-cookie'


export const LoginPage: FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const loginCookie = getCookie('email');
    const passwordCookie = getCookie('password');
    if (loginCookie && passwordCookie) {
      setEmail(loginCookie);
      setPassword(passwordCookie);
      dispatch(
        postDataLogin(loginCookie, passwordCookie),
      )
      dispatch({
        type: USER_PASSWORD,
        password: passwordCookie,
      })
    }
  }, []);

  const { nameUser, escRequest } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
    escRequest: state.postLogin.escRequest,
  }));

  const [email, setEmail] = useState('');
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('');
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const dispatch = useDispatch();

  const goProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      postDataLogin(email, password),
    )
    dispatch({
      type: USER_PASSWORD,
      password: password,
    })
    setCookie('email', email);
    setCookie('password', password);
  }
  if (!escRequest) {
    if (nameUser) {
      navigate(-1);
    }
  }

  return (
    <div className={styles.content}>
      <form onSubmit={goProfile} className={styles.form}>
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
          <Button htmlType="submit" type="primary" size="medium" >
            Вход
          </Button>
        </div>
      </form>
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
    </div>
  );
}