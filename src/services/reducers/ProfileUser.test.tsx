import { getUser } from '../reducers/ProfileUser';
import { GET_DATA_USER, GET_FAILED_USER, GET_SUCCESS_USER } from '../actions/ProfileUser';
import { initialState } from './ProfileUser';

describe('postReducer', () => {
    it('GET_DATA_USER', () => {
        const action = {
            type: GET_DATA_USER,
            text: 'test',
            getRequest: true,
            getFailed: false,
        }

        expect(getUser(initialState, action)).toEqual({
            ...initialState,
            getRequest: true,
            getFailed: false,
        })
    })
    it('GET_SUCCESS_USER', () => {
        const stateBefore = {
            getRequest: true,
            getFailed: false,
            dataGet: {},
        }
        const action = {
            type: GET_SUCCESS_USER,
            dataGet: {},
            getRequest: false,
        }
        expect(getUser(stateBefore, action)).toEqual({
            ...stateBefore,
            dataGet: action.dataGet,
            getRequest: false,
        })
    })
    it('GET_FAILED_USER', () => {
        const stateBefore = {
            getRequest: false,
            getFailed: false,
            dataGet: {},
        }
        const action = {
            type: GET_FAILED_USER,
            getFailed: true,
            getRequest: false
        }
        expect(getUser(stateBefore, action)).toEqual({
            ...stateBefore,
            getFailed: true,
            getRequest: false
        })
    })
})