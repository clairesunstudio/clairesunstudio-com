import React from 'react'
import { Col } from 'react-bootstrap'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './Media.css'


const Media = ({images, features, videos}) => {
  const imageList = images.map((image, i) => (
    <Col md={6} key={`image_+${i}`}><img src={images[i]}/></Col>
  ))
  const featureList = features.map((feature, i) => (
    <Col md={12} key={`feature_+${i}`}><img src={features[i]}/></Col>
  ))

  class VideoPlayer extends React.Component {
    render() {
      return(
        <Col md={12}>
        <Video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
            <source src={videos[0]} type="video/mp4" />
        </Video>
        </Col>
      )
    }
  }

    return (
      <Col md={8} className="media">
        {videos.length>0 ? <VideoPlayer/> : null}
        {featureList}
        {imageList}
      </Col>
    );
}

export default Media
