import { postForgotPasswordReducer } from '../reducers/ForgotPassword';
import { POST_DATA_FORGOT_PASSWORD, GET_FAILED_FORGOT_PASSWORD, GET_POST_SUCCESS_FORGOT_PASSWORD } from '../actions/ForgotPassword';


export interface IPostForgotPassword {
    postRequest: boolean,
    postFailed: boolean,
    dataPost: {},
    buttonClick: boolean,
}
const initialState: IPostForgotPassword = {
    postRequest: false,
    postFailed: false,
    dataPost: {},
    buttonClick: false,
}


describe('postForgotPasswordReducer', () => {
    it('POST_DATA_FORGOT_PASSWORD', () => {
        const action = {
            type: POST_DATA_FORGOT_PASSWORD,
            text: 'test',
        }
        expect(postForgotPasswordReducer(initialState, action)).toEqual({
            ...initialState,
            postRequest: true,
            postFailed: false,
        })
    })
    it('GET_POST_SUCCESS_FORGOT_PASSWORD', () => {
        const stateBefore = {
            postRequest: true,
            postFailed: false,
            dataPost: {},
            buttonClick: false,
        }
        const action = {
            type: GET_POST_SUCCESS_FORGOT_PASSWORD,
            postRequest: true,
            postFailed: false,
            dataPost: {},
            buttonClick: false,
        }
        expect(postForgotPasswordReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            dataPost: action.dataPost,
            buttonClick: true,
            postRequest: false,
        })
    })
    it('GET_FAILED_FORGOT_PASSWORD', () => {
        const stateBefore = {
            postRequest: false,
            postFailed: false,
            dataPost: {},
            buttonClick: true,
        }
        const action = {
            type: GET_FAILED_FORGOT_PASSWORD,
            postFailed: true,
            postRequest: false
        }
        expect(postForgotPasswordReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            postFailed: true,
            postRequest: false
        })
    })
})