import { dataReducer } from '../reducers/App'
import { TIngredient } from "../../utils/types";
import { GET_FEED, GET_FAILED, GET_FEED_SUCCESS } from "../actions/App";


export interface IData {
    feedRequest: boolean,
    feedFailed: boolean,
    feed: TIngredient[],
};

const initialState: IData = {
    feedRequest: false,
    feedFailed: false,
    feed: [],
};

describe('dataReducer', () => {
    it('GET_FEED', () => {
        const action = {
            type: GET_FEED
        }
        expect(dataReducer(initialState, action)).toEqual({
            ...initialState,
            feedRequest: true,
            feedFailed: false,
            feed: [],
        })
    })
    it('GET_FEED_SUCCESS', () => {
        const stateBefore = {
            feedRequest: true,
            feedFailed: false,
            feed: [],
        }
        const action = {
            type: GET_FEED_SUCCESS,
            feed: [{
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
            },],
        }
        expect(dataReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            feed: action.feed,
            feedRequest: false,
        })
    })
    it('GET_FAILED', () => {
        const stateBefore = {
            feedRequest: false,
            feedFailed: false,
            feed: [],
        }
        const action = {
            type: GET_FAILED,
            feedFailed: true,
            feedRequest: false,
        }
        expect(dataReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            feedFailed: true,
            feedRequest: false,
        })
    })
})