import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { DELETE_INGREDIENT_DETAL } from "../actions/BurgerIngredient";

const initialState =  {};

export const dataIngredientsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_INGREDIENT_DETAL: {

           const dataIngredient= action.dataIngredient;

         return {
            dataIngredient,
         };
        }

        case DELETE_INGREDIENT_DETAL: {

            state =[];

            return {
                state,    
            };
        }

        default:
            return state;
    }
}
