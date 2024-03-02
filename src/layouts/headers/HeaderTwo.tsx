'use client'

import Link from 'next/link';
import Offcanvas from '@/components/common/Offcanvas';
import React, { useState } from 'react'; 
import Image from 'next/image';

import logo_white from "@/assets/img/logo/logo-2.png";
import logo_black from "@/assets/img/logo/logo-black.png";


const HeaderTwo = () => {
  const [showCanvas, setShowCanvas] = useState<boolean>(false);


  return (
    <>
      <header>
        <div className="tp-header-3__area tp-header-transparent tp-header-3__ptlr d-none">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6 d-none">
                <div className="tp-header-4__menu text-center">
                  <nav className="tp-main-menu-content menu-hover-active counter-row">

                  </nav>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3__right-action d-flex align-items-center justify-content-end">
                  <div className="tp-theme-toggle-single">
                    <label className="tp-theme-toggle-main themepure-theme-toggle">

                      <span className="dark">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 7.63063C13.8774 8.95738 13.3795 10.2218 12.5645 11.2759C11.7495 12.33 10.6512 13.1301 9.39801 13.5828C8.14485 14.0354 6.78869 14.1218 5.48822 13.8319C4.18775 13.5419 2.99676 12.8875 2.05461 11.9454C1.11246 11.0032 0.458115 9.81225 0.168141 8.51178C-0.121832 7.21131 -0.0354396 5.85515 0.41721 4.60199C0.86986 3.34883 1.67005 2.2505 2.72413 1.43552C3.77822 0.620536 5.04262 0.122609 6.36937 0C5.5926 1.05088 5.21881 2.34566 5.31599 3.64884C5.41317 4.95202 5.97487 6.17704 6.89892 7.10109C7.82296 8.02513 9.04798 8.58683 10.3512 8.68401C11.6543 8.78119 12.9491 8.4074 14 7.63063Z"
                            fill="white" />
                        </svg>
                      </span>

                      <input type="checkbox" className="themepure-theme-toggle-input" />

                      <span className="light">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.0581 14.2166C12.3522 14.2166 14.212 12.3569 14.212 10.0628C14.212 7.7687 12.3522 5.90897 10.0581 5.90897C7.76403 5.90897 5.9043 7.7687 5.9043 10.0628C5.9043 12.3569 7.76403 14.2166 10.0581 14.2166Z"
                            fill="#FFC05A" />
                          <path d="M10 1V2.63636" stroke="#FFC05A" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                          <path d="M10 17.3637V19.0001" stroke="#FFC05A" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                          <path d="M3.63477 3.63455L4.79658 4.79637" stroke="#FFC05A" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15.2031 15.2036L16.3649 16.3654" stroke="#FFC05A" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1 10.0001H2.63636" stroke="#FFC05A" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                          <path d="M17.3652 10.0001H19.0016" stroke="#FFC05A" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.63477 16.3654L4.79658 15.2036" stroke="#FFC05A" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15.2031 4.79637L16.3649 3.63455" stroke="#FFC05A" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>

                    </label>
                  </div>
                  <div className="tp-header-3__btn d-none d-md-block">
                    <Link className="tp-btn-white" href="/contact">
                      <span className="text">Let's Talk</span>
                      <span>

                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.9297 10.3651C5.12061 10.2162 5.29376 10.043 5.64006 9.69671L9.95722 5.37954C10.0616 5.27517 10.0138 5.0954 9.87438 5.04702C9.36479 4.87022 8.70189 4.53829 8.0818 3.9182C7.46171 3.29811 7.12978 2.63521 6.95299 2.12562C6.9046 1.98617 6.72483 1.9384 6.62046 2.04278L2.30329 6.35994L2.30328 6.35995C1.95699 6.70624 1.78385 6.87939 1.63494 7.0703C1.45928 7.29551 1.30868 7.53919 1.18581 7.79701C1.08164 8.01558 1.00421 8.24789 0.849336 8.71249L0.649225 9.31283L0.331026 10.2674L0.0326691 11.1625C-0.0435433 11.3911 0.0159628 11.6432 0.186379 11.8136C0.356795 11.984 0.608868 12.0435 0.837505 11.9673L1.73258 11.669L2.68717 11.3508L3.28751 11.1507C3.75211 10.9958 3.98442 10.9184 4.20299 10.8142C4.46082 10.6913 4.70449 10.5407 4.9297 10.3651Z" fill="currentcolor" />
                          <path d="M11.3089 4.02783C12.2304 3.10641 12.2304 1.61249 11.3089 0.691067C10.3875 -0.230356 8.89359 -0.230356 7.97217 0.691067L7.83337 0.82986C7.69944 0.963792 7.63876 1.15087 7.67222 1.3373C7.69327 1.45458 7.73229 1.62603 7.80327 1.83063C7.94522 2.23979 8.21329 2.77689 8.7182 3.2818C9.22311 3.78671 9.76021 4.05478 10.1694 4.19673C10.374 4.26772 10.5454 4.30673 10.6627 4.32778C10.8491 4.36124 11.0362 4.30056 11.1701 4.16663L11.3089 4.02783Z" fill="currentcolor" />
                        </svg>

                      </span>
                    </Link>
                  </div>
                  <div className="tp-header-3__bar">
                    <button className="tp-menu-bar tp-offcanvas-open-btn">

                      <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 1H1" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M31 9H1" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header>
        <div className="tp-header-2__area tp-header-2__plr tp-header-2__transparent ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-5 col-md-4 col-6">
                <div className="tp-header-2__logo">
                  <Link className="logo-white" href="/"><Image src={logo_white} alt="image-here" /></Link>
                  <Link className="logo-black" href="/"><Image src={logo_black} alt="image-here" /></Link>
                </div>
              </div>
              <div className="col-xl-7 d-none d-xl-block">
                <div className="tp-header-2__main-menu text-center">
                  <nav id="onePageMenu">

                    <ul>


                      <li data-menuanchor="cases" className="active">
                        <a href="#cases">Cases</a>
                      </li>
                      <li data-menuanchor="about">
                        <a href="#about">About</a>
                      </li>
                      <li data-menuanchor="services">
                        <a href="#services">Services</a>
                      </li>
                      <li data-menuanchor="projects">
                        <a href="#projects">Projects</a>
                      </li>
                      <li data-menuanchor="skills">
                        <a href="#skills">Skills</a>
                      </li>
                      <li data-menuanchor="testimonial">
                        <a href="#testimonial">Testimonial</a>
                      </li>
                      <li data-menuanchor="contact">
                        <a href="#contact">Contact</a>
                      </li>



                    </ul>

                  </nav>

                </div>
              </div>
              <div className="col-xl-3 col-lg-7 col-md-8 col-6">
                <div className="tp-header-2__right-box d-flex align-items-center justify-content-end">
                  <div className="tp-header-2__maito d-none d-sm-block">
                    <span>
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.0005 14.6H5.00049C2.60049 14.6 1.00049 13.4 1.00049 10.6V5C1.00049 2.2 2.60049 1 5.00049 1L13.0005 1C15.4005 1 17.0005 2.2 17.0005 5V10.6C17.0005 13.4 15.4005 14.6 13.0005 14.6Z"
                          stroke="currentcolor" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10"
                          stroke-inecap="round" stroke-inejoin="round" />
                        <path
                          d="M13.0005 5.39984L10.4965 7.39984C9.67248 8.05584 8.32048 8.05584 7.49648 7.39984L5.00049 5.39984"
                          stroke="currentcolor" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10"
                          stroke-inecap="round" stroke-inejoin="round" />
                      </svg>
                    </span>
                    <a href="mailto:diego@mail.com">diego@mail.com</a>
                  </div>
                  <div className="tp-header-2__bar parallax-wrap" onClick={() => setShowCanvas(true)}>
                    <button className="tp-menu-bar parallax-element tp-offcanvas-open-btn">
                      <i>
                        <span></span>
                        <span></span>
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas showCanvas={showCanvas} setShowCanvas={setShowCanvas} />
    </>

  );
};

export default HeaderTwo;