import { GET_FEED, GET_FAILED, GET_FEED_SUCCESS } from "../actions/App.js";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  feed: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      };
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        feed: action.feed,
        board: action.board,
        feedRequest: false,
      };
    }
    case GET_FAILED: {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};