import * as types from "./types";

const initialState = {
  currentOffer: null,
  comments: []
};

export const offerReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.LOAD_OFFER:
      return {
        ...state,
        currentOffer: null,
      };

    case types.LOAD_COMMENTS:
      return {
        ...state,
        comments: payload
      };

    default:
      return state;
  }
};
