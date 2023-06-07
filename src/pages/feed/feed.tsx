import { FC } from 'react';
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { OrdersList } from '../../components/OrdersList/OrdersList';
import { StatusOrders } from '../../components/StatusOrders/StatusOrders';
import { useSelector, useDispatch } from '../../utils/hooks';
import { useEffect } from "react";
import type { } from 'redux-thunk/extend-redux';
import { WS_CONNECTION_START } from '../../utils/types';
import { WS_USER_CONNECTION_CLOSED } from '../../utils/types';

export const FeedPage: FC = () => {
  const { orders } = useSelector((state) => ({
    orders: state.wsReducer.orders,
  }));
  const arrayOrders = orders.orders;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
    return () => {
      dispatch({
        type: WS_USER_CONNECTION_CLOSED,
      });
    }
  }, []);

  return (
    <div className={styles.box}>
      <OrdersList />
      {
        arrayOrders && (
          <StatusOrders arrayOrders={arrayOrders} />)
      }
      <Outlet />
    </div>
  )
}