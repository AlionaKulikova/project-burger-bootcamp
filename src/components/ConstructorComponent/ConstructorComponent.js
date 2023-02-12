import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DELETE_CONSTRUCTOR_COMPONENT, CONSTRUCTER_ORDER } from "../../services/actions/Constructor.js";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { useRef } from "react";

export const ConstructorComponent = (props) => {
  const index = props.index;
  const data = props.data;
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "SORT_INGREDIENT",
    item: () => {
      return { data, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const dragColor = isDragging && styles.lightpurple;

  const [{ handlerId }, drop] = useDrop(() => ({
    accept: ["SORT_INGREDIENT"],
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        console.log(`dragIndex === hoverIndex`);
        console.log(dragIndex);
        console.log(hoverIndex);
        return;
      }
      const hovergetBounding = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hovergetBounding.bottom - hovergetBounding.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hovergetBounding.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch({
        type: CONSTRUCTER_ORDER,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });
      item.index = hoverIndex;
    },
  }));

  drag(drop(ref));

  const handleClose = (item) => {
    dispatch({
      type: DELETE_CONSTRUCTOR_COMPONENT,
      item,
    });
  };

  return (
    <li ref={ref}>
      <div className={`${dragColor}  mt-4`}>
        <DragIcon type="primary" className="mr-3" />
        <ConstructorElement text={data.id.data.name} price={data.id.data.price} thumbnail={data.id.data.image} handleClose={() => handleClose(data.randomId)} />
      </div>
    </li>
  );
};

export default ConstructorComponent;