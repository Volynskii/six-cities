import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offersData from "./mocks/offers";
import locationsData from "./mocks/locations";


const init = (data, places) => {
  ReactDOM.render(
      <App locationsData={locationsData} offersData={data} />,
      document.querySelector(`#root`)
  );
};

init(offersData, locationsData);
