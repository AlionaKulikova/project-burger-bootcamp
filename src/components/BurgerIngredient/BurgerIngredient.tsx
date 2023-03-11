import { FC } from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_INGREDIENT_DETAL } from "../../services/actions/BurgerIngredient";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { TConstructorIngredient } from "../../utils/types";


type Props = {
  data: {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string,
  },
}


export const BurgerIngredient: FC<Props> = ({ data }) => {

  let location = useLocation();
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state: any) => ({
    ingredients: state.dataConstructor,
  }));
  const dataIngredient = data;
  const ingredient = { data };
  const idBurgerIngredient = ingredient.data._id;
  const counterIngredient = ingredient.data.__v;
  const counter = getCount(idBurgerIngredient, ingredients, counterIngredient);
  const image = <img src={data.image} alt={data.name} />;

  function getCount(evt: string, item: [], counterIngredient: number) {
    let i = 0;
    {
      item.map((card: TConstructorIngredient) => (card.id.data._id === evt ? (i = i + 1) : counterIngredient));
    }
    return i;
  }

  const openModal = () => {
    dispatch(
      {
        type: ADD_INGREDIENT_DETAL,
        dataIngredient,
      },
    )
  }

  return (
    <div>
      <div className="ml=4 mt=6 mr=6 mb=10">
        <div className={styles.info_ingredient} onClick={openModal}>
          <Link to={`/ingredients/${idBurgerIngredient}`}
            state={{ backgroundLocation: location }}
            className={styles.link}
          >
            <div className="ml=4">
              {" "}
              <div className={styles.icon_position}>
                <Counter count={counter} size="default" extraClass="m-1" />
              </div>
              {image}
            </div>
            <div className={styles.price_ingredient}>
              <div className="mt=1 mb=1">
                <p className="text text_type_digits-default">{data.price}</p>
              </div>
              <div>
                {" "}
                <CurrencyIcon type="primary" />
              </div>
            </div>
            <div className={styles.info_ingredient_text}>
              <p className="text text_type_main-small">{data.name}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerIngredient;