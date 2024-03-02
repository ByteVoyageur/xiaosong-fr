'use client';
import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import brand_img_1 from "@/assets/img/brand/logo_01.png";
import brand_img_2 from "@/assets/img/brand/logo_02.png";
import brand_img_3 from "@/assets/img/brand/logo_03.png";
import brand_img_4 from "@/assets/img/brand/logo_04.png";
import brand_img_5 from "@/assets/img/brand/logo_05.png";

const brand_images = [
  brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5,
  brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5,
];

const BrandAreaHomeOne = () => {
  return (
    <>
      <section className="tp-brand-area p-relative">
        <span className="tp-brand-border transition-3"></span>
        <div className="container container-large">
          <div className="tp-brand-inner p-relative">
            <span className="tp-brand-inner-border left tp-vertical-line"></span>
            <span className="tp-brand-inner-border right tp-vertical-line"></span>

            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-5">
                <h3 className="tp-brand-title">Trusted by <br /> World leading brands</h3>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-7">
                <div className="tp-brand-slider">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={false}
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                      },
                    }}                    
                   className="tp-brand-slider-active swiper-container">
                    {brand_images.map((item, index) => (
                      <SwiperSlide key={index} className="swiper-wrapper align-items-center">
                        <div className="tp-brand-item swiper-slide text-end">
                          <a href="#">
                            <Image src={item} alt="brand-img" />
                          </a>
                        </div>
                      </SwiperSlide>
                    ))} 

                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandAreaHomeOne;