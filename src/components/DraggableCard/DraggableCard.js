import { useDrag } from "react-dnd";
import { BurgerIngredient } from "../BurgerIngredient/BurgerIngredient.js";
import PropTypes from "prop-types";

export const DraggableCard = ({ data }) => {
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

  return !isDrag && draggableCardContent;
};

DraggableCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DraggableCard;