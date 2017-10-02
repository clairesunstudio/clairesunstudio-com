import React, { Component } from 'react';
//import Gallery from './Gallery'
import Search from './Search'
import Card from './Card'
import './Home.css'
import * as sampleData from './sampleData.js';

import Shuffle from 'shufflejs';

// A very simple app with one component.
class Home extends React.Component {
  render() {
    return (
      <div className="home_gallery">
        <PhotoGrid />
      </div>
    );
  }
}

// Create the component which will use Shuffle.
class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    // Initialize with some "photos" that are cached (or none at all). Maybe you
    // have a service worker that cached the last API response and you can
    // use that here while waiting on a network request.
    const grayPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
    const blackPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    const greenPixel = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO02Vz4HwAE9AJhcLBN6AAAAABJRU5ErkJggg==';

    this.state = {
      photos: sampleData.screens
    };
  }


  /**
   * Fake and API request for a set of images.
   * @return {Promise<Object[]>} A promise which resolves with an array of objects.
   */
  _fetchPhotos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sampleData.screens);
      }, 300);
    });
  }

  /**
   * Resolve a promise when all the photos in an array have loaded.
   * @param {Object[]} photos Photos to load.
   * @return {Promise.<Object[]>} Loaded images.
   */
  _whenPhotosLoaded(photos) {
    return Promise.all(photos.map(photo => new Promise((resolve) => {
      const image = document.createElement('img');
      image.src = photo.src;

      if (image.naturalWidth > 0 || image.complete) {
        resolve(photo);
      } else {
        image.onload = () => {
          resolve(photo);
        };
      }
    })));
  }

  componentDidMount() {
    // The elements are in the DOM, initialize a shuffle instance.
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.photo-item',
      sizer: this.sizer,
    });

    // Kick off the network request and update the state once it returns.
    this._fetchPhotos()
      .then(this._whenPhotosLoaded.bind(this))
      .then((photos) => {
        this.setState({ photos });
      });
  }

  componentDidUpdate() {
    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    this.shuffle.resetItems();
  }

  componentWillUnmount() {
    // Dispose of shuffle when it will be removed from the DOM.
    this.shuffle.destroy();
    this.shuffle = null;
  }

  render() {
    return (
      <div ref={element => this.element = element} className="my-shuffle">
        {this.state.photos.map((image) => (
          <div key={image.id} className="col-xs-12 col-sm-6 col-md-3 photo-item">

            <Card item={image}/>
          
          </div>
        ))}
        <div ref={element => this.sizer = element} className="col-xs-12 col-sm-6 col-md-3 photo-item"></div>
      </div>
    );
  }
}

/**
 * A small badge with a link to the author of the photo's profile.
 * @param {{ username: string, name: string }} props Component props.
 * @return {JSX.Element}
 */
function PhotoAttribution({ username, name }) {
  if (!username) {
    return null;
  }

  const href = `https://unsplash.com/${username}?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge`;
  const title = `Download free do whatever you want high-resolution photos from ${name}`;
  return (
    <a className="photo-attribution" href={href} target="_blank" rel="noopener noreferrer" title={title}>
      <span>
        <svg viewBox="0 0 32 32">
          <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
        </svg>
      </span>
      <span>{name}</span>
    </a>
  );
}


export default Home;
