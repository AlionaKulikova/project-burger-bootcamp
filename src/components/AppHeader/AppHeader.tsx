import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import { NavLink, useLocation } from 'react-router-dom';
import { FC } from 'react';


export const AppHeader: FC = () => {

  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className=" mb-4 mt-4 mr-2">
          <NavLink
            to="/"
            className={
              ({ isActive }) =>
                isActive ? styles.activeStyle : `${styles.activeStyle} text text_type_main-default text_color_inactive text_type_main-small`
            }>
            <div className=" ml-5">
              <BurgerIcon type={location.pathname === "/" ? "primary" : "secondary"} />
            </div>
            <div>
              <p className={location.pathname === "/" ? "text text_type_main-default text_type_main-small" : "text text_type_main-default text_color_inactive text_type_main-small"}>
                Конструктор
              </p>
            </div>
          </NavLink>
        </div>
        <div className="mt-4 mb-4">
          <NavLink
            to="/feed"
            className={
              ({ isActive }) =>
                isActive ? styles.activeStyle : `${styles.activeStyle} text text_type_main-default text_color_inactive text_type_main-small`
            }>
            <ListIcon type={location.pathname === "/feed" ? "primary" : "secondary"} />
            <p className={location.pathname === "/feed" ? "text text_type_main-default text_type_main-small" : "text text_type_main-default text_color_inactive text_type_main-small"}>
              Лента заказов
            </p>
          </NavLink>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className="mt-4 mb-4">
          <NavLink
            to="/profile"
            className={
              ({ isActive }) =>
                isActive ? styles.activeStyle : `${styles.activeStyle} text text_type_main-default text_color_inactive text_type_main-small`
            }>
            <ProfileIcon type={location.pathname === "/profile" ? "primary" : "secondary"} />
            <p className={location.pathname === "/profile" ? "text text_type_main-default text_type_main-small" : "text text_type_main-default text_color_inactive text_type_main-small"}>
              Личный кабинет
            </p>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader;