import React, { Component } from 'react';
import logo from './logo.svg';
import Masonry from './Masonry'
import './App.css';


const Tile = ({src}) => {
  return (
    <div className="tile">
			<img src={src} />
		</div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="container">
				<div className="masonry-container">
					<p>ReactJS Responsive/Modular Masonry Grid.</p>
					<Masonry brakePoints={this.props.brakePoints}>
						{this.props.images.map((image, id) => {
							return (
								<Tile src={image} />
							)
						})}
					</Masonry>
				</div>
			</div>
    );
  }
}

export default App;
