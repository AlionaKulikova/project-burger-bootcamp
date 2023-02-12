import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { DraggableCard } from "../DraggableCard/DraggableCard.js";

function BurgerIngredients() {
  const { feed } = useSelector((state) => ({
    feed: state.dataReducer.feed,
  }));

  const [current, setCurrent] = React.useState("one");

  return (
    <div className={styles.box_one}>
      <div className="mt-10 mb-5">
        <p className="text text_type_main-large">Соберите бургер</p>
      </div>
      <div className="mb-10">
        <div className={styles.menu}>
          <div className={styles.tab_menu}>
            <a href="#buns" className={styles.part_ingredients}>
              <Tab value="one" active={current === "one"} onClick={setCurrent}>
                <p className="text text_type_main-medium">Булки</p>
              </Tab>
            </a>
            <a href="#sousy" className={styles.part_ingredients}>
              <Tab value="two" active={current === "two"} onClick={setCurrent}>
                <p className="text text_type_main-medium">Соусы</p>
              </Tab>
            </a>
            <a href="#fillings" className={styles.part_ingredients}>
              <Tab value="three" active={current === "three"} onClick={setCurrent}>
                <p className="text text_type_main-medium">Начинки</p>
              </Tab>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div id="buns">
          <h2>Булки</h2>
          <div className={styles.buns_box}> {feed.map((card, index) => card.type === "bun" && <DraggableCard key={index} data={card} />)}</div>
        </div>
        <div id="sousy">
          <h2>Соусы</h2>
          <div className={styles.sousy_box}> {feed.map((card, index) => card.type === "sauce" && <DraggableCard key={index} data={card} />)}</div>
        </div>
        <div id="fillings">
          <h2>Начинки</h2>
          <div className={styles.fillings_box}> {feed.map((card, index) => card.type === "main" && <DraggableCard key={index} data={card} />)}</div>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;