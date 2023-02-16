import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { DELETE_INGREDIENT_DETAL } from "../actions/BurgerIngredient";

const initialState = {};

export const dataIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAL: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0cd75a2ee25e8054e3fdc3c8c88fed7fadf0b5a5
            const dataIngredient = action.dataIngredient;
            return {
                dataIngredient,
            };
        }
<<<<<<< HEAD

        case DELETE_INGREDIENT_DETAL: {
            state = [];
            return {
                state,
            };
        }

=======
=======
>>>>>>> 0cd75a2ee25e8054e3fdc3c8c88fed7fadf0b5a5

        case DELETE_INGREDIENT_DETAL: {
            state = [];
            return {
                state,
            };
        }

>>>>>>> 74b9d4f164979ede72f3e2f5dbf8eebd97770aa9
        default:
            return state;
    }
}
