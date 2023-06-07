import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppActions, AppDispatch, RootState, TWSStoreActions } from '../utils/types';

export const socketMiddleware = (wsUrl: string, wsActions: TWSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: AppActions) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      const { postLogin } = getState();
      if (type === wsInit && postLogin) {
        if (postLogin)
          socket = new WebSocket(`${wsUrl}?token=${postLogin?.tokenAccess?.replace('Bearer ', '')}`);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, });
        }
        socket.onerror = event => {
          dispatch({ type: onError });
        };
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: onMessage, payload: JSON.parse(data) });
        };
        socket.onclose = event => {
          console.log(event);
          dispatch({ type: onClose, });
        };
      }
      next(action);
    };
  }) as Middleware;
};