import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/layout/layout.jsx";
import { getData } from "../../redux/fetch/actions";
import { checkLoginAsync } from "../../redux/auth/actions";

export const LayoutContainer = (props) => {
  return <Layout {...props} />;
};

<<<<<<< HEAD
const mapStateToProps = ({ auth, router, hotels }) => {
=======
const mapStateToProps = ({auth, router, hotels}) => {
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    location: router.location,
    offers: hotels.offers
  };
};

const mapDispatchToProps = {
  checkLoginAsync,
  getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutContainer);
