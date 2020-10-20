import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) =>
<header>
	<h1>Expensify</h1>
  <NavLink className="NavLink" activeClassName="is-active" to="/dashboard">
    Dashboard
  </NavLink>
  <NavLink className="NavLink" activeClassName="is-active" to="/create">
    Add Expense
  </NavLink>
  <button onClick={startLogout}>Logout</button>
</header>;

const mapDispatch = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatch)(Header);
