import { FC } from "react";
import { useSelector, useDispatch } from '../../utils/hooks';
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TIngredient } from "../../utils/types"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { ADD_DATA_ORDER } from "../../utils/types";
import type { } from 'redux-thunk/extend-redux';
import { WS_CONNECTION_START } from '../../utils/types';

type TOrder = {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: number,
  status: string,
  updatedAt: string,
  _id: string,
}

export const FeedOrder: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
    const targetOrderId = orders.orders?.find((item: TOrder) => item._id === id);

    dispatch({
      type: ADD_DATA_ORDER,
      targetOrderId: targetOrderId,
    })
  }, [])

  let location = useLocation();
  let state = location.state;
  const { orders } = useSelector((state: any) => ({
    orders: state.wsReducer.orders,
  }));
  const { id } = useParams();
  const orderId = orders.orders?.find((item: TOrder) => item._id === id);
  const arrayId: string[] | undefined = orderId?.ingredients;

  function editDate(item: string) {
    return new Date(item).toLocaleString()
  }

  const { allIngredients } = useSelector((state) => ({
    allIngredients: state.dataReducer.feed,
  }));
  const toFindIngredient = (targetIngredient: string, key:number, allIngredients: TIngredient[]) => {
    return allIngredients.find((findIngredient: TIngredient) => findIngredient._id === targetIngredient)
  }

  while (!orderId) {
    return <div>Загрузка</div>
  }

  return (
    <div className={state ? `${styles.box_modal}` : `${styles.box}`}>
      {orders && orderId ?
        <>
          <div className="mb-10" style={{ alignSelf: 'center', }}><p className="text text_type_digits-medium">{orderId?.number}</p></div>
          <div className="mb-3"><p className="text text_type_main-medium">{orderId?.name}</p></div>
          <div className="mb-10">
            {orderId?.status === 'done' ? <p style={{ color: '#00CCCC', }} className="text text_type_main-small"> Выполнен </p>
              : <p style={{ color: '#00CCCC', }} className="text text_type_main-small"> В работе </p>}
          </div>
          <div>
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <div className={styles.container_component}>
              <ul className={styles.component} >
                {
                  arrayId?.map((ingredient, key) => {
                    const findIngredient = toFindIngredient(ingredient, key, allIngredients)

                    return (
                      <li>
                        <div className={styles.images}>
                          <img className="mr-4" src={findIngredient?.image} alt={findIngredient?.name} />
                          <p className={`${styles.name} text text_type_main-small mr-4`}>{findIngredient?.name}</p>

                          <div className={styles.count}>
                            <p className="text text_type_digits-default">{findIngredient?.price}</p>
                            <CurrencyIcon type="primary" />
                          </div>
                        </div>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>
          <div className="mb-10"></div>
          <div><p className="text text_type_main-default text_color_inactive">{editDate(orderId?.createdAt)}</p></div>
        </>
        : <div>Загрузка</div>}

    </div>
  );
}

export default FeedOrder;