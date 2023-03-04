import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { DELETE_INGREDIENT_DETAL } from "../actions/BurgerIngredient";


const initialState = {
    feedRequest: false,
    feedFailed: false,
    ingredient: {},
    openModal: false,
};

export const dataIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAL: {
            const dataIngredient = action.dataIngredient;
            return {
                ingredient: dataIngredient,
                openModal: true,
            };
        }
        case DELETE_INGREDIENT_DETAL: {
            return {
                ...state,
                ingredient: {},
                openModal: false,
            };
        }
        default:
            return state;
    }
}
