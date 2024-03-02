'use client';
import React from 'react';
import Image from 'next/image';
import client_img_1 from '@/assets/img/testimonial/avata/avata-1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import NextIconHomeTwo from '@/svg/home-2/NextIconHomeTwo';
import PrevIconHomeOne from '@/svg/home-2/PrevIconHomeOne';


import start_icon_1 from '@/assets/img/testimonial/testi-star.png';
import start_icon_2 from '@/assets/img/testimonial/testimonia-2-1.png';

const client_content = {
  title: <>What <br /> Our Client Says</>,
  btn_text: "BECOME A CLIENT",
  review_text: <>Rated 4.9 out of 5 based <br /> on 500+ reviews</>,

  review_data: [
    {
      id: 1,
      img: client_img_1,
      name: "Charlie Smith",
      designation: "CEO Founder",
      review: "Our design process was very patch work & impromptu before we met will. He's helped us build a solid design system & optimize our website.!",
    },
    {
      id: 2,
      img: client_img_1,
      name: "Charlie Smith",
      designation: "CEO Founder",
      review: "Our design process was very patch work & impromptu before we met will. He's helped us build a solid design system & optimize our website.!",
    },
    {
      id: 3,
      img: client_img_1,
      name: "Charlie Smith",
      designation: "CEO Founder",
      review: "Our design process was very patch work & impromptu before we met will. He's helped us build a solid design system & optimize our website.!",
    },
  ]
}
const { title, btn_text, review_text, review_data } = client_content

const ClientAreaHomeTwo = () => {
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-6 d-flex align-items-start justify-content-center p-relative z-index-1 fix">
          <div className="tp-testimonial-2__star-shape">
            <Image src={start_icon_1} alt="image-here" />
          </div>
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="container">
            <div className="tp-testimonial-2__title-wrap">
              <div className="row align-items-end">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="tp-testimonial-2__title-box">
                    <h4 className="tp-testimonial-2__title">{title}</h4>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div
                    className="tp-testimonial-2__arrow-box text-end d-flex align-items-center justify-content-end">
                    <button className="tp-testimonial-2__slider-next tp-hover-arrow-down">
                      <span>
                        <NextIconHomeTwo />
                        <NextIconHomeTwo />
                      </span>
                    </button>
                    <button className="tp-testimonial-2__slider-prev tp-hover-arrow-up">
                      <span>
                        <PrevIconHomeOne />
                        <PrevIconHomeOne />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-5">
                <div className="tp-testimonial-2__left-box">
                  <div className="tp-testimonial-2__btn-box ">
                    <div className="parallax-wrap d-inline-block">
                      <div className="parallax-element">
                        <a className="tp-btn-pink " href="#">
                          <span>
                            <svg className="icon-1" width="12" height="12" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 10.9995L11 0.999512" stroke="white" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M1 0.999512H11V10.9995" stroke="white" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span data-hover="BECOME A CLIENT">
                            {btn_text}
                          </span>
                        </a>
                      </div>
                    </div>
                    <span className="tp-testimonial-2__review-text">
                      {review_text}
                    </span>
                  </div>
                  <div className="tp-testimonial-2__shape-img text-center"> 
                    <Image src={start_icon_2} alt="image-here" />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-7">
                <div className="tp-testimonial-2__slider-wrapper">
                  <Swiper
                    loop={false}
                    speed={1200}
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation]}
                    autoplay={{
                      delay: 3000
                    }}
                    navigation={{
                      prevEl: ".tp-testimonial-2__slider-next",
                      nextEl: ".tp-testimonial-2__slider-prev"
                    }}
                    className="swiper-container tp-testimonial-2__slider-active">
                    {review_data.map((item, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="tp-testimonial-2__slider-item">
                          <div className="tp-testimonial-2__slider-text">
                            <p>{item.review}</p>
                          </div>
                          <div className="tp-testimonial-2__author d-flex align-items-center">
                            <div className="tp-testimonial-2__avata">
                              <Image src={item.img} alt="image-here" />
                            </div>
                            <div className="tp-testimonial-2__author-info">
                              <h4 className="tp-testimonial-2__author-title">{item.name}</h4>
                              <span>{item.designation}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientAreaHomeTwo;