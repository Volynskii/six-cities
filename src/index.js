import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import PropTypes from 'prop-types';



const init = () => {
  ReactDOM.render(<App />, document.querySelector(`#root`));
};

init();
