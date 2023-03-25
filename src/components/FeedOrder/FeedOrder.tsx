import { FC } from "react";
import { useSelector, useDispatch } from '../../utils/hooks';
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { ADD_DATA_ORDER } from "../../utils/types";
import type { } from 'redux-thunk/extend-redux';
import { WS_CONNECTION_START } from '../../utils/types';


export const FeedOrder: FC = () => {

  const { openOrderDetalModal } = useSelector((state) => ({
    openOrderDetalModal: state.dataIngredientsReducer.openOrderDetalModal,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
    const targetOrderId = orders.orders?.find((item) => item._id === id);
    dispatch({
      type: ADD_DATA_ORDER,
      targetOrderId: targetOrderId,
    })
  }, [])

  let location = useLocation();
  let state = location.state;
  const { orders } = useSelector((state) => ({
    orders: state.wsReducer.orders,
  }));

  const arrayOrders = orders.orders;
  const { id } = useParams();
  const orderId = arrayOrders?.find((item) => item._id === id);
  const arrayId: string[] | undefined = orderId?.ingredients;

  function editDate(item: string) {
    return new Date(item).toLocaleString()
  }

  const { allIngredients } = useSelector((state) => ({
    allIngredients: state.dataReducer.feed,
  }));
  const findIngredient = arrayId?.map((orderIngredient: string) => allIngredients.find((ingredient) => ingredient._id === orderIngredient));
  const sumOrders = () => {
    let summa = 0;
    arrayId?.forEach((itemIdIngredient) => {
      const allOrdersIngredients = allIngredients.find((ingredient) => ingredient?._id === itemIdIngredient)
      if (allOrdersIngredients?.price) {
        summa += allOrdersIngredients.price
      }
    })
    return summa;
  }

  while (!orderId) {
    return <div className={state || !state && openOrderDetalModal ? `${styles.load}` : `${styles.loader}`}><p>Загрузка...</p></div>
  }

  return (
    <div className={state ? `${styles.box_modal}` : `${styles.box}`}>
      {orders && orderId ?
        <>
          <div className="mb-10" style={{ alignSelf: 'center', marginTop: 0, }}><p className="text text_type_digits-medium">#{orderId?.number}</p></div>
          <div className={state || !state && openOrderDetalModal ? `${styles.name_burger} mb-3` : `mb-3, mt-40`}><p className="text text_type_main-medium">{orderId?.name}</p></div>

          <div className="mb-10">
            {orderId?.status === 'done' ? <p style={{ color: '#00CCCC', }} className="text text_type_main-small"> Выполнен </p>
              : <p style={{ color: '#00CCCC', }} className="text text_type_main-small"> В работе </p>}
          </div>
          <div>
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <div className={styles.container_component}>
              <ul className={styles.component} >
                {Array.from(new Set(findIngredient))?.map((orderIngredient, key) => {
                  return (
                    <li key={key}>
                      <div className={styles.images}>
                        <img className="mr-4" src={orderIngredient?.image} alt={orderIngredient?.name} />
                        <p className={`${styles.name} text text_type_main-small mr-4`}>{orderIngredient?.name}</p>
                        <div className={styles.count}>
                          <div>
                            <p className="text text_type_digits-default">
                              {findIngredient && findIngredient?.filter(item => item?._id === orderIngredient?._id).length}
                            </p>
                          </div>
                          <div>×</div>
                          <div>
                            <p className="text text_type_digits-default">{orderIngredient?.price}
                              <CurrencyIcon type="primary" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                }
                )}
              </ul>
            </div>
          </div>
          <div className="mb-10"></div>
          <div className={styles.data_price}>
            <p className="text text_type_main-default text_color_inactive">{editDate(orderId?.createdAt)}</p>
            <div className={styles.price}>
              <div className="text text_type_digits-default">
                {sumOrders()}
              </div>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </>
        : <div className={state || !state && openOrderDetalModal ? `${styles.load}` : `${styles.loader}`}><p>Загрузка...</p></div>}
    </div>
  );
}

export default FeedOrder;