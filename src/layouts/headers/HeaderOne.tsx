'use client';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './menu/NavMenu';
import React, { useEffect, useState } from 'react';
import Offcanvas2 from '@/components/common/Offcanvas2';

import light_logo from "@/assets/img/logo/logo.png";
import dark_logo from "@/assets/img/logo/logo-black.png";
import UseThemeCheck from '@/hooks/UseThemeCheck';


const HeaderOne = () => {
  const [showCanvas, setShowCanvas] = useState<boolean>(false);
  const {active,toggleTheme} = UseThemeCheck();


  // header border bottom animation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Testimonial 3 Image Animation
      gsap.set(".tp-header-border", { width: 0, });
      gsap.to(".tp-header-border", {
        scrollTrigger: {
          trigger: ".tp-header-area",
          start: "center center",
          markers: false
        },
        duration: 1,
        ease: "none",
        width: "100%",
      })
    }
  }, [])


  // sticky header 
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
      } else if (currentScrollTop <= 500) {
        document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
      } else {
        document.querySelector('.tp-int-menu')?.classList.add('tp-header-pinned');
      }
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);



  return (
    <>
      <header>

        <div className="tp-header-area tp-header-mob-space tp-header-transparent p-relative">
          <span className="tp-header-border"></span>
          <div className="container container-large">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-5 col-6">
                <div className="logo">
                  <Link className="logo-white" href="/">
                    <Image style={{ width: '115px', height: 'auto' }} src={light_logo} alt="diego-image" />
                  </Link>
                  <Link className="logo-black" href="/">
                    <Image style={{ width: '115px', height: 'auto' }} src={dark_logo} alt="diego-image" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                <div className="main-menu">
                  <nav className="tp-main-menu-content">
                    <NavMenu />
                  </nav>
                </div>
              </div>

              <div className="col-xl-4 col-lg-3 col-md-7 col-6">
                <div className="tp-header-right d-flex align-items-center justify-content-end">

                  <div className="tp-theme-toggle">
                    <label className="tp-theme-toggle-main themepure-theme-toggle" htmlFor="this-s">

                      <span className=" tp-theme-toggle-light">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.0448 11.0454C9.70165 11.0454 11.0448 9.7023 11.0448 8.04544C11.0448 6.38859 9.70165 5.04544 8.0448 5.04544C6.38795 5.04544 5.0448 6.38859 5.0448 8.04544C5.0448 9.7023 6.38795 11.0454 8.0448 11.0454Z"
                            fill="currentColor" />
                          <path d="M8 1.5V2.68182" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 13.3182V14.5" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.40198 3.40277L4.24107 4.24186" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M11.7584 11.7581L12.5975 12.5972" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1.5 8H2.68182" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.3174 8H14.4992" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.40198 12.5972L4.24107 11.7581" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M11.7584 4.24186L12.5975 3.40277" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>

                      <input type="checkbox" className="themepure-theme-toggle-input" id="this-s" />

                      <i className="tp-theme-toggle-slide"></i>

                      <span className="tp-theme-toggle-dark">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 6.54054C11.8949 7.67776 11.4681 8.76152 10.7696 9.66503C10.071 10.5685 9.12957 11.2544 8.05544 11.6424C6.9813 12.0304 5.81888 12.1044 4.70419 11.8559C3.5895 11.6073 2.56866 11.0465 1.7611 10.2389C0.953538 9.43135 0.39267 8.4105 0.144121 7.29581C-0.104428 6.18112 -0.0303768 5.0187 0.357609 3.94457C0.745595 2.87043 1.43147 1.929 2.33497 1.23045C3.23848 0.531888 4.32224 0.105093 5.45946 0C4.79365 0.900756 4.47327 2.01056 4.55656 3.12758C4.63986 4.24459 5.12132 5.2946 5.91336 6.08664C6.7054 6.87869 7.75541 7.36014 8.87242 7.44344C9.98944 7.52673 11.0992 7.20635 12 6.54054Z"
                            fill="currentColor" />
                        </svg>
                      </span>


                    </label>
                  </div>

                  <div className="tp-header-cv ml-10 d-none d-md-block">
                    <a className="tp-header-cv-btn" href="assets/img/cv/mycv.docx">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M8 1L8 9.75M8 9.75L10.625 7.125M8 9.75L5.375 7.125" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                  <div className="tp-header-hamburger ml-20">
                    <button className="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                      onClick={() => setShowCanvas(true)}
                      type="button">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </header>

      <header>

        <div className="tp-header-area tp-header-mob-space tp-header-transparent p-relative tp-int-menu tp-header-sticky-cloned">
          <div className="container container-large">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-5 col-6">

                <div className="logo">
                  <Link className="logo-white" href="/">
                    <Image style={{ width: '115px', height: 'auto' }} src={light_logo} alt="diego-image" />
                  </Link>
                  <Link className="logo-black" href="/">
                    <Image style={{ width: '115px', height: 'auto' }} src={dark_logo} alt="diego-image" />
                  </Link>
                </div>

              </div>
              <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                <div className="main-menu">
                  <nav className="tp-main-menu-content">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-7 col-6">
                <div className="tp-header-right d-flex align-items-center justify-content-end">
                  <div className="tp-theme-toggle ">
                    <label
                      defaultChecked={active}
                      onChange={toggleTheme}
                      className={`tp-theme-toggle-main themepure-theme-toggle  ${active ? 'dark-active' : 'light-active'}`}
                      htmlFor="this-ss">

                      <span id="tp-theme-toggle-light" className=" tp-theme-toggle-light">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.0448 11.0454C9.70165 11.0454 11.0448 9.7023 11.0448 8.04544C11.0448 6.38859 9.70165 5.04544 8.0448 5.04544C6.38795 5.04544 5.0448 6.38859 5.0448 8.04544C5.0448 9.7023 6.38795 11.0454 8.0448 11.0454Z"
                            fill="currentColor" />
                          <path d="M8 1.5V2.68182" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 13.3182V14.5" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.40198 3.40277L4.24107 4.24186" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M11.7584 11.7581L12.5975 12.5972" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1.5 8H2.68182" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.3174 8H14.4992" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.40198 12.5972L4.24107 11.7581" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M11.7584 4.24186L12.5975 3.40277" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>

                      <input id="this-ss" type="checkbox" className="themepure-theme-toggle-input" />

                      <i className="tp-theme-toggle-slide"></i>

                      <span id="tp-theme-toggle-dark" className="tp-theme-toggle-dark">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 6.54054C11.8949 7.67776 11.4681 8.76152 10.7696 9.66503C10.071 10.5685 9.12957 11.2544 8.05544 11.6424C6.9813 12.0304 5.81888 12.1044 4.70419 11.8559C3.5895 11.6073 2.56866 11.0465 1.7611 10.2389C0.953538 9.43135 0.39267 8.4105 0.144121 7.29581C-0.104428 6.18112 -0.0303768 5.0187 0.357609 3.94457C0.745595 2.87043 1.43147 1.929 2.33497 1.23045C3.23848 0.531888 4.32224 0.105093 5.45946 0C4.79365 0.900756 4.47327 2.01056 4.55656 3.12758C4.63986 4.24459 5.12132 5.2946 5.91336 6.08664C6.7054 6.87869 7.75541 7.36014 8.87242 7.44344C9.98944 7.52673 11.0992 7.20635 12 6.54054Z"
                            fill="currentColor" />
                        </svg>
                      </span>

                    </label>
                  </div>
                  <div className="tp-header-cv ml-10 d-none d-md-block">
                    <a className="tp-header-cv-btn" href="assets/img/cv/mycv.docx">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M8 1L8 9.75M8 9.75L10.625 7.125M8 9.75L5.375 7.125" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                  <div className="tp-header-hamburger ml-20">
                    <button
                      onClick={() => setShowCanvas(true)}
                      className="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                      type="button">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      <Offcanvas2 showCanvas={showCanvas} setShowCanvas={setShowCanvas} />

    </>
  );
};

export default HeaderOne;