import React, { Component } from 'react';
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }
      render() {
        return (
          <Router>
            <div className="wrapper">
              <Header />
                <Switch>
                  <Route path={`/about`} component={About}/>
                  <Route path={`/contact`} component={Contact}/>
                   <Route path={`/:projectId`} component={Project}/>
                  <Route path={`/`} component={Home}/>
                </Switch>
            </div>
          </Router>
        );
      }
    }


export default App;
