import { dataConstructor } from './Constructor'
import { ADD_CONSTRUCTOR_COMPONENT } from "../actions/Constructor";
import { DELETE_CONSTRUCTOR_COMPONENT } from "../actions/Constructor";
import { CONSTRUCTER_ORDER } from "../actions/Constructor";
import { TConstructorIngredient } from "../../utils/types";


const initialState: Array<TConstructorIngredient> = [];

describe('dataConstructor', () => {
    it('ADD_CONSTRUCTOR_COMPONENT', () => {
        const action = {
            type: ADD_CONSTRUCTOR_COMPONENT,
            itemId: {
                data: {
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
            },
            board: "string",
            randomId: 1,
            id: {
                data: {
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
            },
            arr: {
                data: {
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
                }
            },
        }
        expect(dataConstructor(initialState, action)).toEqual([
            ...initialState,
            {
                id: action.itemId,
                arr: action.itemId.data,
                board: action.board,
                randomId: action.randomId,
            },
        ])
    })
    it('DELETE_CONSTRUCTOR_COMPONENT', () => {
        const filter = initialState.filter((item) => item.randomId !== action.item);
        const action = {
            type: DELETE_CONSTRUCTOR_COMPONENT,
            item: 1,
        }
        expect(dataConstructor(initialState, action)).toEqual([
            ...filter
        ])
    })
    it('CONSTRUCTER_ORDER', () => {
        const action = {
            type: CONSTRUCTER_ORDER,
            hoverIndex: 5,
            dragIndex: 2,
        }
        const ingredients = [...initialState];
        ingredients.splice(action.hoverIndex, 0, ingredients.splice(action.dragIndex, 1)[0]);
        expect(dataConstructor(initialState, action)).toEqual([
            ...ingredients,
        ])
    })
})