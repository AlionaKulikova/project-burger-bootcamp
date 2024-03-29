import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DELETE_CONSTRUCTOR_COMPONENT, CONSTRUCTER_ORDER } from "../../services/actions/Constructor";
import { useDispatch } from '../../utils/hooks';
import styles from "./styles.module.css";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { useRef } from "react";
import { FC } from "react";
import { TConstructorIngredient } from "../../utils/types";


type Props = {
  key: number,
  data: TConstructorIngredient,
  draggable: boolean,
  index: number,
}


export const ConstructorComponent: FC<Props> = (props) => {

  const index = props.index;
  const data = props.data;
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);

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

    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hovergetBounding = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hovergetBounding.bottom - hovergetBounding.top) / 2;
      const clientOffset: any = monitor.getClientOffset();
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

  const handleClose = (item: number) => {
    dispatch({
      type: DELETE_CONSTRUCTOR_COMPONENT,
      item,
    });
  };

  return (
    <li ref={ref}>
      <div className={`${dragColor}  mt-4`}>

        <DragIcon type="primary" />

        <ConstructorElement text={data.id.data.name} price={data.id.data.price} thumbnail={data.id.data.image} handleClose={() => handleClose(data.randomId)} />
      </div>
    </li>
  );
};

export default ConstructorComponent;