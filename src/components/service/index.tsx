import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import SeviceHeroArea from './SeviceHeroArea';
import ServiceAreaHomeThree from '../homes/home-3/ServiceAreaHomeThree';
import ServiceInfoArea from './ServiceInfoArea';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import PriceAreaHomeOne from '../homes/home/PriceAreaHomeOne';
import BrandAreaAbout from '../about/BrandAreaAbout';
import FooterOne from '@/layouts/footers/FooterOne';


const Service = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <SeviceHeroArea />
            <ServiceAreaHomeThree style={true} />
            <ServiceInfoArea />
            <TestimonialAreaHomeOne style={true} />
            <PriceAreaHomeOne style={true} />
            <BrandAreaAbout />
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default Service;