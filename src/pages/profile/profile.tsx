import React, { useState, useEffect, FC } from 'react';
import styles from './profile.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from '../../utils/hooks';
import { patchDataUser } from "../../services/actions/EditProfile";
import { NavLink } from 'react-router-dom';
import { loginEsc } from "../../services/actions/LoginEsc";
import type { } from 'redux-thunk/extend-redux';
import { removeCookie } from 'typescript-cookie';


export const ProfilePage: FC = () => {

  const { dataPost, nameUser, emailUser, tokenAccess, userPassword, prevname, prevemail, prevpassword } = useSelector((state) => ({
    dataPost: state.postLogin.dataPost,
    nameUser: state.postLogin.nameUser,
    emailUser: state.postLogin.emailUser,
    tokenAccess: state.postLogin.tokenAccess,
    userPassword: state.postLogin.userPassword,
    prevname: state.postLogin.prevname,
    prevemail: state.postLogin.prevemail,
    prevpassword: state.postLogin.prevpassword,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (dataPost) {
      setName(nameUser);
      setEmail(emailUser);
      setPassword(userPassword);
    }
  }, [dataPost]);

  function loginExit() {
    const refreshToken: any = localStorage.getItem('refreshToken');
    dispatch(loginEsc(refreshToken));
    removeCookie('email');
    removeCookie('password');
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const editDataProfile = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      patchDataUser(tokenAccess, name, email, password)
    );
  }

  const cancelDataProfile = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setName(prevname);
    setEmail(prevemail);
    setPassword(prevpassword);
    dispatch(
      patchDataUser(tokenAccess, prevname, prevemail, prevpassword)
    );
  }

  return (
    <div className={styles.main_box}>
      <div className={styles.menu}>
        <NavLink className={styles.tab_active} to="/profile">
          <div>
            <p className="text  text_type_main-medium">Профиль</p>
          </div>
        </NavLink>
        <NavLink className={styles.tab}
          to="/profile/orders">
          <div>
            <p className="text text_type_main-default text_color_inactive text_type_main-medium">История заказов</p>
          </div>
        </NavLink>
        <NavLink className={styles.tab} to="/login" onClick={loginExit}>
          <div >
            <p className="text text_type_main-default text_color_inactive text_type_main-medium">Выход</p>
          </div>
        </NavLink>
        <div className={styles.comment}>
          <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
        </div>
      </div>
      <div className={styles.content}>
        <form className={styles.form}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={(e) => setName(e.target.value)}
              icon={'EditIcon'}
              value={name}
              name={'name'}
              size={'default'}
              extraClass="ml-1 mb-6"
            />
            <Input
              type={'text'}
              placeholder={'Логин'}
              onChange={(e) => setEmail(e.target.value)}
              icon={'EditIcon'}
              value={email}
              name={'e-mail'}
              size={'default'}
              extraClass="ml-1 mb-6"
            />
            <Input
              type={'text'}
              placeholder={'Пароль'}
              onChange={(e) => setPassword(e.target.value)}
              icon={'EditIcon'}
              value={password}
              name={'password'}
              size={'default'}
              extraClass="ml-1 mb-6"
            />
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <Button htmlType="button" type="primary" size="medium" onClick={editDataProfile} >
                Сохранить
              </Button>
            </div>
            <div className={styles.button}>
              <Button htmlType="button" type="primary" size="medium" onClick={cancelDataProfile} >
                Отмена
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}