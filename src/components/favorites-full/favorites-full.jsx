import React from "react";
import PropTypes from "prop-types";

import FavoritesItem from "../favorites-item/favorites-item.jsx";

<<<<<<< HEAD
const FavoritesFull = ({ favorite, setFavoriteAsync }) => {
=======
const FavoritesFull = ({favorite, setCity, setFavoriteAsync}) => {
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favorite.map((item) => {
              return (
                <FavoritesItem
                  key={item.city}
                  city={item.city}
                  offers={item.offers}
                  setCity={setCity}
                  setFavoriteAsync={setFavoriteAsync}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesFull.propTypes = {
  favorite: PropTypes.array,
<<<<<<< HEAD
  setFavoriteAsync: PropTypes.func
=======
  setFavoriteAsync: PropTypes.func,
  setCity: PropTypes.func
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
};

export default FavoritesFull;
