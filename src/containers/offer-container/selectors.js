import { createSelector } from "reselect";

export const getOfferNeighbourhoods = createSelector(
    (f) => f,
    ([offers, offer]) => {
      if (!offer) {
        return [];
      }
<<<<<<< HEAD
      return offers.get(offer.city).slice(0, 3) || [];
=======
      return (
        offers
          .get(offer.city)
          .filter((item) => item.id !== offer.id)
          .slice(0, 3) || []
      );
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
    }
);
