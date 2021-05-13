<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, {Component} from "react";
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
import PropTypes from "prop-types";
import cn from "classnames";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";

class Layout extends Component {
  componentDidMount() {
    this.props.checkLoginAsync();
    this.props.getData();
  }

  render() {
<<<<<<< HEAD
    const { children, offers, location, isAuthenticated, user } = this.props;
=======
    const {children, offers, location, isAuthenticated, user} = this.props;
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
    const isLoginPage = location.pathname === `/login`;

    if (!offers) {
      return `Загрузка...`;
    }
<<<<<<< HEAD

=======
>>>>>>> 58498a99d3483bef44b8cae14bac447a51bc239d
    return (
      <div className={cn(`page page--gray`, {[`page--login`]: isLoginPage})}>
        <SvgSprite />
        <Header isAuthenticated={isAuthenticated} user={user} />
        {children}
        {!isLoginPage && <Footer />}
      </div>
    );
  }
}

Layout.propTypes = {
  offers: PropTypes.instanceOf(Map),
  children: PropTypes.node,
  location: PropTypes.object,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  getData: PropTypes.func,
  checkLoginAsync: PropTypes.func
};

export default Layout;
