import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";


export const IngredientDetails = () => {

  const { feed } = useSelector((state) => ({
    feed: state.dataReducer,
  }));
  const { statusModal } = useSelector((state) => ({
    statusModal: state.dataIngredientsReducer.openModal,
  }));
  const { id } = useParams();
  const targetIngredient = feed.feed.find((item) => item._id === id);

  return (
    <>
      {targetIngredient ?
        <div className={styles.ingredient_detals_modal}>
          <div className={statusModal ? `${styles.ingredient_header} mt-10` : `${styles.ingredient_header_page}`}>
            <div>
              <p className="text text_type_digits-medium">Детали ингредиента</p>
            </div>
          </div>
          <div className="mb-4"><img src={targetIngredient.image_large} alt={targetIngredient.name} /></div>
          <div className="mb-8">
            <p className="text text_type_main-medium"> {targetIngredient.name}</p>
          </div>
          <div className={`${styles.table} mb-15`}>
            <div className={styles.table_of_contents}>
              <div>
                <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
              </div>
              <div>
                <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{targetIngredient.calories}</p>
              </div>
            </div>
            <div className={styles.table_of_contents}>
              <div>
                {" "}
                <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Белки, г</p>
              </div>
              <div>
                <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{targetIngredient.proteins}</p>
              </div>
            </div>
            <div className={styles.table_of_contents}>
              <div>
                <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Жиры, г </p>
              </div>
              <div>
                <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{targetIngredient.fat}</p>
              </div>
            </div>
            <div>
              <div>
                <p className={`${styles.content} text text_type_main-default text_color_inactive`}>Углеводы, г </p>
              </div>
              <div>
                <p className={`${styles.content} text text_type_digits-default text_color_inactive`}>{targetIngredient.carbohydrates}</p>
              </div>
            </div>
          </div>
        </div>
        : <div><p>Загрузка</p></div>}
    </>
  );
};

export default IngredientDetails;