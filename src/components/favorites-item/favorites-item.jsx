import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import FavoritesCard from "../favorites-card/favorites-card.jsx";

<<<<<<< HEAD
const FavoritesItem = ({ city, offers, setFavoriteAsync }) => {
=======
const FavoritesItem = ({city, offers, setCity, setFavoriteAsync}) => {
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="/"
            onClick={() => setCity(city)}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item, index) => {
          return (
            <FavoritesCard
<<<<<<< HEAD
              key={index}
=======
              key={item.id}
              id={item.id}
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              type={item.type}
              isFavorite={item.isFavorite}
              setFavoriteAsync={() => setFavoriteAsync(item.id, 1)}
            />
          );
        })}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: PropTypes.array,
  city: PropTypes.string,
<<<<<<< HEAD
  setFavoriteAsync: PropTypes.func
=======
  setFavoriteAsync: PropTypes.func,
  setCity: PropTypes.func
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
};

export default FavoritesItem;
