'use client';
import React from 'react';
import HeaderThree from '@/layouts/headers/HeaderThree';
import HeroAreaHomeThree from './HeroAreaHomeThree';
import ServiceAreaHomeThree from './ServiceAreaHomeThree';
import ProjectAreaHomeThree from './ProjectAreaHomeThree';
import BlogAreaHomeThree from './BlogAreaHomeThree';
import FooterThree from '@/layouts/footers/FooterThree';

const HomeThree = () => {

  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <HeroAreaHomeThree />
            <ServiceAreaHomeThree />
            <ProjectAreaHomeThree />
            <BlogAreaHomeThree />
          </main>
          <FooterThree />
        </div>
      </div>
    </>
  );
};

export default HomeThree;