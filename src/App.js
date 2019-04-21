import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import { RouteWithSubRoutes } from './routes/RouteConfig';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<nav className="App-header">
			<Link to="/database"><i className="fas fa-database"></i></Link>
			<Link to="/logout"><i className="fas fa-user-circle"></i>Logout</Link>
		</nav>


		<Switch>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
		</Switch>
      </div>
    );
  }
}

export default App;
