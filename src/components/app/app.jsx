import React, {Component} from "react";
import Header from "../header/header.jsx";
import MainContainer from "../../containers/main-container.js";

class App extends Component {


  render() {
    const {sample, sampleTwo} = this.props;
    console.log(this.props);
    return (
      <>
        <Header />
        <MainContainer />
      </>
    );
  }
}

export default App;
