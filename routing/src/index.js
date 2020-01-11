import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import notFound from './404';
import * as serviceWorker from './serviceWorker';

/* url localhost:3000/users/1
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Users">Users</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Users/:id" component={Users} />
        <Route path="/Contact" component={Contact} />
        <Route component={notFound} />
      </Switch>
    </div>
  </Router>
); */

// NavLink
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Users" component={Users} />
        <Route path="/Contact" component={Contact} />
        <Route component={notFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
