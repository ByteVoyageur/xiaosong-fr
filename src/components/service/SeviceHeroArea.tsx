'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image'
import slider_img_1 from "@/assets/img/services/slider/services-slider-1.jpg";
import slider_img_2 from "@/assets/img/services/slider/services-slider-2.jpg";
import slider_img_3 from "@/assets/img/services/slider/services-slider-3.jpg";
import slider_img_4 from "@/assets/img/services/slider/services-slider-4.jpg";

import Slider from "react-slick";

interface DataType {
  subtitle: string;
  title: string;
  serrvice_list: {
      id: number;
      delay: string;
      title: string;
  }[];
  slider_images_1: StaticImageData[];
  slider_images_2: StaticImageData[];
}

const hero_content: DataType = {
  subtitle: "Services",
  title: "High Quality Projects",
  serrvice_list: [
    {
      id: 1,
      delay: ".3s",
      title: "Over 40 Websites Built With Envato"
    },
    {
      id: 2,
      delay: ".5s",
      title: "Visual Designer for 10+ years",
    },
    {
      id: 3,
      delay: ".7s",
      title: "UI/UX Designer, Envato",
    },
  ],
  slider_images_1: [
    slider_img_1, slider_img_2,
    slider_img_1, slider_img_2,
    slider_img_1, slider_img_2,
    slider_img_1, slider_img_2, 
  ],
  slider_images_2: [
    slider_img_3, slider_img_4,
    slider_img_3, slider_img_4,
    slider_img_3, slider_img_4,
    slider_img_3, slider_img_4, 
  ]
}

const { subtitle, title, serrvice_list, slider_images_1, slider_images_2 } = hero_content

const setting_1 = {
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesPerRow: 1,
  slidesToShow: 2,
  arrows: false,
  buttons: false,
  vertical: true,
  verticalSwiping: true,
  centerPadding: '120px',
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



const SeviceHeroArea = () => {
  return (
    <>
      <div className="sv-inner__slider-area black-bg-3 sv-inner__slider-plr">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="sv-inner__slider-content-main d-flex justify-content-xl-end justify-content-start">
                <div className="sv-inner__slider-content-wrap">
                  <div className="sv-inner__slider-title-box">
                    <span className="sv-inner__slider-subtitle tp_title_anim">{subtitle}</span>
                    <h4 className="sv-inner__slider-title tp_title_anim">{title}</h4>
                  </div>
                  <div className="sv-inner__service-list-wrap">
                    {serrvice_list.map((item, index) => (
                      <div key={index} className={`sv-inner__service-list list-${item.id} wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay={item.delay}>
                        <span>{item.title}</span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sv-inner__slider-main">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="sv-inner__slider-wrapper">
                      <Slider {...setting_1} className="sv-inner__slider-active-1">
                        {slider_images_1.map((item, index) => (
                          <div key={index} className="sv-inner__slider-item">
                            <Image src={item} alt="image-here" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="sv-inner__slider-wrapper">
                      <Slider {...setting_1} className="sv-inner__slider-active-2">
                        {slider_images_2.map((item, index) => (
                          <div key={index} className="sv-inner__slider-item">
                            <Image src={item} alt="image-here" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeviceHeroArea;