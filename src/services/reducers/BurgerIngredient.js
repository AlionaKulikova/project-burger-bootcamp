import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { DELETE_INGREDIENT_DETAL } from "../actions/BurgerIngredient";

const initialState =  {};

export const dataIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_INGREDIENT_DETAL: {
<<<<<<< HEAD
            const dataIngredient = action.dataIngredient;
            return {
                dataIngredient,
            };
        }

        case DELETE_INGREDIENT_DETAL: {
            state = [];
            return {
                state,
            };
        }

=======

           const dataIngredient= action.dataIngredient;

         return {
            dataIngredient,
         };
        }

>>>>>>> 74b9d4f164979ede72f3e2f5dbf8eebd97770aa9
        default:
            return state;
    }
}
