import React, { Component } from 'react';
import Header from './Header'
import Gallery from './Gallery'
import Search from './Search'
import './App.css';
//import axios from 'axios'
import * as sampleData from './sampleData.js';


var data = sampleData.screens
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: sampleData.screens
        };
      }

      onFilter = (event) => {
        var search = new RegExp(event.target.value, 'i');
        data = data.map(function(item){
          const isMatched = !item.name.match(search);
               if(!item.filtered || isMatched !== item.filtered) {
                 return {
                   ...item,
                   filtered: isMatched
                 }
               }
               return item;

             });
             this.setState({data})
      };
      render() {
        return (
          <div>
            <Header />
            <div>
                <Search onFilter={this.onFilter} />
                <Gallery data={this.state.data}/>
            </div>
          </div>
        );
      }
    }


export default App;
