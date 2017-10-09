import React from 'react';
import Card from './Card';
import './Gallery.css';
import Shuffle from 'react-shuffle';

class Gallery extends React.Component{
	constructor(props){
		super(props);
	}
  render() {
		if(window.innerWidth>420){
			var marginLeft = window.innerWidth%370/2
			var itemStyle = {
				marginLeft: `${marginLeft}`
			};
			window.addEventListener("resize", ()=>{
				marginLeft = (window.innerWidth-marginLeft*2)%370/2
				console.log(window.innerWidth/370)
				itemStyle = {
					marginLeft: `${marginLeft}`
				};
			});
		}else{
			var itemStyle = {
				marginLeft: 0
			};
		}
    return (
      <div style={itemStyle} className="gallery">
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
