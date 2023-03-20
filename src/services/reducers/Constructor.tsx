import { ADD_CONSTRUCTOR_COMPONENT } from "../actions/Constructor";
import { DELETE_CONSTRUCTOR_COMPONENT } from "../actions/Constructor";
import { CONSTRUCTER_ORDER } from "../actions/Constructor";
import { AppActions } from "../../utils/types";
import { TConstructorIngredient } from "../../utils/types";


const initialState: Array<TConstructorIngredient> = [];

export const dataConstructor = (state = initialState, action: AppActions): Array<TConstructorIngredient> => {
  switch (action.type) {

    case ADD_CONSTRUCTOR_COMPONENT: {
      const itemIngredient = action.itemId.data;
      if (itemIngredient.type === "bun") {
        const filtrArray = state.filter((item: any) => item.id.data.type !== "bun");
        return [
          ...filtrArray,
          {
            id: action.itemId,
            arr: itemIngredient,
            board: action.board,
            randomId: action.randomId,
          },
        ];
      } else {
        return [
          ...state,
          {
            id: action.itemId,
            arr: itemIngredient,
            board: action.board,
            randomId: action.randomId,
          },
        ];
      }
    }
    case DELETE_CONSTRUCTOR_COMPONENT: {
      const filter = state.filter((item: any) => item.randomId !== action.item);
      return [...filter];
    }
    case CONSTRUCTER_ORDER: {
      const ingredients = [...state];
      ingredients.splice(action.hoverIndex, 0, ingredients.splice(action.dragIndex, 1)[0]);
      return ingredients;
    }
    default: {
      return state;
    }
  }
};