import { ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorComponent from "../ConstructorComponent/ConstructorComponent.js";
import styles from "./styles.module.css";
import Modal from "../Modal/Modal.js";
import React, { useMemo } from "react";
import OrderDetails from "../OrderDetails/OrderDetails.js";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ADD_CONSTRUCTOR_COMPONENT } from "../../services/actions/Constructor.js";
import { Summa } from "../Summa/Summa.js";
import { useNavigate } from "react-router-dom";


export const BurgerConstructor = () => {

  const { nameUser } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
  }));

  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    if (!nameUser) {
      setIsOrderModalOpen(false);
      navigate("/login");
    }
    setIsOrderModalOpen(true);
  };

  const closeModal = () => {
    setIsOrderModalOpen(false);
  };

  const { dataconstructor } = useSelector((state) => ({
    dataconstructor: state.dataConstructor,
  }));

  const dispatch = useDispatch();
  const board = "box";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [{ isDrop }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      isDrop: monitor.isOver(),
    }),
    drop(itemId) {
      const randomId = getRandomInt(1000);
      dispatch(
        {
          type: ADD_CONSTRUCTOR_COMPONENT,
          ...itemId,
          itemId,
          board,
          randomId,
        },
        drop
      );
    },
  });

  const sumIngredients = useMemo(() => {
    let i = 0;
    dataconstructor.map((item) => (item.id.data.type === "bun" ? (i += item.id.data.price * 2) : (i += item.id.data.price)));
    return i;
  });

  return (
    <div className={styles.box_two}>
      <div className={`${styles.box_two_filling} mt-25`}>
        <div className="mr-4">
          <div className="ml-8">{dataconstructor.map((item) => item.id.data.type === "bun" && <ConstructorElement key={item.id.data._id} type="top" isLocked={true} text={`${item.id.data.name}` + `(верх)`} price={item.id.data.price} thumbnail={item.id.data.image} />)}</div>
        </div>
        <div ref={drop} className={styles.select_components}>
          <div>{dataconstructor.map((card, index) => card.id.data.type !== "bun" && <ConstructorComponent key={card.randomId} data={card} draggable={true} index={index} />)}</div>
        </div>
        <div className="ml-8">{dataconstructor.map((item) => item.id.data.type === "bun" && <ConstructorElement key={item.id.data._id} type="bottom" isLocked={true} text={`${item.id.data.name}` + `(низ)`} price={item.id.data.price} thumbnail={item.id.data.image} />)}</div>
      </div>
      <div className={`${styles.checkout_box} mt-10 mr-4`}>
        <Summa sum={sumIngredients} />
        <div>
          <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {isOrderModalOpen &&
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>}
    </div>
  );
};

export default BurgerConstructor;