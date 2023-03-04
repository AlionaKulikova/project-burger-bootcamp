import React, { useState, useEffect } from 'react';
import styles from './profile.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { patchDataUser } from "../../services/actions/EditProfile";
import { NavLink } from 'react-router-dom';
import { loginEsc } from "../../services/actions/LoginEsc";


export function ProfilePage() {

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
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(loginEsc(refreshToken));
  }

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

  const editDataProfile = (evt) => {
    evt.preventDefault();
    dispatch(
      patchDataUser(tokenAccess, name, email, password)
    );
  }

  const cancelDataProfile = (evt) => {
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
        <NavLink className={styles.tab_active}>
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
              onChange={onChangeName}
              icon={'EditIcon'}
              value={name}
              name={'name'}
              size={'default'}
              extraClass="ml-1 mb-6"
            />
            <Input
              type={'text'}
              placeholder={'Логин'}
              onChange={onChangeEmail}
              icon={'EditIcon'}
              value={email}
              name={'e-mail'}
              size={'default'}
              extraClass="ml-1 mb-6"
            />
            <Input
              type={'text'}
              placeholder={'Пароль'}
              onChange={onChangePassword}
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