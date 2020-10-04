import React from "react";
import {connect} from "react-redux";

import SignIn from "../../components/sign-in/sign-in.jsx";

import {loginAsync} from "../../redux/auth/actions.js";

export const SignInContainer = (props) => {
  return <SignIn {...props} />;
};

const mapStateToProps = ({auth}) => {
  const {user} = auth;
  return {
    isAuthenticated: auth.isAuthenticated,
    isAuthorizationRequired: auth.isAuthorizationRequired,
    avatarUrl: user.avatarUrl,
    email: user.email,
    authError: auth.authError
  };
};
const mapDispatchToProps = {
  loginAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
