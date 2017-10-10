import React, { Component } from 'react';
import Gallery from './Gallery'
import Search from './Search'
import './Home.css'
import * as homeData from './Data/homeData.js';
import _ from 'lodash'
import FilterPanel from './FilterPanel'
import { Col } from 'react-bootstrap'

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

      }
      selectCategory(element){
          var categoryName = element;
        console.log('category is: '+ categoryName);
                    var displayedCategories = this.state.data.filter(function(el) {

                        var searchValue = el.category;
                        return searchValue.indexOf(categoryName) !== -1;
                        console.log(searchValue);
                    });

                    this.setState({
                        displayedCategories

                    });

      }
      onFilter(e) {
        const filterValue = e.target.getAttribute('value')
        if (this.state.filtered === false) {
          let newData = homeData.filter(function(data,index){
            if (data.category.indexOf(filterValue) !== -1) {
              return data
            }
          });
          this.setState({
            data: newData,
            filtered: true
          });
        } else {
          this.setState({
            data: homeData,
            filtered: false
          });
        }
      }
      resetFilter(e){
        console.log('clear')
      this.setState({ data: homeData })
      }
      render() {
        //console.log(this.state.data)
        return (
            <div className="home_gallery">
            <div className="controls container">
              <div className="row">
                <Col md={10}>
                <FilterPanel data={this.state.data} selectCategory={this.selectCategory.bind(this)} onFilter={this.onFilter.bind(this)} resetFilter={this.resetFilter.bind(this)}/>
                </Col>
                <Col md={2}>
                <Search onSearch={this.onSearch} />
                </Col>
                </div>
            </div>
                <Gallery data={this.state.data}/>
            </div>
        );
      }
    }


export default Home;
