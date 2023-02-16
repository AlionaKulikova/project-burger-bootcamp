import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.js";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients.js";
import styles from "./styles.module.css";

export function Main() {
    return (
        <div className={styles.box}>
            <BurgerIngredients />
            <BurgerConstructor />
        </div>
    )
}

export default Main;