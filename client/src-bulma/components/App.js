import React, { Component } from 'react';


// if hosting to github pages, add basename to Router, set value as the repo name
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../containers/Header';
import Signup from '../containers/auth/Signup';
import Signin from '../containers/auth/Signin';
import Settings from './Settings';
import About from './About';
import Home from '../containers/Home';
import Footer from './Footer';
import RequireAuth from '../containers/auth/RequireAuth';
import RequireUnauth from '../containers/auth/RequireUnauth';



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <main className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={RequireUnauth(Signin)} />
                <Route path="/signup" component={RequireUnauth(Signup)} />
                <Route path="/about" component={About} />
                <Route path="/settings" component={RequireAuth(Settings)} />
                <Route render={() => <p>Not found</p>} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </div>
      
    );
  }
}
