
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import React, { useEffect } from 'react';

import imageA from './a.jpg';
import imageB from './b.jpg';
import imageC from './e.jpg';
import imageD from './d.jpg';

const Photos = () => {
  return (
    <section className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div>
          <img src={imageA} alt="Birthday" />
        </div>
        <div>
          <img src={imageB} alt="Celebration" />
        </div>
        <div>
          <img src={imageC} alt="Celebration" />
        </div>
        <div>
          <img src={imageD} alt="Celebration" />
        </div>
      </Carousel>
    </section>
  );
};

export default Photos;
