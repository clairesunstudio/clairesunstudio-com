import React, { Component } from 'react';
import logo from './logo.svg';
import Masonry from './Masonry'
import './App.css';
import axios from 'axios'

const Tile = ({src}) => {
  return (
    <div className="tile">
			<img src={src} />
		</div>
  );
};

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          imgId: []
        };
      }
      componentWillMount = () =>  {
        this.fetchImages()
      };
      fetchImages = () =>  {
        const _this = this
          axios.get('images')
            .then(function (response) {
              const imgId = response.data
              _this.setState({imgId})
            })
          .catch((error) => {console.log(error)})
      };
      render() {
        const {imgId} = this.state
        let brakePoints = [350, 500, 750];
        let images = [];
        for(let i = 0; i< imgId.length; i++){
        	images.push("images/" + imgId[i]);
        }
        return (
          <div className="container">
    				<div className="masonry-container">
    					<p>ReactJS Responsive/Modular Masonry Grid.</p>
    					<Masonry brakePoints={brakePoints}>
    						{images.map((image, id) => {
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
