import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {store} from "./store";
import offersData from "./mocks/offers";
import locationsData from "./mocks/locations";
import {compose} from "redux";

const init = (data, locations) => {
  ReactDOM.render(
      <Provider store={store}>
        <App locationsData={locations} offersData={data} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(offersData, locationsData);
