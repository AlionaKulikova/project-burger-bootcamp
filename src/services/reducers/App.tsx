import { GET_FEED, GET_FAILED, GET_FEED_SUCCESS } from "../actions/App";
import { AppActions } from "../../utils/types";


export interface IData {
  feedRequest: boolean,
  feedFailed: boolean,
  feed: null | [] | {},
};

const initialState: IData = {
  feedRequest: false,
  feedFailed: false,
  feed: [],
};

export const dataReducer = (state = initialState, action: AppActions): IData => {
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