import React from "react";
import { Button, ConstructorElement, CurrencyIcon, CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients.js";
import styles from "./styles.module.css";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.js";
import OrderDetails from "../OrderDetails/OrderDetails.js";
import done from "../../images/done.svg";
import PropTypes from "prop-types";

function Main({ data }) {
  const [object, setObject] = React.useState({ isBuns: true, isSousy: false, isFillings: false });
  const toggleisBuns = () => {
    object.isBuns === false ? setObject({ isBuns: true, isSousy: false, isFillings: false }) : setObject({ ...object, isBuns: false });
  };

  const toggleisSousy = () => {
    object.isSousy === false ? setObject({ isBuns: false, isSousy: true, isFillings: false }) : setObject({ ...object, isSousy: false });
  };

  const toggleisFillings = () => {
    object.isFillings === false ? setObject({ isBuns: false, isSousy: false, isFillings: true }) : setObject({ ...object, isFillings: false });
  };

  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        {
          closeOrderDetails();
        }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const img = <img src="https://code.s3.yandex.net/react/code/bun-02.png" />;

  const modalOrderRef = React.useRef();

  const openOrderDetails = () => {
    modalOrderRef.current.openOrderDetails();
  };

  const closeOrderDetails = () => {
    modalOrderRef.current.closeOrderDetails();
  };

  return (
    <div className={styles.box}>
      <div className={styles.box_one}>
        <div className="mt-10 mb-5">
          <p className="text text_type_main-large">Соберите бургер</p>
        </div>
        <div className="mb-10">
          <div className={styles.menu}>
            <a style={{ textDecoration: "none", textAlign: "center" }} href="#buns" onClick={toggleisBuns} className={object.isBuns === true ? styles.button_menu_one : styles.button_menu}>
              <p className="text text_type_main-medium">Булки</p>
            </a>
            <a style={{ textDecoration: "none", textAlign: "center" }} href="#sousy" onClick={toggleisSousy} className={object.isSousy === true ? styles.button_menu_two : styles.button_menu}>
              <p className="text text_type_main-medium">Соусы</p>
            </a>
            <a style={{ textDecoration: "none", textAlign: "center" }} href="#fillings" onClick={toggleisFillings} className={object.isFillings === true ? styles.button_menu_three : styles.button_menu}>
              <p className="text text_type_main-medium">Начинки</p>
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div id="buns">
            <h2>Булки</h2>
            <div className={styles.buns_box}> {data.map((film, index) => film.type === "bun" && <BurgerIngredients key={index} data={film} />)}</div>
          </div>
          <div id="sousy">
            <h2>Соусы</h2>
            <div className={styles.sousy_box}> {data.map((film, index) => film.type === "sauce" && <BurgerIngredients key={index} data={film} />)}</div>
          </div>
          <div id="fillings">
            <h2>Начинки</h2>
            <div className={styles.fillings_box}> {data.map((film, index) => film.type === "main" && <BurgerIngredients key={index} data={film} />)}</div>
          </div>
        </div>
      </div>
      <div className={styles.box_two}>
        <div className="mt-25" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="ml-8">
            <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={20} thumbnail={img.props.src} />
          </div>
          <div className={styles.select_components}>
            <div> {data.map((film, index) => film.type !== "bun" && <BurgerConstructor key={index} data={film} />)}</div>
          </div>
          <div className="ml-8">
            <ConstructorElement type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={20} thumbnail={img.props.src} />
          </div>
        </div>
        <div className="mt-10 mr-4" style={{ display: "flex", flexDirection: "row", gap: "40px", justifyContent: "right", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="text text_type_digits-medium">
              610
              <CurrencyIcon type="primary" />
            </p>
          </div>
          <div>
            <Button htmlType="button" type="primary" size="medium" onClick={openOrderDetails}>
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
      <OrderDetails ref={modalOrderRef}>
        <div className="mt-15 mr-10" style={{ display: "flex", alignSelf: "right", marginLeft: "659px", marginBottom: "39px" }}>
          <CloseIcon type="primary" onClick={() => modalOrderRef.current.close()} />
        </div>
        <div>
          <h1 className="text text_type_digits-large">034536</h1>
        </div>
        <div className="mt-10 mb-15">
          <p className="text text_type_main-medium"> идентификатор заказа</p>
        </div>
        <div style={{ width: "120px", height: "120px" }}>
          <img src={done} />
        </div>
        <div className="mb-2 mt-15">
          <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        </div>
        <div className="mb-30">
          <p className="text text_type_main-default  text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
      </OrderDetails>
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.array,
};

export default Main;