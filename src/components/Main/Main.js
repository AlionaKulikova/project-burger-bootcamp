import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.js";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients.js";
import styles from "./styles.module.css";

export function Main() {

    return (
        <main className={styles.box}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

export default Main;