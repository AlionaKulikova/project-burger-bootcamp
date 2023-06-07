import { wsReducer } from '../reducers/WsReduser';
import { initialState } from './WsReduser';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    ADD_DATA_ORDER
} from '../../utils/types';

import {
    WS_USER_CONNECTION_SUCCESS,
    WS_USER_CONNECTION_ERROR,
    WS_USER_CONNECTION_CLOSED,
    WS_USER_GET_MESSAGE,
} from '../../utils/types';

describe('wsReducer', () => {
    it('WS_CONNECTION_START', () => {
        const action = {
            type: WS_CONNECTION_START,
            error: undefined,
            wsConnected: true,
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: true,
        })
    })
    it('WS_CONNECTION_SUCCESS', () => {
        const action = {
            type: WS_CONNECTION_SUCCESS,
            error: undefined,
            wsConnected: true,
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: true,
        })
    })
    it('WS_CONNECTION_ERROR', () => {
        const action = {
            type: WS_CONNECTION_ERROR,
            wsConnected: false,
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            wsConnected: false,
        })
    })
    it('WS_CONNECTION_CLOSED', () => {
        const action = {
            type: WS_CONNECTION_CLOSED,
            error: undefined,
            wsConnected: false
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: false
        })
    })
    it('WS_GET_MESSAGED', () => {
        const action = {
            type: WS_GET_MESSAGE,
            payload: {
                orders: [],
                success: true,
                total: 1,
                totalToday: 1,
            },
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            orders: action.payload,
        })
    })
    it('ADD_DATA_ORDER', () => {
        const action = {
            type: ADD_DATA_ORDER,
            targetOrderId: {
                createdAt: "string",
                ingredients: ["test"],
                name: "string",
                number: 1,
                status: "string",
                updatedAt: "string",
                _id: "string",
            },
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            targetOrderId: action.targetOrderId,
        })
    })
    it('WS_USER_CONNECTION_SUCCESS', () => {
        const action = {
            type: WS_USER_CONNECTION_SUCCESS,
            error: undefined,
            wsConnected: true,
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: true,
        })
    })
    it('WS_USER_CONNECTION_ERROR', () => {
        const action = {
            type: WS_USER_CONNECTION_ERROR,

            wsConnected: false,
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            wsConnected: false,
        })
    })
    it('WS_USER_CONNECTION_CLOSED', () => {
        const action = {
            type: WS_USER_CONNECTION_CLOSED,
            error: undefined,
            wsConnected: false
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: false
        })
    })
    it('WS_USER_GET_MESSAGED', () => {
        const action = {
            type: WS_USER_GET_MESSAGE,
            payload: {
                orders: [],
                success: true,
                total: 1,
                totalToday: 1,
            },
        }
        expect(wsReducer(initialState, action)).toEqual({
            ...initialState,
            error: undefined,
            user: action.payload,
        })
    })
})