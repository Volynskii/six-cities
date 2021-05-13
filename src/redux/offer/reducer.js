import * as types from "./types";

const initialState = {
  currentOffer: null,
<<<<<<< HEAD
  comments: []
=======
  comments: [],
  errors: {
    sendForm: null
  }
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
};

export const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_OFFER:
      return {
        ...state,
        currentOffer: payload
      };

    case types.LOAD_COMMENTS:
      return {
        ...state,
        comments: payload,
        errors: {
          ...state.errors,
          sendForm: null
        }
      };

    case types.UPDATE_OFFER:
      return {
        ...state,
        currentOffer: {
          ...state.currentOffer,
          isFavorite: !state.currentOffer.isFavorite
        }
      };
<<<<<<< HEAD

=======
    case types.UPDATE_COMMENTS:
      return {
        ...state,
        comments: payload,
        errors: {
          ...state.errors,
          sendForm: null
        }
      };
    case types.SET_REVIEW_FORM_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          sendForm: payload
        }
      };
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
    default:
      return state;
  }
};
