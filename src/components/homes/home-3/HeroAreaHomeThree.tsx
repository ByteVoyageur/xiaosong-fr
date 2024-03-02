'use client'
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import hero_shape_1 from "@/assets/img/hero/hero-shape-2-1.png";
import hero_shape_2 from "@/assets/img/hero/hero-shape-2-2.png";
import { HeroSocialLinksHomeThree } from '@/components/common/SocialLinks';
import { scroller } from 'react-scroll';
 

const scrollTo = () => {
  scroller.scrollTo('service', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};


const HeroAreaHomeThree = () => {


  return (
    <>
      <div className="tp-hero-3__area black-bg-3 tp-hero-3__ptb z-index-1 smooth p-relative tp-btn-trigger-3">

        <div className="tp-hero-3__shape-1">
          <Image src={hero_shape_1} alt="image-here" />
        </div>
        <div className="tp-hero-3__shape-2">
          <Image src={hero_shape_2} alt="image-here" />
        </div>

        <div className="tp-isomeric-grid d-none">
          <div className="tp-isomeric-grid-item tp-isomeric-grid-horizontal">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="tp-isomeric-grid-item tp-isomeric-grid-vertical">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="tp-hero-3__social-wrap d-none d-lg-inline-flex">
          <HeroSocialLinksHomeThree />
        </div>
        <a onClick={scrollTo} className="pointer">
          <div className="tp-hero-3__scrool-down d-none d-lg-inline-flex">
            <span className="text">Scroll</span>
            <span>
              <svg width="14" height="93" viewBox="0 0 14 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 85.8995C10.1308 85.8995 6.9999 88.9319 6.9999 92.6793" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M7 92.6793C7 88.9319 3.86911 85.8995 -0.000102413 85.8995" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M7 0L7 90" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
              </svg>
            </span>
          </div>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-hero-3__content">
                <h3 className="tp-hero-3__title tp-char-animation">
                  Creative{" "}
                  <span>
                    <video
                      id="myVideo"
                      autoPlay
                      loop
                      playsInline
                      muted
                      src="https://template.wphix.com/video/diego-video.mp4"
                    >
                    </video>
                  </span> <br />
                  Visual Designer
                </h3>
              </div>
              <div className="tp-hero-3__btn-box tp_wrap_anim d-flex align-items-center justify-content-start justify-content-md-center">
                <div className="tp-btn-bounce-3">
                  <Link className="tp-btn-blue" href="/portfolio">
                    <span className="text"> View Our Work</span>

                    <span className="icon">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 1V10H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>

                  </Link>
                </div>
                <p >Hello, I am Diego a designer from Barcelona. Specialised <br /> in creating fantastic digital experiences.!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeThree;