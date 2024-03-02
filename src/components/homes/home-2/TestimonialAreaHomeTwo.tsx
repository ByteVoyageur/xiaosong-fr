'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import testimonial_data from '@/data/TestimonialData';

import shape1 from "@/assets/img/portfolio/shape-3.png";


const TestimonialAreaHomeTwo = () => {

  const hoverTextRefs: React.RefObject<HTMLDivElement>[] | any = [];
  const moveText = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const hoverTextRef = hoverTextRefs[index];

    if (hoverTextRef.current) {
      const item = hoverTextRef.current.getBoundingClientRect();
      const x = e.clientX - item.left; // Use item.left, not item.x
      const y = e.clientY - item.top;  // Use item.top, not item.y

      const children = hoverTextRef.current.children;
      if (children[0] && children[0].children[2]) {
        (children[0].children[2] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };

  // 3d slider 
  const [activeIndex, setActiveIndex] = useState<number>(2);

  useEffect(() => {
    const tp3dSlideWrapper = document.getElementById('tp-3d-slide-wrapper');
    if (!tp3dSlideWrapper) return;

    const dir = document.documentElement.getAttribute('dir');
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      endX = event.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const deltaX = endX - startX;
      const sensitivity = 50; // Adjust this value based on your desired sensitivity

      if (Math.abs(deltaX) > sensitivity) {
        if ((dir === 'rtl' && deltaX < 0) || (dir !== 'rtl' && deltaX > 0)) {
          setActiveIndex((prev) => prev + 1);
        } else {
          setActiveIndex((prev) => prev - 1);
        }
      }
    };

    tp3dSlideWrapper.addEventListener('touchstart', handleTouchStart);
    tp3dSlideWrapper.addEventListener('touchend', handleTouchEnd);

    const numberOfSlides = document.querySelectorAll('.tp-3d-slide').length;

    const handleArrowClick = (direction: 'left' | 'right') => {
      const nextIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
      if (nextIndex >= 0 && nextIndex < numberOfSlides) {
        setActiveIndex(nextIndex);
      }
    };

    const handleDotClick = (index: number) => {
      if (index >= 0 && index < numberOfSlides) {
        setActiveIndex(index);
      }
    };

    const updateSlides = () => {
      const slides = document.querySelectorAll('.tp-3d-slide');

      slides.forEach((slide, index) => {
        const classes = ['prev-1', 'prev-2', 'active', 'next-1', 'next-2'];
        slide.classList.remove(...classes);

        if (index === activeIndex) {
          slide.classList.add('active');
        } else if (index === activeIndex - 1) {
          slide.classList.add('prev-1');
        } else if (index === activeIndex - 2) {
          slide.classList.add('prev-2');
        } else if (index === activeIndex + 1) {
          slide.classList.add('next-1');
        } else if (index === activeIndex + 2) {
          slide.classList.add('next-2');
        }
      });
    };

    const handleArrowClickWrapper = (event: React.MouseEvent<HTMLDivElement>) => {
      const direction = event.currentTarget.classList.contains('tp-3d-slide-arrow-left') ? 'left' : 'right';
      handleArrowClick(direction as 'left' | 'right');
    };

    const handleDotClickWrapper = (index: number) => {
      handleDotClick(index);
    };

    document.querySelectorAll('.tp-3d-slide-arrow-right, .tp-3d-slide-arrow-left').forEach((arrow) => {
      (arrow as HTMLDivElement).addEventListener('click', handleArrowClickWrapper as any);
    });




    document.querySelectorAll('.dots span').forEach((dot, index) => {
      dot.addEventListener('click', () => handleDotClickWrapper(index));
    });

    updateSlides();

    return () => {
      tp3dSlideWrapper.removeEventListener('touchstart', handleTouchStart);
      tp3dSlideWrapper.removeEventListener('touchend', handleTouchEnd);
      document.querySelectorAll('.tp-3d-slide-arrow-right, .tp-3d-slide-arrow-left').forEach((arrow) => {
        (arrow as HTMLDivElement).removeEventListener('click', handleArrowClickWrapper as any);
      });
      document.querySelectorAll('.dots span').forEach((dot, index) => {
        dot.removeEventListener('click', () => handleDotClickWrapper(index));
      });
    };
  }, [activeIndex]);




  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-4 d-flex align-items-center justify-content-start p-relative z-index-1 fix">
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="tp-portfolio-shape">
            <Image className="tp-portfolio-shape-2-1 tp-zoom-in-out" src={shape1} alt="image-here" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-3d-slide-container">

                  <span className="tp-3d-slide-arrow tp-3d-slide-arrow-left z-index-9">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M8 1L1 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </span>

                  <span className="tp-3d-slide-arrow tp-3d-slide-arrow-right z-index-9">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </span>

                  <div className="tp-3d-slide-wrapper" id="tp-3d-slide-wrapper">
                    {testimonial_data.map((item, index) => (
                      <div key={index} className="tp-3d-slide tp-hover-reveal-text"
                        ref={(element) => {
                          hoverTextRefs[index] = React.createRef();
                          hoverTextRefs[index].current = element;
                        }}
                        onMouseMove={(e) => moveText(e, index)}>
                        <Link href="/portfolio-details" className="tp-portfolio-item-2 include-bg"
                          style={{
                            backgroundImage: `url(${item.brand_img.src})`,
                          }}>
                          <div className="tp-portfolio-meta-2">
                            <span>{item.brand_tag}</span>
                            <span>{item.time}</span>
                          </div>
                          <h3 className="tp-portfolio-title-2">{item.brand_name}</h3>
                          <div className="tp-portfolio-view tp-portfolio-view-btn">
                            <span>View <br /> Work</span>
                          </div>
                        </Link>
                      </div>
                    ))}
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

export default TestimonialAreaHomeTwo;