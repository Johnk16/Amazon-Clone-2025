import React from "react";
// import React, { useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        
      >
        {img.map((imageItemLink) => {
            
          return <img key={imageItemLink} src={imageItemLink} />;
        })}
      </Carousel>

      <div className={classes.hero__image}></div>
    </div>
  );
}

export default CarouselEffect