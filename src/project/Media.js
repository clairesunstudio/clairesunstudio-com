import React from 'react'
import { Col } from 'react-bootstrap'
import './Media.css'


const Media = ({images}) => {
  console.log(images)
  const imageList = images.map((image, i) => (
    <Col md={6} key={`image_+${i}`}><img src={images[i]}/></Col>
  ))
    return (
      <Col md={8} className="media">
        {imageList}
      </Col>
    );
}

export default Media
