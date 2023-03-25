import styles from "./styles.module.css";
import { FC } from "react";
import { useSelector } from '../../utils/hooks'

export type TOrders = {
  ingredients: string[],
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
}

export type TArray = {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: number,
  status: string,
  updatedAt: string,
  _id: string,
}

type Props = {
  arrayOrders: TArray[];
}

export const StatusOrders: FC<Props> = ({ arrayOrders }) => {

  const { orders } = useSelector((state: any) => ({
    orders: state.wsReducer.orders,
  }));


  return (
    <div className={styles.box_two}>
      <>
        {
          arrayOrders.length > 0 ? (
            <>
              <div className={styles.orders_box}>
                {
                  arrayOrders?.some((order: TArray) => order.status === 'done') && (
                    <div className={styles.orders}>
                      <div className={styles.ready}>
                        <p className="text text_type_main-medium">
                          Готовы:
                        </p>
                      </div>
                      <div className={styles.inWork}>
                        <div className={styles.oneTable}>
                          <ul className={styles.list_inwork}>
                            {
                              arrayOrders.map((order: TArray, key: number) => {
                                if (key < 5 && order.status === 'done') {
                                  return (<li key={key} className="text text_type_digits-default">
                                    {order.number}
                                  </li>)
                                }
                                return null
                              })
                            }
                          </ul>
                        </div>
                        <div>
                          <ul className={styles.list_inwork}>
                            {
                              arrayOrders.map((order: TArray, key: number) => {
                                if (key >= 5 && key < 10 && order.status === 'done') {
                                  return (<li key={key} className="text text_type_digits-default">
                                    {order.number}
                                  </li>)
                                }
                                return null
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <div className={styles.work}>
                  <p className="text text_type_main-medium">
                    В работе:
                  </p>
                  {
                    arrayOrders.some((order: TArray) => order.status === 'pending') && (
                      <ul className={styles.list_ready}>
                        {
                          arrayOrders.map((order: TArray, key: number) => {
                            if (key < 5 && order.status === 'pending') {
                              return (<li key={key} className="text text_type_digits-default">
                                {order.number}
                              </li>)
                            }
                            return null
                          })
                        }
                      </ul>
                    )
                  }
                </div>
              </div>
              <div>
                <div><p className="text text_type_main-medium">Выполнено за все время:</p></div>
                <div className="mb-15"><p className="text text_type_digits-large">{orders.total}</p></div>
              </div>
              <div>
                <div><p className="text text_type_main-medium">Выполнено за сегодня:</p></div>
                <div><p className="text text_type_digits-large">{orders.totalToday}</p></div>
              </div>
            </>
          ) : (<div className={styles.loader}><p>Загрузка...</p></div>)
        }
      </>
    </div>
  );
};

export default StatusOrders;