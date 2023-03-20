import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { DELETE_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { AppActions } from "../../utils/types";
import { TBurgerIngredient } from "../../utils/types"
import { ADD_ORDER_DETAL } from "../actions/ComponentOrderDetails";
import { ADD_PROFILE_ORDER_DETAL } from '../../utils/types';

interface IDataIngredients {
    feedRequest: boolean,
    feedFailed: boolean,
    dataIngredient: {} | TBurgerIngredient,
    openModal: boolean,
    openOrderDetalModal: boolean,
    openProfileOrderDetalModal: boolean,
};


const initialState: IDataIngredients = {
    feedRequest: false,
    feedFailed: false,
    dataIngredient: {},
    openModal: false,
    openOrderDetalModal: false,
    openProfileOrderDetalModal: false,
};

export const dataIngredientsReducer = (state = initialState, action: AppActions): IDataIngredients => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAL: {
            return {
                ...state,
                dataIngredient: action.dataIngredient,
                openModal: true,
                openOrderDetalModal: false,
            };
        }
        case DELETE_INGREDIENT_DETAL: {
            return {
                ...state,
                dataIngredient: {},
                openModal: false,
                openOrderDetalModal: false,
                openProfileOrderDetalModal: false,
            };
        }

        case ADD_ORDER_DETAL: {
            return {
                ...state,
                openOrderDetalModal: true,
            };
        }

        case ADD_PROFILE_ORDER_DETAL: {
            return {
                ...state,
                openProfileOrderDetalModal: true,
            };
        }
        default:
            return state;
    }
}