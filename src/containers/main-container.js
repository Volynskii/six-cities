import {connect} from "react-redux";
import Main from "../components/main/main.jsx";

import {fillLocations, fillOffers} from "../store/core/offers/actions";
import {createStore} from "redux";
import {off} from "leaflet/src/dom/DomEvent";

const mapStateToProps = ({offers}) => {
console.log(offers)
  return {
    locations: offers.locations,
    city: offers.city,
    cards: offers.cards
  };
};
const mapDispatchToProps = {
  fillLocations,
  fillOffers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
