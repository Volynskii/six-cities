import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const PATH_SIGN_IN = `/login`;

const withPrivateRoute = (Component) => {
  class WithPrivate extends PureComponent {
    render() {
<<<<<<< HEAD
      const { isAuthenticated } = this.props;
=======
      const {
        isAuthenticated,
        match: {url}
      } = this.props;
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d

      if (!isAuthenticated) {
        return <Redirect to="/login" />;
      }

      if (isAuthenticated && url === PATH_SIGN_IN) {
        return <Redirect to="/" />;
      }

      return <Component {...this.props} />;
    }
  }

  WithPrivate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
  };

  return WithPrivate;

};


export default withPrivateRoute;
