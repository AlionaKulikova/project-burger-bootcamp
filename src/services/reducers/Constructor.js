import { ADD_CONSTRUCTOR_COMPONENT } from "../actions/Constructor";
import { DELETE_CONSTRUCTOR_COMPONENT } from "../actions/Constructor";
import { CONSTRUCTER_ORDER } from "../actions/Constructor";

const initialState = [];

export const dataConstructor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_COMPONENT: {
      if (action.itemId.data.type === "bun") {
        const filtrArray = state.filter((item) => item.id.data.type !== "bun");
        return [
          ...filtrArray,
          {
            id: action.itemId,
            arr: action.itemId.data,
            board: action.board,
            randomId: action.randomId,
          },
        ];
      } else {
        return [
          ...state,
          {
            id: action.itemId,
            arr: action.itemId.data,
            board: action.board,
            randomId: action.randomId,
          },
        ];
      }
    }

    case DELETE_CONSTRUCTOR_COMPONENT: {
      const filter = state.filter((item) => item.randomId !== action.item);
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