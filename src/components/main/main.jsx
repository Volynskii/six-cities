import React, {Component} from "react";
import PropTypes from "prop-types";

import Header from "../header/header.jsx";
import TabsList from "../tabs-list/tabs-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Form from "../form/form.jsx";
import Map from "../map/map.jsx";
import Footer from "../footer/footer.jsx";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";

class Main extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      email,
      avatarUrl,
      city,
      isAuthenticated,
      cityCoords,
      cities,
      offers,
      setCity
    } = this.props;

    if (!offers.length || !cities.length) {
      return `Загрузка...`;
    }

    return (
      <>
        <SvgSprite />
        <Header
          email={email}
          avatarUrl={avatarUrl}
          isAuthenticated={isAuthenticated}
        />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <TabsList tabs={cities} city={city} setCity={setCity} />
          <div className="cities__places-wrapper">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${
                  offers.length
                } places to stay in ${city}`}</b>
                <Form />
                <OffersList cards={offers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map  map--main">
                  <Map
                    cards={offers}
                    city={[cityCoords.latitude, cityCoords.longitude]}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        type: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string,
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  ),
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  cityCoords: PropTypes.object,
  getData: PropTypes.func,
  setCity: PropTypes.func
};

export default Main;
