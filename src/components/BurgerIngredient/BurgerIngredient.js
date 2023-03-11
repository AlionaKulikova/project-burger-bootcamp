import React from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_INGREDIENT_DETAL } from "../../services/actions/BurgerIngredient";
import { Link } from 'react-router-dom';


export const BurgerIngredient = ({ data }) => {

  const dispatch = useDispatch();

  const { ingredients } = useSelector((state) => ({
    ingredients: state.dataConstructor,
  }));
  const dataIngredient = data;
  const ingredient = { data };
  const idBurgerIngredient = ingredient.data._id;
  const counterIngredient = ingredient.data.__v;
  const counter = getCount(idBurgerIngredient, ingredients, counterIngredient);
  const image = <img src={data.image} alt={data.name} />;

  function getCount(evt, item, counterIngredient) {
    let i = 0;
    {
      item.map((card) => (card.id.data._id === evt ? (i = i + 1) : counterIngredient));
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
  };

  return (
    <div>
      <div className="ml=4 mt=6 mr=6 mb=10">
        <div className={styles.info_ingredient} onClick={openModal}>
          <Link to={{
            pathname: `/ingredients/${idBurgerIngredient}`,
          }} className={styles.link}>
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

BurgerIngredient.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BurgerIngredient;