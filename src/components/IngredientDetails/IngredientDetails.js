import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const IngredientDetails = () => {
  const { dataIngredient } = useSelector((state) => ({
    dataIngredient: state.dataIngredientsReducer,
  }));

  const image_large = <img src={dataIngredient.dataIngredient.image_large} alt={dataIngredient.dataIngredient.name} />;
  return (
    <div className={styles.ingredient_detals_modal}>
      <div className={`${styles.ingredient_header} mt-10`}>
        <div>
          <p className="text text_type_digits-medium">Детали ингредиента</p>
        </div>
      </div>
      <div className="mb-4">{image_large}</div>
      <div className="mb-8">
        <p className="text text_type_main-medium"> {dataIngredient.dataIngredient.name}</p>
      </div>
      <div className={`${styles.table} mb-15`}>
        <div className={styles.table_of_contents}>
          <div>
            <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
          </div>
          <div>
            <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{dataIngredient.dataIngredient.calories}</p>
          </div>
        </div>
        <div className={styles.table_of_contents}>
          <div>
            {" "}
            <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Белки, г</p>
          </div>
          <div>
            <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{dataIngredient.dataIngredient.proteins}</p>
          </div>
        </div>
        <div className={styles.table_of_contents}>
          <div>
            <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Жиры, г </p>
          </div>
          <div>
            <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{dataIngredient.dataIngredient.fat}</p>
          </div>
        </div>
        <div>
          <div>
            <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Углеводы, г </p>
          </div>
          <div>
            <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{dataIngredient.dataIngredient.carbohydrates}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  modalIngredientRef: PropTypes.object.isRequired,
};

export default IngredientDetails;