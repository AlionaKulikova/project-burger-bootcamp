import { postLogin } from './Login'
import { POST_DATA_LOGIN, GET_FAILED_LOGIN, GET_POST_SUCCESS_LOGIN, USER_PASSWORD } from '../actions/Login';
import { POST_DATA_TOKEN, GET_NEW_TOKEN, GET_FAILED_TOKEN } from '../../utils/types';
import { PUTCH_DATA_LOGIN, PUTCH_FAILED_LOGIN, PUTCH_SUCCESS_LOGIN } from '../actions/EditProfile';
import { ESC_DATA_LOGIN, ESC_FAILED_LOGIN, ESC_SUCCESS_LOGIN } from '../actions/LoginEsc';
import { USER_DETAL_URL } from '../../utils/types';
import { initialState } from './Login';


describe('postLogin', () => {
  it('POST_DATA_LOGIN', () => {
    const action = {
      type: POST_DATA_LOGIN,
      text: "test",
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      postRequest: true,
      postFailed: false,
    })
  })
  it('GET_POST_SUCCESS_LOGIN', () => {
    const action = {
      type: GET_POST_SUCCESS_LOGIN,
      dataPost: {
        accessToken: 'test',
        refreshToken: 'test',
        success: true,
        user: {
          email: 'test',
          name: 'test',
        }
      },
      nameUser: 'test',
      emailUser: 'test',
      tokenAccess: 'test',
      tokenRefresh: 'test',
      postRequest: false,
      prevname: 'test',
      prevemail: 'test',
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      dataPost: action.dataPost,
      nameUser: action.dataPost.user.name,
      emailUser: action.dataPost.user.email,
      tokenAccess: action.dataPost.accessToken,
      tokenRefresh: action.dataPost.refreshToken,
      postRequest: false,
      prevname: action.dataPost.user.name,
      prevemail: action.dataPost.user.email,
    })
  })
  it('GET_FAILED_LOGIN', () => {
    const action = {
      type: GET_FAILED_LOGIN,
      postFailed: true,
      postRequest: false
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      postFailed: true,
      postRequest: false
    })
  })
  it('POST_DATA_TOKEN', () => {
    const action = {
      type: POST_DATA_TOKEN,
      text: "test",
      tokenRequest: true,
      tokenFailed: false,
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      tokenRequest: true,
      tokenFailed: false,
    })
  })
  it('GET_NEW_TOKEN', () => {
    const action = {
      type: GET_NEW_TOKEN,
      tokenAccess: 'test',
      tokenRequest: false,
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      tokenAccess: action.tokenAccess,
      tokenRequest: false,
    })
  })
  it('GET_FAILED_TOKEN', () => {
    const action = {
      type: GET_FAILED_TOKEN,
      text: "test",
      tokenFailed: true,
      tokenRequest: false,
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      tokenFailed: true,
      tokenRequest: false,
    })
  })
  it('PUTCH_DATA_LOGIN', () => {
    const action = {
      type: PUTCH_DATA_LOGIN,
      text: "test",
    }

    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
    })
  })
  it('PUTCH_SUCCESS_LOGIN', () => {
    const action = {
      type: PUTCH_SUCCESS_LOGIN,
      dataPatch: {
        accessToken: 'test',
        refreshToken: 'test',
        success: true,
        user: {
          email: 'test',
          name: 'test',
        }
      },
      nameUser: 'test',
      emailUser: 'test',
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      dataPatch: action.dataPatch,
      nameUser: action.dataPatch.user.name,
      emailUser: action.dataPatch.user.email,
    })
  })
  it('PUTCH_FAILED_LOGIN', () => {
    const action = {
      type: PUTCH_FAILED_LOGIN,
      text: "test",
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
    })
  })
  it('USER_PASSWORD', () => {
    const action = {
      type: USER_PASSWORD,
      password: 'test',
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      userPassword: action.password,
    })
  })
  it('ESC_DATA_LOGIN', () => {
    const action = {
      type: ESC_DATA_LOGIN,
      escRequest: true,
      escFailed: false,
      text: 'test',
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      escRequest: true,
      escFailed: false,
    })
  })
  it('ESC_SUCCESS_LOGIN', () => {
    const action = {
      type: ESC_SUCCESS_LOGIN,
      nameUser: '',
      tokenAccess: '',
      escRequest: false,
      dataPost: {},
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      nameUser: '',
      tokenAccess: '',
      escRequest: false,
      dataPost: {},
    })
  })
  it('ESC_FAILED_LOGIN', () => {
    const action = {
      type: ESC_FAILED_LOGIN,
      escFailed: true,
      escRequest: false
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      escFailed: true,
      escRequest: false
    })
  })
  it('USER_DETAL_URL', () => {
    const action = {
      type: USER_DETAL_URL,
      useParam: 'test',
    }
    expect(postLogin(initialState, action)).toEqual({
      ...initialState,
      useParam: action.useParam,
    })
  })
})