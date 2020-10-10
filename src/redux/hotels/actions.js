import * as types from "./types.js";
import {parseLocations} from "../../helpers/parse-locations";
import {parseOffers} from "../../helpers/parse-offers";
import {parseCities} from "../../helpers/parse-cities";
import {modifyOffer} from "../../helpers/modify-offer.js";

export const loadHotels = (hotels) => {
  const cities = parseCities(hotels);
  const locations = parseLocations(cities, hotels);
  const offers = parseOffers(cities, hotels);

  return {
    type: types.GET_HOTELS,
    payload: {cities, locations, offers}
  };
};

export const setCity = (city) => {
  return {
    type: types.SET_CITY,
    payload: city
  };
};

export const updateOffers = (offer) => {
  return {
    type: types.UPDATE_OFFERS,
    payload: modifyOffer(offer)
  };
};
