import { postResetPasswordReducer } from '../reducers/ResetPassword';
import { POST_DATA_RESET_PASSWORD, GET_FAILED_RESET_PASSWORD, GET_POST_SUCCESS_RESET_PASSWORD } from '../actions/ResetPassword';
import { initialState } from './ResetPassword';


describe('postResetPasswordReducer', () => {
    it('POST_DATA_RESET_PASSWORD', () => {
        const action = {
            type: POST_DATA_RESET_PASSWORD,
            text: 'test',
            postRequest: true,
            postFailed: false,
        }
        expect(postResetPasswordReducer(initialState, action)).toEqual({
            ...initialState,
            postRequest: true,
            postFailed: false,
        })
    })
    it('GET_POST_SUCCESS_RESET_PASSWORD', () => {
        const stateBefore = {
            postRequest: true,
            postFailed: false,
            dataPost: {},
        }
        const action = {
            type: GET_POST_SUCCESS_RESET_PASSWORD,
            dataPost: {},
            postRequest: false,
        }
        expect(postResetPasswordReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            dataPost: action.dataPost,
            postRequest: false,
        })
    })
    it('GET_FAILED_RESET_PASSWORD', () => {
        const stateBefore = {
            postRequest: false,
            postFailed: false,
            dataPost: {},
        }
        const action = {
            type: GET_FAILED_RESET_PASSWORD,
            postFailed: true,
            postRequest: false
        }
        expect(postResetPasswordReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            postFailed: true,
            postRequest: false
        })
    })
})