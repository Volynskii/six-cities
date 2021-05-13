import React from "react";
import {connect} from "react-redux";

import Offer from "../../components/offer/offer.jsx";
<<<<<<< HEAD
import {
  getOffer,
  getComments,
  setFavoriteAsync
} from "../../redux/fetch/actions";
=======
import {getOffer,
  getComments,
  setFavoriteAsync
} from "../../redux/fetch/actions";
import {sendReviewAsync} from "../../redux/offer/actions";
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
import {getOfferNeighbourhoods} from "./selectors.js";

export const OfferContainer = (props) => {
  return <Offer {...props} />;
};

const mapStateToProps = ({offer, hotels, auth}) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    offer: offer.currentOffer,
    offers: getOfferNeighbourhoods([hotels.offers, offer.currentOffer]),
<<<<<<< HEAD
    comments: offer.comments
=======
    comments: offer.comments,
    sendFormError: offer.errors.sendForm
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
  };
};

const mapDispatchToProps = {
  getOffer,
  getComments,
<<<<<<< HEAD
  setFavoriteAsync
=======
  setFavoriteAsync,
  sendReviewAsync
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferContainer);
