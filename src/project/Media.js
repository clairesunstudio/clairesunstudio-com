import React, { Component } from 'react'
import Lightbox from 'react-images';
import { Col } from 'react-bootstrap'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './Media.css'

const VideoPlayer = ({ video }) => (
  <Col md={12}>
    <Video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
        <source src={video} type="video/mp4" />
    </Video>
  </Col>
)

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: props.features.concat(props.images).map(image => Object.assign({ src: image })),
      photo: 0
    };
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  render() {
    const { images, features, videos } = this.props;
    return (
      <div>
        <Col md={8} className="media">
          {videos.length>0 && <VideoPlayer video={videos[0]} />}
          {features.map((feature, i) => (
            <Col md={12} key={`feature_+${i}`}>
              <a href={feature.src} onClick={e => this.openLightbox(i, e)}>
                <img src={feature}/>
              </a>
            </Col>
          ))}
          {images.map((image, i) => (
            <Col md={6} key={`image_+${i}`}>
              <a href={image.src} onClick={e => this.openLightbox(i + features.length, e)}>
                <img src={image}/>
              </a>
            </Col>
          ))}
        </Col>
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </div>
    );
  }
}

export default Media
