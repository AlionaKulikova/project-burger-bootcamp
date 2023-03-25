import { postReducer } from '../reducers/OrderDetails';
import { POST_DATA, GET_FAILED_ORDER, GET_POST_SUCCESS } from '../actions/OrderDetails';
import { IOrder } from '../../utils/types';


interface IPost {
    postRequest: boolean,
    postFailed: boolean,
    dataPost: IOrder;
}
const initialState: IPost = {
    postRequest: false,
    postFailed: false,
    dataPost: {},
}
describe('postReducer', () => {
    it('POST_DATA', () => {
        const action = {
            type: POST_DATA,
            text: 'test',
            postRequest: true,
            postFailed: false,
        }
        expect(postReducer(initialState, action)).toEqual({
            ...initialState,
            postRequest: true,
            postFailed: false,
        })
    })
    it('GET_POST_SUCCESS', () => {
        const stateBefore = {
            postRequest: true,
            postFailed: false,
            dataPost: {},
        }
        const action = {
            type: GET_POST_SUCCESS,
            dataPost: {},
            postRequest: false,
        }
        expect(postReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            dataPost: action.dataPost,
            postRequest: false,
        })
    })
    it('GET_FAILED_ORDER', () => {
        const stateBefore = {
            postRequest: false,
            postFailed: false,
            dataPost: {},
        }
        const action = {
            type: GET_FAILED_ORDER,
            postFailed: true,
            postRequest: false
        }
        expect(postReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            postFailed: true,
            postRequest: false
        })
    })
})