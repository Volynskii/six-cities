import React from "react";
import {connect} from "react-redux";
import Main from "../../components/main/main.jsx";
import {getData} from "../../redux/fetch/actions";
import {setCity} from "../../redux/hotels/actions";
import {getCityOffers, getCityCoords} from "./selectors";


export const MainContainer = (props) => {

  return <Main {...props} />;
};

const mapStateToProps = ({hotels, auth}) => {
  const {user} = auth;
  return {
    isAuthenticated: auth.isAuthenticated,
    isAuthorizationRequired: auth.isAuthorizationRequired,
    avatarUrl: user.avatarUrl,
    email: user.email,
    cities: hotels.cities,
    offers: getCityOffers([hotels.offers, hotels.city]),
    city: hotels.city,
    cityCoords: getCityCoords([hotels.locations, hotels.city])
  };
};

const mapDispatchToProps = {
  getData,
  setCity
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);