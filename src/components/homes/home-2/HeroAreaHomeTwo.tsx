
import React from 'react';
import Image from 'next/image';
import hero_img_1 from "@/assets/img/hero/2/hero-stroke-text.png";
import hero_img_2 from "@/assets/img/hero/hero-2-img.png";
import HeroShapeHomeTwo from '@/svg/home-2/HeroShapeHomeTwo';

const HeroAreaHomeTwo = () => {
  return (
    <>

      <div className="section">
        <div className="tp-mouse-move-section tp-hero-2__bg black-bg-3 tp-hero-2__space-1 d-flex align-items-end justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper">
            <span className="tp-hero-2__circle-1 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-2 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-3 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-4 tp-mouse-move-element"></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-content-2">
                  <h3 className="tp-hero-title-2 text-center tp-char-animation">
                    User Interface
                    <br />
                    <span className="stroke-text d-flex align-items-end justify-content-center">
                      <Image src={hero_img_1} alt="image-here" />
                      <span className="location-text d-flex align-items-end text-start d-none d-lg-flex">
                        <span className="d-none d-md-block">based <i className="fa-sharp fa-solid fa-heart"></i>
                          <br /> in Nevada, USA</span>
                      </span>
                    </span>
                  </h3>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__thumb-wrap p-relative text-center">
                  <div className="tp-hero-2__thumb z-index-5">
                    <Image className="tp-mouse-move-element" src={hero_img_2} style={{height: 'auto'}} alt="image-here" />
                  </div>
                  <div className="tp-hero-2__thumb-shape d-none d-md-block">
                    <span>
                      <HeroShapeHomeTwo /> 
                    </span>
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

export default HeroAreaHomeTwo;