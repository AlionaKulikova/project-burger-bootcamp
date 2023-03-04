import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import { NavLink, useLocation } from 'react-router-dom';

export function AppHeader() {

  const location = useLocation();
  let activeStyle = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "row nowrap",
    alignItems: "center",
    gap: "8px",
    background: "#1c1c21",
    width: "179px",
    height: "56px",
    border: "none",
    color: "white",
  };

  let noActiveClassName = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "row nowrap",
    alignItems: "center",
    gap: "8px",
    background: "#1c1c21",
    width: "179px",
    height: "56px",
    border: "none",
    color: "#8585AD",
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className=" mb-4 mt-4 mr-2">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : noActiveClassName
            }>
            <div className=" ml-5">
              <BurgerIcon type={location.pathname === "/" ? "primary" : "secondary"} />
            </div>
            <div>
              <p>Конструктор</p>
            </div>
          </NavLink>
        </div>
        <div className="mt-4 mb-4">
          <NavLink
            to="/tape"
            style={({ isActive }) =>
              isActive ? activeStyle : noActiveClassName
            } >
            <ListIcon type={location.pathname === "/tape" ? "primary" : "secondary"} />
            <p>Лента заказов</p>
          </NavLink>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className="mt-4 mb-4">
          <NavLink
            to="/profile"
            style={({ isActive }) =>
              isActive ? activeStyle : noActiveClassName} >
            <ProfileIcon type={location.pathname === "/profile" ? "primary" : "secondary"} />
            <p>
              Личный кабинет
            </p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;