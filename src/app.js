import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize-css/normalize.css';

const expenseDashboardPage = () =>
<div>
	This is from dashboard component
</div>

const addExpensePage = () =>
<div>
	This is from add expense component
</div>

const editExpensePage = () =>
<div>
	This is from edit expense component
</div>

const helpPage = () =>
<div>
	help: to add expense /create
	      to edit expense /edit
				for help /help
</div>

const nowherePage = () =>
<div>
	hmmm ... 404! ... <Link to="/">Go Back</Link>
</div>

const Header = () => 
<header>
	<h1>Expensify</h1>
	<NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
	<NavLink activeClassName="is-active" to="/create">Add</NavLink>
	<NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
	<NavLink activeClassName="is-active" to="/help">Help</NavLink>
</header>

const routes = 
  <Router>
		<div>
			<Header />
			<Switch>
			<Route path="/" component={expenseDashboardPage} exact={true}/>
				<Route path="/create" component={addExpensePage}/>
				<Route path="/edit" component={editExpensePage}/>
				<Route path="/help" component={helpPage}/>
				<Route component={nowherePage}/>
			</Switch>
		</div>
  </Router>

ReactDOM.render (routes, document.getElementById('app'));