import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export const Summa = ({ sum }) => {
  return (
    <div className={styles.sum}>
      <p className="text text_type_digits-medium">
        {sum}
        <CurrencyIcon type="primary" />
      </p>
    </div>
  );
};

Summa.propTypes = {
  sum: PropTypes.number.isRequired,
};

export default Summa;