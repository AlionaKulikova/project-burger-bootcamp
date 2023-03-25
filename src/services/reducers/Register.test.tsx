import { postRegister } from '../reducers/Register';
import { POST_DATA_REGISTER, GET_FAILED_REGISTER, GET_POST_SUCCESS_REGISTER } from '../actions/Register';


interface IPostRegister {
    postRequest: boolean,
    postFailed: boolean,
    dataPost: {},
}
const initialState: IPostRegister = {
    postRequest: false,
    postFailed: false,
    dataPost: {},
}

describe('postRegister', () => {
    it('POST_DATA_REGISTER', () => {
        const action = {
            type: POST_DATA_REGISTER,
            text: 'test',
            postRequest: true,
            postFailed: false,
        }
        expect(postRegister(initialState, action)).toEqual({
            ...initialState,
            postRequest: true,
            postFailed: false,
        })
    })
    it('GET_POST_SUCCESS_REGISTER', () => {
        const stateBefore = {
            postRequest: false,
            postFailed: false,
            dataPost: {},
        }
        const action = {
            type: GET_POST_SUCCESS_REGISTER,
            dataPost: {},
            postRequest: false,
        }
        expect(postRegister(stateBefore, action)).toEqual({
            ...stateBefore,
            dataPost: action.dataPost,
            postRequest: false,
        })
    })
    it('GET_FAILED_REGISTER', () => {
        const stateBefore = {
            postRequest: false,
            postFailed: false,
            dataPost: {},
        }
        const action = {
            type: GET_FAILED_REGISTER,
            postRequest: false,
            postFailed: true,
        }
        expect(postRegister(stateBefore, action)).toEqual({
            ...stateBefore,
            postRequest: false,
            postFailed: true,
        })
    })
})