import React from 'react'
import { Col } from 'react-bootstrap'
import './Media.css'
import axios from 'axios'
import _ from 'lodash'
import { api_key } from '../App'


class Media extends React.Component{
  constructor(props) {
    super(props);
    const projectFolderId = this.props.mediaFolderId
    const url = `https://www.googleapis.com/drive/v3/files?q='${projectFolderId}'+in+parents&key=${api_key}`;
    this.state = {
      fileNameList: null,
      url
    }
  }
  componentWillMount = () =>  {
    this.fetchImages()
  };
  fetchImages = () =>  {
    const _this = this
    const { url } = _this.state
      axios.all([
        axios.get(url),
      ])
      .then(axios.spread(function(google) {
          const fileList = google.data
          console.log(fileList)
          //const fileNameList = _.mapKeys(fileList, "name")
          //_this.setState({fileNameList})
        }))
      .catch((error) => {console.log(error)})
  };
  render() {
    // console.log(images)
    // const imageList = images.map((image, i) => (
    //   <Col md={6} key={`image_+${i}`}><img src={images[i]}/></Col>
    // ))
    // const featureList = features.map((feature, i) => (
    //   <Col md={12} key={`feature_+${i}`}><img src={features[i]}/></Col>
    // ))
  return (
    <Col md={8} className="media">
    </Col>
  );
  }
}

export default Media
