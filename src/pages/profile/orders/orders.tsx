import { FC } from 'react';
import styles from './profile.module.css';
import { ComponentProfileOrderDetails } from '../../../components/ComponentProfileOrderDetails/ComponentProfileOrderDetails';
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from '../../../utils/hooks';
import type { } from 'redux-thunk/extend-redux';
import { removeCookie } from 'typescript-cookie';
import { loginEsc } from '../../../services/actions/LoginEsc';
import { WS_USER_CONNECTION_START, WS_USER_CONNECTION_CLOSED } from '../../../utils/types';


export const HistoryOrder: FC = () => {

  const dispatch = useDispatch();

  function loginExit() {
    const refreshToken: string | any = localStorage.getItem('refreshToken');
    dispatch(loginEsc(refreshToken));
    removeCookie('email');
    removeCookie('password');
  }

  useEffect(() => {
    dispatch({
      type: WS_USER_CONNECTION_START,
    });
    return () => {
      dispatch({
        type: WS_USER_CONNECTION_CLOSED,
      });
    }
  }, []);

  const { user } = useSelector((state) => ({
    user: state.wsReducer.user,
  }));
  const arrayOrders = user.orders;

  return (
    <div className={styles.box_history}>
      <div>
        <div className={styles.menu}>
          <NavLink className={styles.tab_active} to="/profile">
            <div>
              <p className="text text_type_main-default text_color_inactive text_type_main-medium">Профиль</p>
            </div>
          </NavLink>
          <NavLink className={styles.tab_active}
            to="/profile/orders">
            <div>
              <p className="text  text_type_main-medium">История заказов</p>
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
      </div>
      <div>
        <div className={styles.box_one}>
          {arrayOrders ? (
            <div className={styles.component}>
              {arrayOrders?.map((order, key) => <ComponentProfileOrderDetails key={key} order={order} />)}</div>)
            : (<div className={styles.loader}><p>Загрузка...</p></div>)
          }
        </div>
      </div>
      <Outlet />
    </div>
  );
}