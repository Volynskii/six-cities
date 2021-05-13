import React, { Component } from "react";
import PropTypes from "prop-types";

import FavoritesFull from "../favorites-full/favorites-full.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";

import withPrivateRoute from "../../hocs/with-private/with-private.js";

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorite();
  }

  render() {
<<<<<<< HEAD
    const { favorite, setFavoriteAsync } = this.props;

=======
    const {favorite, setCity, setFavoriteAsync} = this.props;
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
    return (
      <>
        {favorite.length ? (
          <FavoritesFull
            key={favorite.size}
            favorite={favorite}
            setCity={setCity}
            setFavoriteAsync={setFavoriteAsync}
          />
        ) : (
          <FavoritesEmpty />
        )}
      </>
    );
  }
}

Favorites.propTypes = {
  favorite: PropTypes.array,
  getFavorite: PropTypes.func,
<<<<<<< HEAD
  setFavoriteAsync: PropTypes.func
=======
  setFavoriteAsync: PropTypes.func,
  setCity: PropTypes.func

>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
};

export default withPrivateRoute(Favorites);
