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
          data: homeData,
          filtered: false
        };
      }

      onSearch = (event) => {
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
      onFilter() {
        if (this.state.filtered === false) {
          let newData = this.state.data.filter(function(data,index){
            if (index % 2 ===0) {
              return data
            }
          });
          this.setState({
            data: newData,
            filtered: true
          });
        } else {
          this.setState({
            data: this.props.data,
            filtered: false
          });
        }
      }
      render() {
        return (
            <div className="home_gallery">
                <Search onSearch={this.onSearch} />
                <button onClick={this.onFilter.bind(this)}>Filter</button>
                <Gallery data={this.state.data}/>
            </div>
        );
      }
    }


export default Home;
