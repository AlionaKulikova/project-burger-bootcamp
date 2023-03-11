import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { DELETE_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { AnyAction } from 'redux';


interface IDataIngredients {
    feedRequest: boolean,
    feedFailed: boolean,
    ingredient: {},
    openModal: boolean,
};


const initialState: IDataIngredients = {
    feedRequest: false,
    feedFailed: false,
    ingredient: {},
    openModal: false,
};

export const dataIngredientsReducer = (state = initialState, action: AnyAction): IDataIngredients => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAL: {
            //const dataIngredient = action.dataIngredient;
            return {
                ...state,
                ingredient: action.dataIngredient,
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
