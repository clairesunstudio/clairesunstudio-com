import React from 'react';
import Card from './Card';
import './Gallery.css';
import Shuffle from './shuffle';

class Gallery extends React.Component{
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div className="gallery">
        <Shuffle duration={500} fade={false} scale={true}>
          {this.props.data.map(function(item, i){
            return (
              <div className="tile" key={item.url}><Card item={item}/></div>
            )
          })}
        </Shuffle>
      </div>
    )
  }
}

export default Gallery
