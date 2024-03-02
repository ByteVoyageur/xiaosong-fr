'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import project_img_1 from '@/assets/img/portfolio/port-inner-up-1.jpg';
import project_img_2 from '@/assets/img/portfolio/port-inner-up-4.jpg';
import project_img_3 from '@/assets/img/portfolio/port-inner-up-5.jpg';

import project_img_4 from '@/assets/img/portfolio/port-inner-up-2.jpg';
import project_img_5 from '@/assets/img/portfolio/port-inner-up-3.jpg';
import project_img_6 from '@/assets/img/portfolio/portfolio-2.jpg';
import { gsap } from 'gsap';


const project_content = {
  blog_data_1: [
    {
      id: 1,
      img: project_img_1,
      bg_img: '/assets/img/portfolio/port-inner-up-1.jpg',
      title: 'Space Needle',
      category: 'Branding',
    },
    {
      id: 4,
      img: project_img_2,
      bg_img: '/assets/img/portfolio/port-inner-up-4.jpg',
      title: 'Crisis Cleanup',
      category: 'Branding',
    },
    {
      id: 1,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      title: 'Space Needle',
      category: 'Branding',
    }
  ],
  blog_data_2: [
    {
      id: 4,
      img: project_img_4,
      bg_img: '/assets/img/portfolio/port-inner-up-2.jpg',
      title: 'Space Needle',
      category: 'Branding',
    },
    {
      id: 1,
      img: project_img_5,
      bg_img: '/assets/img/portfolio/port-inner-up-3.jpg',
      title: 'Crisis Cleanup',
      category: 'Branding',
    },
    {
      id: 4,
      img: project_img_6,
      bg_img: '/assets/img/portfolio/portfolio-2.jpg',
      title: 'Space Needle',
      category: 'Branding',
    }
  ]
}

const { blog_data_1, blog_data_2 } = project_content

const PortfolioArea = () => {


  useEffect(() => {

    /* portfolio animation start */
    gsap.set('.tp-portfolio-bg-text', {
      x: '25%'
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-portfolio-bg-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.tp-portfolio-bg-text', {
        x: '-80%'
      });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.portfolio-list-scroll-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.portfolio-list-scroll-text', {
        x: '-80%'
      });

  }, [])


  return (
    <>
      <div className="porfolio-inner__thumb-wrapper tp-portfolio-effect portfolio-list-scroll-text-animation p-relative fix  black-bg-3 pt-80 pb-50"
        data-scrub="0.0001">
        <div className="portfolio-list-scroll-text pb-80 d-flex align-items-center">
          <p>Latest Project</p>
          <p>Latest Project</p>
        </div>
        <div className="container">
          <div className="row grid gx-90">
            <div className="col-xl-6 grid-item">
              <div className="tp-portfolio-item-wrapper">
                {blog_data_1.map((item, index) => (
                  <div key={index} className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: `url(${item.bg_img})`}}></div>
                        <div className="tp-portfolio-thumb-img">
                          <Image data-speed="0.85" style={{ height: 'auto' }} src={item.img} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">0{index + 1}</span>                          
                          <span className="tp-portfolio-meta-arrow">

                            <svg width="42" height="13" viewBox="0 0 42 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M35.4889 1L41 6.33338L35.4889 11.6667" stroke="currentColor"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M0.999998 6.33179H41" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{item.category}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
            <div className="col-xl-6 grid-item">
              <div className="tp-portfolio-item-wrapper">
                {blog_data_2.map((item, index) => (
                  <div key={index} className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                        <div className="tp-portfolio-thumb-img include-bg d-none" style={{ backgroundImage: `url(${item.img})` }}></div>
                        <div className="tp-portfolio-thumb-img">
                          <Image data-speed="0.85" style={{ height: 'auto' }} src={item.img} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">0{index + 1}</span>
                          <span className="tp-portfolio-meta-arrow">
                            <svg width="42" height="13" viewBox="0 0 42 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M35.4889 1L41 6.33338L35.4889 11.6667" stroke="currentColor"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M0.999998 6.33179H41" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{item.title}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;