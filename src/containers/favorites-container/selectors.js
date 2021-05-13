import { createSelector } from "reselect";

export const getFavoritesOffers = createSelector(
    (f) => f,
<<<<<<< HEAD
    ([offers]) => {
      return Array.from(offers).map(([city, cards]) => {
        return {
          city,
          offers: cards
=======
    (offers) => {
      return Array.from(offers).map(([city, cards]) => {
        return {
          city,
          offers: cards.filter((offer) => offer.isFavorite)
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
        };
      });
    }
);
