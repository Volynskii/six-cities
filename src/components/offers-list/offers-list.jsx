import React from "react";
import PropTypes from "prop-types";

import Card from "../card/card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const OffersList = ({cards, activeItem, setActiveItem}) => {
  console.log(cards)
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((item, index) => {
        const isActive = activeItem === item.id;

        return (
          <Card
            key={index}
            // id={item.id}
            id={index + 1}
            title={item.title}
            image={item.image}
            type={item.type}
            price={item.price}
            currency={item.currency}
            rating={item.rating}
            isPremium={item.isPremium}
            isActive={isActive}
            setActiveItem={() => setActiveItem(item.id)}
          />
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  ),
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setActiveItem: PropTypes.func
};

export default withActiveItem(OffersList);
