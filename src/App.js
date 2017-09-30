import React, { Component } from 'react';
import Navigation from './Navigation'
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
import axios from 'axios'
import _ from 'lodash'

export const api_key = 'AIzaSyAmfapkMCz0yqdNRG1lUNSWErt6Ir_WTTI';
var folderId = '0B5Upqv95GKbfVzRpMENZLUo1U1k';
const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${api_key}`;

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          fileList: null
        }
      }
      componentWillMount = () =>  {
        this.fetchFolders()
      };
      fetchFolders = () =>  {
        const _this = this
          axios.all([
            axios.get(url),
          ])
          .then(axios.spread(function(google) {
              const fileList = google.data.files
              _this.setState({fileList})
            }))
          .catch((error) => {console.log(error)})
      };
      render() {
        const {fileList} = this.state
        if(!fileList) {
          return <div className="container">Loading...</div>
        }
        const fileNameList = _.mapKeys(fileList, "name")
        return (
          <Router>
            <div className="wrapper">
              <Navigation />
                <Switch>
                  <Route path={`/about`} component={About}/>
                  <Route path={`/contact`} component={Contact}/>
                     <Route exact path={`/:projectId`} render={(props) => (
                        <Project {...props} fileNameList={fileNameList} />
                      )}/>
                  <Route path={`/`} component={Home}/>
                </Switch>
            </div>
          </Router>
        );
      }
    }


export default App;
