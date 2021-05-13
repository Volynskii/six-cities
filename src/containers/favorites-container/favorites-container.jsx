import React from "react";
import { connect } from "react-redux";

import Favorites from "../../components/favorites/favorites.jsx";

<<<<<<< HEAD
import { getFavorite, setFavoriteAsync } from "../../redux/fetch/actions.js";
import { getFavoritesOffers } from "./selectors";
=======
import {getFavorite, setFavoriteAsync} from "../../redux/fetch/actions.js";
import {setCity} from "../../redux/hotels/actions.js";
import {getFavoritesOffers} from "./selectors";
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d

export const FavoritesContainer = (props) => {
  return <Favorites {...props} />;
};

<<<<<<< HEAD
const mapStateToProps = ({ auth, hotels }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    favorite: getFavoritesOffers([hotels.favorite])
=======
const mapStateToProps = ({auth, hotels}) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    favorite: getFavoritesOffers(hotels.favorite)
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
  };
};

const mapDispatchToProps = {
  setCity,
  getFavorite,
  setFavoriteAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesContainer);
