'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import React, { useEffect } from 'react';
import slider_img_1 from "@/assets/img/portfolio/port-inner-1.jpg";
import slider_img_2 from "@/assets/img/portfolio/port-inner-2.jpg";
import slider_img_3 from "@/assets/img/portfolio/port-inner-3.jpg";

const slider_images = [
  slider_img_1, slider_img_2, slider_img_3,
  slider_img_1, slider_img_2, slider_img_3,
];

const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  // centerMode: true,
  // cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  // variableWidth: true,
  // infinite: true,
  // initialSlide: 1,
  // arrows: false,
  // buttons: false,
  focusOnSelect: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    }
  ]
}



const PortfolioSlider = () => {
  return (
    <>
      <div className="porfolio-inner__slider-area porfolio-inner__ptb black-bg-3 p-relative fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="porfolio-inner__overlay">
                <div className="porfolio-inner__text-1">
                  <h4 className="porfolio-inner__slider-title tp_title_anim">
                    Award-Winning Projects <br /> Design & Dev.
                  </h4>
                </div>
                <Slider {...setting} className="porfolio-inner__slider-active">
                  {slider_images.map((item, index) => (
                    <div key={index} className="porfolio-inner__thumb">
                      <Image src={item} style={{ height: 'auto' }} alt="image-here" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;