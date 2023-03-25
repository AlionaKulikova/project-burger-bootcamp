import { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import { useSelector } from '../../utils/hooks';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch } from "../../utils/hooks";
import { ADD_ORDER_DETAL } from '../../services/actions/ComponentOrderDetails';
import { TIngredient } from '../../utils/types';


type Props = {
  order: {
    createdAt: string,
    ingredients: string[],
    name: string,
    number: number,
    status: string,
    updatedAt: string,
    _id: string,
  }
}


export const ComponentOrderDetails: FC<Props> = ({ order }) => {

  const { createdAt, name, number, ingredients, _id } = order;
  const idOrder = _id;
  let location = useLocation();
  const { allIngredients } = useSelector((state) => ({
    allIngredients: state.dataReducer.feed,
  }));
  const toFindIngredient = (targetIngredient: string, allIngredients: TIngredient[]) => {
    return allIngredients.find((findIngredient: TIngredient) => findIngredient._id === targetIngredient)
  }
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(
      {
        type: ADD_ORDER_DETAL,
      },
    )
  }

  function editDate(item: string) {
    return new Date(item).toLocaleString()
  }

  const countBurger = () => {
    let sum = 0;
    ingredients.forEach((orderIngredient: string) => {
      const element = allIngredients.find((targetIngredient: TIngredient) => targetIngredient._id === orderIngredient)
      if (element?.price) {
        sum += element.price
      }
    })
    return sum
  }

  return (
    <div  onClick={openModal}>
      <Link to={`/feed/${idOrder}`}
        state={{
          backgroundLocation: location,
          order: order,
        }}
        className={styles.link}
      >
        <div className={styles.box_preview}>
          <div className={styles.number}>
            <div><p className="text text_type_digits-default">{number}</p></div>
            <div><p className="text text_type_main-default text_color_inactive">{editDate(createdAt)}</p></div>
          </div>

          <div className={styles.name}>
            <p className="text text_type_main-medium">{name}</p>
          </div>

          <div className={styles.ingredients_burger}>
            <ul className={styles.ingredients} >
              {
                ingredients.map((ingredient, key) => {
                  const findIngredient = toFindIngredient(ingredient, allIngredients)
                  if (key < 5) {
                    return (
                      <li key={key} style={{ zIndex: -94 }} className={styles.ingredients_every}>
                        <img className={styles.ingredients_image} src={findIngredient?.image}
                          alt={findIngredient?.name} />
                      </li>
                    )
                  } else if (key === 5) {
                    return (<li key={key} style={{ zIndex: -93 }} className={styles.ingredient_last}>
                      <img className={styles.last_image} src={findIngredient?.image}
                        alt={findIngredient?.name} />
                      <div className={styles.overlay}></div>
                      <span className={`text text_type_main-default ${styles.ingredient_last_count}`}>+{ingredients.length - 5}</span>
                    </li>)
                  }
                  return null
                }
                )
              }
            </ul>

            <div className={styles.count}>
              <div><p className="text text_type_digits-default">{countBurger()}</p></div> <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ComponentOrderDetails;