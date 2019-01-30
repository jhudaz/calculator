import React, { Component } from 'react';
import Calculator from './containers/calculator';
import Index from './containers/index';
import CalculatorResults from './containers/calculator-results'; 
import GitProfile from './containers/git-profile';
import ConsumeApi from './containers/consume-api';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <nav className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator/">Calculator</Link>
              </li>
              <li>
                <Link to="/calculator-results/">Calculator results</Link>
              </li>
              <li>
                <Link to="/git-profile/">Git profile</Link>
              </li>
              <li>
                <Link to="/consume-api/">Consume API</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/calculator/" component={Calculator} />
          <Route path="/calculator-results/" component={CalculatorResults} />
          <Route path="/git-profile/" component={GitProfile} />
          <Route path="/consume-api/" component={ConsumeApi} />
        </div>

      </Router>

    );
  }
}

export default App;
