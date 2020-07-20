import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.offersData,
      activeCard: null,
      lastclickedCard: null
    };
    this._onCardTitleClick = this._onCardTitleClick.bind(this);
    this._onCardHover = this._onCardHover.bind(this);
  }

  _onCardTitleClick(evt) {
    evt.preventDefault();
    const {target: element} = evt;
    this.setState({
      lastClickedCard: element.textContent
    });
  }

  _onCardHover(index) {
    this.setState({
      activeCard: index
    });
  }

  render() {
    const {cards} = this.state;
    return (
      <>
        <Header />
        <Main
          cards={cards}
          onCardTitleClick={this._onCardTitleClick}
          onCardHover={this._onCardHover}/>;
      </>
    );
  }
}

App.propTypes = {
  offersData: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  )
};
export default App;
