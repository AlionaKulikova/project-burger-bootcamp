import { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

type Props = {
  sum: number,
}

export const Summa: FC<Props> = ({ sum }) => {
  return (
    <div className={styles.sum}>
      <p className="text text_type_digits-medium">
        {sum}
        <CurrencyIcon type="primary" />
      </p>
    </div>
  );
};

export default Summa;