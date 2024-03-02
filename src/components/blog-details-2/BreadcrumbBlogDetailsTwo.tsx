
import React from 'react';
import Image from 'next/image';
import user_img from '@/assets/img/users/blog-list-avata-1.png';
import { scroller } from 'react-scroll';

const scrollTo = () => {
  scroller.scrollTo('postbox', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};



const BreadcrumbBlogDetailsTwo = () => {
  return (
    <>
      <div className="blog-details__area blog-details-4__customize blog-details-4__bg" style={{ backgroundImage: "url(/assets/img/blog/blog-details-2-1.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-10">
              <div className="blog-list__title-box">
                <div className="blog-list__text-sm mb-20">
                  <span className="category mr-10">Branding</span><span className="category">Design</span>
                </div>
                <h4 className="blog-list__title tp-char-animation">Complete Guide to User Flow in UX Design</h4>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="blog-details__meta mb-170">
                <span ><Image src={user_img} alt="image-here" /><i>Polina Viola</i></span>
                <span>Apr 21, 2020</span>
                <span>2 Comments</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="blog-details-4__scroll-down smooth">
                  <a className="pointer" onClick={scrollTo}>
                    Scroll
                    <span>
                      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.5V11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 7L6 11.5L1.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbBlogDetailsTwo;