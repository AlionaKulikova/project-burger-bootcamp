import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";

const initialState =  {};

export const dataIngredientsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_INGREDIENT_DETAL: {

           const dataIngredient= action.dataIngredient;

         return {
            dataIngredient,
         };
        }

        default:
            return state;
    }
}
