import { ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorComponent from "../ConstructorComponent/ConstructorComponent";
import styles from "./styles.module.css";
import Modal from "../Modal/Modal";
import React, { useMemo, FC } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ADD_CONSTRUCTOR_COMPONENT } from "../../services/actions/Constructor";
import { Summa } from "../Summa/Summa";
import { useNavigate } from "react-router-dom";
import { TConstructorIngredient } from "../../utils/types";


export const BurgerConstructor: FC = () => {

  const { nameUser } = useSelector((state: any) => ({
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

  const { dataconstructor } = useSelector((state: any) => ({
    dataconstructor: state.dataConstructor,
  }));

  const dispatch = useDispatch();
  const board = "box";

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const [{ isDrop }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      isDrop: monitor.isOver(),
    }),
    drop(itemId: any) {
      const randomId = getRandomInt(1000);
      dispatch(
        {
          type: ADD_CONSTRUCTOR_COMPONENT,
          ...itemId,
          itemId,
          board,
          randomId,
        },
      );
    },
  });

  const sumIngredients = useMemo(() => {
    let i = 0;
    dataconstructor.map((item: TConstructorIngredient) =>
      item.id.data.type === "bun" ? i += item.id.data.price * 2 : i += item.id.data.price
    );
    return i;
  }, [dataconstructor]);

  return (
    <div className={styles.box_two}>
      <div className={`${styles.box_two_filling} mt-25`}>
        <div className="mr-4">
          <div className="ml-8">{dataconstructor.map((item: TConstructorIngredient) => item.id.data.type === "bun" && <ConstructorElement key={item.id.data._id} type="top" isLocked={true} text={`${item.id.data.name}` + `(верх)`} price={item.id.data.price} thumbnail={item.id.data.image} />)}</div>
        </div>
        <div ref={drop} className={styles.select_components}>
          <div>{dataconstructor.map((card: TConstructorIngredient, index: number) => card.id.data.type !== "bun" && <ConstructorComponent key={card.randomId} data={card} draggable={true} index={index} />)}</div>
        </div>
        <div className="ml-8">{dataconstructor.map((item: TConstructorIngredient) => item.id.data.type === "bun" && <ConstructorElement key={item.id.data._id} type="bottom" isLocked={true} text={`${item.id.data.name}` + `(низ)`} price={item.id.data.price} thumbnail={item.id.data.image} />)}</div>
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