import { FC } from "react";
import styles from "./styles.module.css";
import { ComponentOrderDetails } from '../ComponentOrderDetails/ComponentOrderDetails';
import { useSelector, useDispatch } from '../../utils/hooks';
import { useEffect } from "react";
import { WS_CONNECTION_START, WS_USER_CONNECTION_CLOSED } from '../../utils/types'
import type { } from 'redux-thunk/extend-redux';

export const OrdersList: FC = () => {

  const { orders } = useSelector((state) => ({
    orders: state.wsReducer.orders,
  }));
  const arrayOrders = orders.orders;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
    dispatch({
      type: WS_USER_CONNECTION_CLOSED,
    });
  }, []);

  return (
    <div className={styles.box_one}>
      <div className={`${styles.header_name} mt-10 mb-5`}>
        <p className="text text_type_main-large">Лента заказов</p>
      </div>
      <div className={styles.container}>
        {
          arrayOrders ? (
            <div className={styles.component}>
              {
                arrayOrders?.map((order, key) =>
                  <ComponentOrderDetails key={key} order={order} />)
              }
            </div>
          ) : <div className={styles.loader}><p>Загрузка...</p></div>
        }
      </div>
    </div>
  );
}

export default OrdersList;