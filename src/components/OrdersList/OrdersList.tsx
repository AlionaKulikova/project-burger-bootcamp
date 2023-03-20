import { FC } from "react";
import styles from "./styles.module.css";
import { ComponentOrderDetails } from '../ComponentOrderDetails/ComponentOrderDetails';
import { useSelector, useDispatch } from '../../utils/hooks';
import { useEffect } from "react";
import { WS_CONNECTION_START } from '../../utils/types'
import type { } from 'redux-thunk/extend-redux';
import { IOrders } from '../../utils/types';

export const OrdersList: FC = () => {

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
    <div className={styles.box_one}>
      <div className={`${styles.header_name} mt-10 mb-5`}>
        <p className="text text_type_main-large">Лента заказов</p>
      </div>
      <div className={styles.container}>
        {
          arrayOrders ? (
            <div className={styles.component}>
              {
                arrayOrders?.map((order: IOrders, key: number) =>
                  <ComponentOrderDetails key={key} order={order} />)
              }
            </div>
          ) : (<p>Загрузка</p>)
        }
      </div>
    </div>
  );
}

export default OrdersList;