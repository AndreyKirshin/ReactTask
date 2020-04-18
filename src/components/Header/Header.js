import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';

const Header = ({ name }) => (
  <Fragment>
    <h2 className="h3">{name}</h2>
    <Nav>
      <NavItem>
        <Link className={'nav-link'} to='/'>Home</Link>
      </NavItem>      
      <NavItem>
        <Link className={'nav-link'} to='/create'>Create Product</Link>
      </NavItem>
    </Nav>
    <hr/>
  </Fragment>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
