import { Logo, Button, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
    <nav className={styles.nav}>
      <div className=" mb-4 mt-4 mr-2">
        <Button htmlType="button" type="secondary" size="large" className={styles.button_style}>
          <div className=" ml-5">
            <BurgerIcon type="primary" />
          </div>
          <div>
            <p className="text text_type_main-small">Конструктор</p>
          </div>
        </Button>
      </div>
      <div className="mt-4 mb-4">
        <Button htmlType="button" type="secondary" size="large" className={styles.button_style}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
        </Button>
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className="mt-4 mb-4">
        <Button htmlType="button" type="secondary" size="large" className={styles.button_style}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
        </Button>
      </div>
    </nav>
    </header>
  );
}

export default AppHeader;