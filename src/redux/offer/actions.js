import * as types from "./types.js";
<<<<<<< HEAD
import { parseOffer } from "../../helpers/parse-offer.js";
import { parseComments } from "../../helpers/parse-comments.js";
import { modifyOffer } from "../../helpers/modify-offer.js";
=======
import {parseOffer} from "../../helpers/parse-offer.js";
import {parseComments} from "../../helpers/parse-comments.js";
import {modifyOffer} from "../../helpers/modify-offer.js";

export const sendReviewAsync = (hotelId, rating, comment) => (
    dispatch,
    _getState,
    api
) => {
  return api
    .post(`/comments/${hotelId}`, {rating, comment})
    .then((response) => {
      if (response.data) {
        dispatch(updateComments(response.data));
      }
    })
    .catch((error) => {
      const formError = (error.response && error.response.data) || {};
      dispatch(setReviewFormError(formError.error || error.message));
    });
};
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d

export const loadOffer = (id, hotels) => {
  const offer = parseOffer(id, hotels);

  return {
    type: types.LOAD_OFFER,
    payload: offer
  };
};

export const loadComments = (data) => {
  const comments = parseComments(data);

  return {
    type: types.LOAD_COMMENTS,
    payload: comments
  };
};

export const updateOffer = (offer) => {
  return {
    type: types.UPDATE_OFFER,
    payload: modifyOffer(offer)
  };
};
<<<<<<< HEAD
=======

export const updateComments = (data) => {
  const comments = parseComments(data);
  return {
    type: types.UPDATE_COMMENTS,
    payload: comments
  };
};

export const setReviewFormError = (error) => {
  return {
    type: types.SET_REVIEW_FORM_ERROR,
    payload: error
  };
};
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
