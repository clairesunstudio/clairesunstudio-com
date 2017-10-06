import React, { Component } from 'react';
import Gallery from './Gallery'
import Search from './Search'
import './Home.css'
import * as homeData from './homeData.js';
import _ from 'lodash'

    class Home extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: homeData
        };
      }

      onFilter = (event) => {
        const value = event.target.value
        var search = new RegExp(value, 'i');
        if(value){
          var data = this.state.data.map(function(item){
            const isMatched = item.name.match(search);
                 if(!item.filtered || isMatched !== item.filtered) {
                   return {
                     ...item,
                     filtered: isMatched
                   }
                 }
                 return item;
               });
              data = _.filter(data, 'filtered');
               this.setState({data: data})
        }else {
          this.setState({data: homeData})
        }

      };
      render() {
        return (
            <div className="home_gallery">
                <Search onFilter={this.onFilter} />
                <Gallery data={this.state.data}/>
            </div>
        );
      }
    }


export default Home;
