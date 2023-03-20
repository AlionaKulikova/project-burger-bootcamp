import React, { FC } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import { useSelector } from '../../utils/hooks';
import { DraggableCard } from "../DraggableCard/DraggableCard";
import { TIngredient } from "../../utils/types";

const BurgerIngredients: FC = () => {

  const { feed } = useSelector((state) => ({
    feed: state.dataReducer.feed,
  }));

  const [current, setCurrent] = React.useState("one");

  const box = document.getElementById("box");
  const buns = document.getElementById("buns");
  const sousy = document.getElementById("sousy");
  const fillings = document.getElementById("fillings");

  const scrolling = () => {
    const positionBuns = buns && box && Math.abs(buns.getBoundingClientRect().top - box.getBoundingClientRect().top);
    const positionSousy = sousy && box && Math.abs(sousy.getBoundingClientRect().top - box.getBoundingClientRect().top);
    const positionFillings = fillings && box && Math.abs(fillings.getBoundingClientRect().top - box.getBoundingClientRect().top);
    if (positionBuns && positionSousy && positionFillings &&
      positionBuns < positionSousy &&
      positionBuns < positionFillings) { setCurrent("one") }
    if (positionBuns && positionSousy && positionFillings &&
      positionSousy < positionFillings
      &&
      positionSousy < positionBuns) { setCurrent("two") }
    if (positionBuns && positionSousy && positionFillings &&
      positionFillings < positionSousy &&
      positionFillings < positionBuns) { setCurrent("three") }
  }

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
              <Tab value="three" active={current === "three"} onClick={setCurrent} >
                <p className="text text_type_main-medium">Начинки</p>
              </Tab>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container} id="box" onScroll={scrolling}>
        <div id="buns">
          <h2>Булки</h2>
          <div className={styles.buns_box}> {feed.map((card: TIngredient) => card.type === "bun" && <DraggableCard key={card._id} data={card} />)}</div>
        </div>
        <div id="sousy">
          <h2>Соусы</h2>
          <div className={styles.sousy_box}> {feed.map((card: TIngredient) => card.type === "sauce" && <DraggableCard key={card._id} data={card} />)}</div>
        </div>
        <div id="fillings">
          <h2>Начинки</h2>
          <div className={styles.fillings_box}> {feed.map((card: TIngredient) => card.type === "main" && <DraggableCard key={card._id} data={card} />)}</div>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;