import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { FC } from "react";


export const Main: FC = () => {

    return (
        <main className={styles.box}>
            <BurgerIngredients />
            <BurgerConstructor />
            <Outlet />
        </main>
    )
}

export default Main;