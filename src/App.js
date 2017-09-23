import React, { Component } from 'react';
import logo from './logo.svg';
import Gallery from './Gallery'
import './App.css';
import axios from 'axios'

    class App extends Component {
      // constructor(props) {
      //   super(props);
      //   this.state = {
      //     imgId: []
      //   };
      // }
      // componentWillMount = () =>  {
      //   this.fetchImages()
      // };
      // fetchImages = () =>  {
      //   const _this = this
      //     axios.get('images')
      //       .then(function (response) {
      //         const imgId = response.data
      //         _this.setState({imgId})
      //       })
      //     .catch((error) => {console.log(error)})
      // };
      render() {
        // const {imgId} = this.state
        // let brakePoints = [350, 500, 750];
        // let images = [];
        // for(let i = 0; i< imgId.length; i++){
        // 	images.push("images/" + imgId[i]);
        // }
        return (
          <div className="container">
              <Gallery />
    			</div>
        );
      }
    }


export default App;
