import React from 'react';
import createAbsoluteGrid from 'react-absolute-grid';
import Card from './Card';
import './Gallery.css'
import * as sampleData from './sampleData.js';

var data = sampleData.screens

// Pass your display component to create a new grid
const AbsoluteGrid = createAbsoluteGrid(Card, );

class Gallery extends React.Component {
  onFilter = (event) => {
    var search = new RegExp(event.target.value, 'i');
    data = data.map(function(item){
      //console.log(item.name, search)
      const isMatched = !item.name.match(search);
           if(!item.filtered || isMatched !== item.filtered) {
             console.log(isMatched)
             return {
               ...item,
               filtered: isMatched
             }
           }
           return item;

         });
  };
  render(){

    return (
      <div className="demo">
        <input placeholder='Filter eg: calendar' onChange={this.onFilter} type='text'/>
        <AbsoluteGrid items={data}
                               dragEnabled={false}
                               responsive={true}
                               verticalMargin={42}
                               itemWidth={400}
                               itemHeight={200}/>
      </div>

    )
  }
}

export default Gallery
