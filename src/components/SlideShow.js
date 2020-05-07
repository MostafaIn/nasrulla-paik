import React from 'react';
import { Zoom } from 'react-slideshow-image';

import { galary } from '../dummy-data/galary';

const images = galary.map(photo => [photo.photo]);

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slideshow = () => {
    // console.log(images);
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%", height:350}} src={each} alt="myPhoto" />)
        }
      </Zoom>
    )
}

export default Slideshow