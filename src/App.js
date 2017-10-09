import React, { Component } from 'react';
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import _ from 'lodash'
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as projectData from './Data/projectData.js';

    class App extends Component {
      constructor(props) {
        super(props);
        const data = _.mapKeys(projectData[0][0].contents, "name")
        this.state = {
          data
        }
      }
      render() {
      //  console.log(this.state.data)
      const { data } = this.state
        return (
          <Router>
            <div className="wrapper">
              <Navigation />
                <Switch>
                  <Route path={`/about`} component={About}/>
                  <Route path={`/contact`} component={Contact}/>
                   <Route path={`/:projectId`} render={(props) => (
                    <Project {...props} projectData={data} />
                  )}/>
                  <Route path={`/`} component={Home}/>
                </Switch>
            </div>
          </Router>
        );
      }
    }


export default App;
