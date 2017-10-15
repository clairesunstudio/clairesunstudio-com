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
          filterValue: 'all'
        };
      }

      onSearch = (event) => {
        const value = event.target.value
        var search = new RegExp(value, 'i');
        if(value){
          var data = this.state.data.map((item) => {
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
          var displayedCategories = this.state.data.filter((el) => {
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
          let newData = homeData.filter((data,index) => {
            if (data.category.indexOf(filterValue) !== -1) {
              return data
            }
          });
          this.setState({
            data: newData,
            filterValue
          });
      }
      resetFilter(e){
        this.setState({ data: homeData, filterValue: 'all' })
      }
      render() {
        const { data, filterValue } = this.state
        const { selectCategory, onFilter, resetFilter, onSearch } = this
        return (
            <div className="home_gallery">
            <div className="controls container">
              <div className="row">
                <Col md={10}>
                <FilterPanel data={data} filterValue={filterValue} selectCategory={selectCategory.bind(this)} onFilter={onFilter.bind(this)} resetFilter={resetFilter.bind(this)}/>
                </Col>
                <Col md={2}>
                <Search onSearch={onSearch} />
                </Col>
                </div>
            </div>
                <Gallery data={data}/>
            </div>
        );
      }
    }


export default Home;
