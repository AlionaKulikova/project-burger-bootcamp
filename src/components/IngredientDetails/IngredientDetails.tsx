import { FC } from "react";
import { useSelector } from '../../utils/hooks';
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TIngredient } from "../../utils/types"


export const IngredientDetails: FC = () => {
  let location = useLocation();
  let state = location.state;
  const { feed } = useSelector((state) => ({
    feed: state.dataReducer,
  }));
  const { id } = useParams();
  const targetIngredient = feed.feed.find((item: TIngredient) => item._id === id);

  return (
    <>
      {targetIngredient ?
        <div className={styles.ingredient_detals_modal}>
          <div className={state ? `${styles.ingredient_header} mt-10` : `${styles.ingredient_header_page}`}>
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