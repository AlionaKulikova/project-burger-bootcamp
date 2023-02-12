import React from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import Modal from "../Modal/Modal.js";
import PropTypes from "prop-types";
import IngredientDetails from "../IngredientDetails/IngredientDetails.js";
import { useDispatch, useSelector } from "react-redux";
import { ADD_INGREDIENT_DETAL } from "../../services/actions/BurgerIngredient";

export const BurgerIngredient = ({ data }) => {
  const { ingredients } = useSelector((state) => ({
    ingredients: state.dataConstructor,
  }));
  const dataIngredient =  data ;
  const ingredient = { data };
  const idBurgerIngredient = ingredient.data._id;
  const counterIngredient = ingredient.data.__v;
  const counter = getCount(idBurgerIngredient, ingredients, counterIngredient);

  function getCount(evt, item, counterIngredient) {
    var counterIngredient = 0;
    {
      item.map((card) => (card.id.data._id === evt ? (counterIngredient = counterIngredient + 1) : counterIngredient));
    }
    return counterIngredient;
  }

  const image = <img src={data.image} alt={data.name} />;
  const modalIngredientRef = React.useRef();
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(
      {
        type: ADD_INGREDIENT_DETAL,
        dataIngredient,
      },
    )
    modalIngredientRef.current.openModal();  
  };
 
  return (
    <div>
      <div className="ml=4 mt=6 mr=6 mb=10">
        <div className={styles.info_ingredient} onClick={openModal}>
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
        </div>
      </div>

      <Modal ref={modalIngredientRef}>
        <IngredientDetails modalIngredientRef={modalIngredientRef} data={data} />
      </Modal>
    </div>
  );
};

BurgerIngredient.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BurgerIngredient;