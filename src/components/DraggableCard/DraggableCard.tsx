import { useDrag } from "react-dnd";
import { BurgerIngredient } from "../BurgerIngredient/BurgerIngredient";
import { FC } from "react";
import { TIngredient } from "../../utils/types";


export const DraggableCard: FC<{ data: TIngredient }> = ({ data }) => {

  const [{ isDrag }, drag] = useDrag({
    type: "card",
    item: { data },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const draggableCardPreview = (
    <div ref={drag}>
      <BurgerIngredient data={data} />
    </div>
  );

  const draggableCardContent = draggableCardPreview;

  return (!isDrag ? draggableCardContent : draggableCardPreview);
};

export default DraggableCard;