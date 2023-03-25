import { dataIngredientsReducer } from '../reducers/BurgerIngredient'
import { ADD_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { DELETE_INGREDIENT_DETAL } from "../actions/BurgerIngredient";
import { ADD_ORDER_DETAL } from "../actions/ComponentOrderDetails";
import { ADD_PROFILE_ORDER_DETAL } from '../../utils/types';
import { TBurgerIngredient } from "../../utils/types"


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

describe('dataIngredientsReducer', () => {
    it('ADD_INGREDIENT_DETAL', () => {
        const action = {
            type: ADD_INGREDIENT_DETAL,
            dataIngredient: {
                calories: 1,
                carbohydrates: 1,
                fat: 1,
                image: 'test',
                image_large: 'test',
                image_mobile: 'test',
                name: 'test',
                price: 1,
                proteins: 1,
                type: 'test',
                __v: 1,
                _id: 'test',
            },
            openModal: true,
            openOrderDetalModal: false,
        }
        expect(dataIngredientsReducer(initialState, action)).toEqual({
            ...initialState,
            dataIngredient: action.dataIngredient,
            openModal: true,
            openOrderDetalModal: false,
        })
    })
    it('DELETE_INGREDIENT_DETAL', () => {
        const action = {
            type: DELETE_INGREDIENT_DETAL,
            dataIngredient: {},
            openModal: false,
            openOrderDetalModal: false,
            openProfileOrderDetalModal: false,
        }
        expect(dataIngredientsReducer(initialState, action)).toEqual({
            ...initialState,
            dataIngredient: {},
            openModal: false,
            openOrderDetalModal: false,
            openProfileOrderDetalModal: false,
        })
    })
    it('ADD_ORDER_DETAL', () => {
        const action = {
            type: ADD_ORDER_DETAL,
            openOrderDetalModal: true,
        }
        expect(dataIngredientsReducer(initialState, action)).toEqual({
            ...initialState,
            openOrderDetalModal: true,
        })
    })
    it('ADD_PROFILE_ORDER_DETAL', () => {
        const action = {
            type: ADD_PROFILE_ORDER_DETAL,
            openProfileOrderDetalModal: true,
        }
        expect(dataIngredientsReducer(initialState, action)).toEqual({
            ...initialState,
            openProfileOrderDetalModal: true,
        })
    })
})