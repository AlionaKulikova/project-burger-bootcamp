import React from "react";
import { CurrencyIcon, CloseIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";

const BurgerIngredients = ({ data }) => {
  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        {
          closeIngredientDetails();
        }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const image = <img src={data.image} alt={data.name} />;

  const image_large = <img src={data.image_large} />;

  const modalIngredientRef = React.useRef();

  const openIngredientDetails = () => {
    modalIngredientRef.current.openIngredientDetails();
  };

  const closeIngredientDetails = () => {
    modalIngredientRef.current.closeIngredientDetails();
  };

  return (
    <div className="ml=4 mt=6 mr=6 mb=10">
      <div className={styles.info_ingredient} onClick={openIngredientDetails}>
        <div className="ml=4">
          {" "}
          <div style={{ position: "relative" }}>
            <Counter count={data.__v} size="default" extraClass="m-1" />
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
      <IngredientDetails ref={modalIngredientRef}>
        <div className="mt-10" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "640px", height: "64px" }}>
          <div>
            <p className="text text_type_digits-medium">Детали ингредиента</p>
          </div>
          <div>
            <CloseIcon type="primary" onClick={() => modalIngredientRef.current.close()} />
          </div>
        </div>
        <div className="mb-4">{image_large}</div>
        <div className="mb-8">
          <p className="text text_type_main-medium"> {data.name}</p>
        </div>
        <div className="mb-15" style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <p className="text text_type_main-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                Калории,ккал
              </p>
            </div>
            <div>
              <p className="text text_type_digits-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                {data.calories}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              {" "}
              <p className="text text_type_main-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                Белки, г
              </p>
            </div>
            <div>
              <p className="text text_type_digits-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                {data.proteins}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <p className="text text_type_main-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                Жиры, г{" "}
              </p>
            </div>
            <div>
              <p className="text text_type_digits-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                {data.fat}
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text text_type_main-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                Углеводы, г{" "}
              </p>
            </div>
            <div>
              <p className="text text_type_digits-default text_color_inactive" style={{ display: "flex", justifyContent: "center" }}>
                {data.carbohydrates}
              </p>
            </div>
          </div>
        </div>
      </IngredientDetails>
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.array,
};

export default BurgerIngredients;