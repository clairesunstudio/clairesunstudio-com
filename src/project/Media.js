import React from 'react'
import { Col } from 'react-bootstrap'
import './Media.css'


const Media = ({images, features}) => {
  console.log(images)
  const imageList = images.map((image, i) => (
    <Col md={6} key={`image_+${i}`}><img src={images[i]}/></Col>
  ))
  const featureList = features.map((feature, i) => (
    <Col md={12} key={`feature_+${i}`}><img src={features[i]}/></Col>
  ))
    return (
      <Col md={8} className="media">
        {featureList}
        {imageList}
      </Col>
    );
}

export default Media
