
'use client'
import React from 'react';
import Image from "next/image";

import about_shape_1 from "@/assets/img/hero/hero-shape-2-1.png";
import about_signature from "@/assets/img/hero/ab-signature.jpg";
import about_circle from "@/assets/img/hero/ab-circle-img.png";
import about_img from "@/assets/img/hero/ab-hero-1.jpg";
import { scroller } from 'react-scroll';



const scrollTo = () => {
  scroller.scrollTo('about-info-area', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};



const HeroAreaAbout = () => {
  return (
    <>
      <div className="ab-hero__area ab-hero__customize ab-hero__ptb black-bg-3 p-relative z-index-1 fix">
        <div className="ab-hero__shape-1">
          <Image src={about_shape_1} alt="image-here" />
        </div>
        <div className="ab-hero__text d-none d-lg-block col-md-4">
          <span>About Me</span>
        </div>
        <div className="smooth">
          <a  onClick={scrollTo} className="d-none d-xl-block pointer">
            <div className="tp-hero-3__scrool-down">
              <span className="text">Scroll</span>
              <span>
                <svg width="14" height="93" viewBox="0 0 14 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 85.8995C10.1308 85.8995 6.9999 88.9319 6.9999 92.6793" stroke="white"
                    strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M7 92.6793C7 88.9319 3.86911 85.8995 -0.000102413 85.8995" stroke="white"
                    strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M7 0L7 90" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="ab-hero__title-box">
                <h3 className="ab-hero__title tp-char-animation">I' m Diego Luna</h3>
              </div>
              <div className="ab-hero__btn-box">
                <a className="tp-btn-border-sm" href="assets/img/cv/mycv.docx">
                  Download CV
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 10.3331V13.4442C15 13.8568 14.8361 14.2525 14.5444 14.5442C14.2527 14.8359 13.857 14.9998 13.4444 14.9998H2.55556C2.143 14.9998 1.74733 14.8359 1.45561 14.5442C1.16389 14.2525 1 13.8568 1 13.4442V10.3331"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M4.11328 6.44458L8.00217 10.3335L11.8911 6.44458" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 10.3333V1" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="ab-hero__right-box text-end p-relative mt-25 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="ab-hero__signature">
                  <Image src={about_signature} alt="image-here" />
                </div>
                <div className="ab-hero__circle">
                  <Image className="tp-rotate-center" src={about_circle} alt="image-here" />
                </div>
                <div className="ab-hero__big-img">
                  <Image src={about_img} style={{ height: "auto" }} alt="image-here" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaAbout;