import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import ServiceDetailsArea from './ServiceDetailsArea';
import BrandAreaAbout from '../about/BrandAreaAbout';
import NavigationArea from './NavigationArea';
import FooterOne from '@/layouts/footers/FooterOne';

const ServiceDetails = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailsArea />
            <BrandAreaAbout />
            <NavigationArea />
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;