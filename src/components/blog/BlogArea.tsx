
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import blog_data from '@/data/BlogData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Scrollbar } from 'swiper/modules';
import Link from 'next/link';

// data
const categories = blog_data.map((item) => item.category);
const total_items = blog_data.map(p => p.article_data.length) 

// slider swiper setting 
const slider_setting = {
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".blog-list__arrow-next",
    prevEl: ".blog-list__arrow-prev",
  },
  scrollbar: {
    el: ".blog-list__scrollbar",
    clickable: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 1,
    },
    '992': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

const BlogArea = () => {
  const [items, setItems] = useState([...blog_data]); 


  const filterItems = (cateItem: string) => { 
    const findItems = blog_data.filter((findItem) => findItem.category === cateItem);
    setItems(findItems);
  };


  return (
    <>

      <div className="blog-list__area blog-list__ptb fix black-bg-3">
        <div className="container">
          <div className="row">
            <div className="blog-list__title-box">
              <span className="blog-list__subtitle tp-char-animation">Insights</span>
              <h4 className="blog-list__title tp-char-animation">Discover Articles and Guides to Help You.</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-list__tab-wrap">
                <div className="blog-list__tab-btn">
                  <ul className="nav nav-tab" id="myTab" role="tablist">
                    {categories.map((item, index) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button className={`nav-links ${index === 0 ? "active" : ""}`}
                          onClick={() => filterItems(item)}
                          id={`${item}-tab`} data-bs-toggle="tab"
                          data-bs-target={`#${item}-tab-pane`} type="button" role="tab"
                          aria-controls={`${item}-tab-pane`} aria-selected={index === 0 ? true : false}>
                          <span>{item}</span>
                          [{total_items[index]}]
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tab-content" id="myTabContent">
                  {items.map((item, i) => (
                    <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`${item}-tab-pane`} role="tabpanel"
                      aria-labelledby={`${item}-tab`} tab-index={0}>
                      <div className="blog-list__slider-main">
                        <div className="blog-list__slider-wrap mb-80">
                          <Swiper
                            modules={[Navigation,Scrollbar]}
                            {...slider_setting}

                            className="swiper-container blog-list__slider-active p-relative">
                            <div className="blog-list__scrollbar"></div>
                            <div className="swiper-wrapper">
                              {item.sliders?.map((slider, index) => (
                                <SwiperSlide key={index} className="blog-list__slider-item">
                                  <div className="row align-items-center">
                                    <div className="col-xl-8">
                                      <div className="blog-list__slider-title-box">
                                        <h4 className="blog-list__slider-title">
                                          <Link href="blog-details-2" dangerouslySetInnerHTML={{ __html: slider.title }}>
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="blog-list__author-wrap mb-20">
                                    <div className="row align-items-end">
                                      <div className="col-xl-3 col-lg-3 col-md-4 mb-20">
                                        <div
                                          className="blog-list__author-info d-flex align-items-center">
                                          <div className="blog-list__author-avata">
                                            <Image src={slider.avatar_img}
                                              alt="image-here" />
                                          </div>
                                          <div className="blog-list__author-details">
                                            <h4 className="blog-list__author-title">{slider.name}</h4>
                                            <span>{slider.degination}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-6 col-lg-6 col-md-8 mb-20">
                                        <div className="blog-list__meta-box text-start text-lg-center">
                                          <span className="category">{slider.tag}</span>
                                          <span>{slider.date}</span>
                                          <span>{slider.time}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <div className="blog-list__slider-thumb">
                                        <Image src={slider.img} style={{height: 'auto'}} alt="image-here" />
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}


                            </div>
                            <div className="blog-list__arrow-box d-none d-md-block">
                              <button className="blog-list__arrow-next"><i
                                className="fa-solid fa-angle-left"></i></button> {' '}
                              <button className="blog-list__arrow-prev"><i
                                className="fa-solid fa-angle-right"></i></button>
                            </div>
                          </Swiper>
                        </div>

                        <div className="blog-list__wrapper">
                          <div className="row gx-50">
                            {item.article_data?.map((article, index) => (
                              <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                                <div className="blog-list__sm-item mb-60 pb-30">
                                  <div className="blog-list__sm-thumb">
                                    <Link href="/blog-details-2">
                                      <Image src={article.img} style={{height: 'auto'}} alt="image-here" />
                                    </Link>
                                  </div>
                                  <div className="blog-list__sm-category">
                                    <span>{article.tag_1}</span> {' '}
                                    <span>{article.tag_2}</span>
                                  </div>
                                  <div className="blog-list__sm-title-box">
                                    <h4 className="blog-list__sm-title">
                                      <Link href="/blog-details-2">
                                        {article.title}
                                      </Link>
                                    </h4>
                                  </div>
                                  <div className="blog-list__sm-author d-flex align-items-center">
                                    <div className="blog-list__sm-author-avata">
                                      <Image src={article.avatar} alt="image-here" />
                                    </div>
                                    <div className="blog-list__sm-author-content">
                                      <h4>{article.name}</h4>
                                      <span dangerouslySetInnerHTML={{ __html: article.time }}></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="blog-list__btn text-center">
                          <a className="tp-btn-black-lg" href="#">Load more<span><i
                            className="fa-sharp fa-regular fa-arrow-right"></i></span></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  );
};

export default BlogArea;