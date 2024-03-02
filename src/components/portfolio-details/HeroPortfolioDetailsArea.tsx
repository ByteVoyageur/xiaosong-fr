

'use client'
import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';

import banner_img from "@/assets/img/portfolio/portfolio-details-img.jpg";
import PortfolioDownArrowIcon from '@/svg/icons/PortfolioDownArrowIcon';


const scrollTo = () => {
  scroller.scrollTo('porfolio-details', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

const HeroPortfolioDetailsArea = ({ style }: any) => {
  return (
    <>
      <div className="porfolio-details__area porfolio-details__color-customize p-relative smooth">
        <a className='pointer' onClick={scrollTo}>
          <div className="tp-hero-3__scrool-down z-index-5">
            <span className="text">Scroll</span> 
            <PortfolioDownArrowIcon />
          </div>
        </a>
        <div className="porfolio-details__hero-img">
          <Image data-speed="1.1" src={banner_img} alt="image-here" />
        </div>
      </div>
    </>
  );
};

export default HeroPortfolioDetailsArea;