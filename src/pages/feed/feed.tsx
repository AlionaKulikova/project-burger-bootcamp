import { FC } from 'react';
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { OrdersList } from '../../components/OrdersList/OrdersList';
import { StatusOrders } from '../../components/StatusOrders/StatusOrders';
import { useSelector, useDispatch } from '../../utils/hooks';
import { useEffect } from "react";
import type { } from 'redux-thunk/extend-redux';
import { WS_CONNECTION_START } from '../../utils/types'

export const FeedPage: FC = () => {
  const { orders } = useSelector((state: any) => ({
    orders: state.wsReducer.orders,
  }));
  const arrayOrders = orders.orders;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
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