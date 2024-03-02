'use client'
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";

import smile from '@/assets/img/marquee/smile.svg';
import stroke from '@/assets/img/marquee/stroke.svg';

const marquee_data = [
  { text: 'Selected Work (2023)', img: smile },
  { text: 'Diego Template', img: stroke },
  { text: 'Selected Work (2023)', img: smile },
  { text: 'Diego Template', img: stroke },
  { text: 'Selected Work (2023)', img: smile },
  { text: 'Diego Template', img: stroke },
]

const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  focusOnSelect: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      }
    },
    {
      breakpoint: 992,
      settings: {
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const MarqueeAreaHomeOne = () => {
  return (
    <>
      <div className="tp-marquee-area z-index-5">
        <div className="tp-marquee-wrapper">
          <div className="tp-marquee-slider fix">
            <Slider {...setting} className="tp-marquee-slider-active d-flex align-items-center ">
              {marquee_data.map((item, index) => (
                <div key={index} className="tp-marquee-item">
                  <p>{item.text} <Image src={item.img} alt="image" /></p>
                </div>
              ))}
            </Slider>

          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeAreaHomeOne;