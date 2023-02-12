import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ data }) => {
  return (
    <div className="mt-4">
      <DragIcon type="primary" style={{ marginRight: "13.5" }} />
      <ConstructorElement text={data.name} price={data.price} thumbnail={data.image} />
    </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.array,
};

export default BurgerConstructor;