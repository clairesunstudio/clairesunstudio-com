import React from 'react';
import Card from './Card';
import './Gallery.css'
import Shuffle from 'react-shuffle';

class Gallery extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data,
			filtered: false
		}
	}
  filterChildren() {
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
      <div className="demo">
        <button onClick={() => this.filterChildren}>Filter</button>
        <Shuffle duration={300} fade={false}>
          {this.props.data.map(function(item, i){
            return (
              <div className="tile" key={`card${i}`}><Card item={item}/></div>
            )
          })}
        </Shuffle>
      </div>
    )
  }
}

export default Gallery
