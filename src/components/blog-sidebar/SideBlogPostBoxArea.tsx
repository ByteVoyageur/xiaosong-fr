
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogSidebar from './BlogSidebar';
import { Navigation } from 'swiper/modules'; 
import article_data from '@/data/ArticleData';
import { Swiper, SwiperSlide } from 'swiper/react';


// prop type 
type IProps = {
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
 
const SideBlogPostBoxArea = ({setIsVideoOpen }: IProps) => {
  
  return (
    <>
      <section className="postbox__area tp-blog-sidebar-sticky-area pb-120 black-bg-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper">
                {article_data.map((item, i) =>
                  <article className="postbox__item mb-60" key={i}>
                    {item.post_with_img &&
                      <div className="postbox__thumb">
                        <Link href="/blog-details">
                          <Image src={item.img} style={{ height: 'auto' }} alt="image-here" />
                        </Link>
                        <div className="postbox__date">
                          <span>{item.month}</span>
                          <h5>{item.date}</h5>
                        </div>
                      </div>
                    }
                    {item.post_with_video &&
                      <div className="postbox__thumb without-gsap" id="without-gsap">
                        <Link href="/blog-details">
                          <Image src={item.img} style={{ height: 'auto' }} alt="image-here" />
                        </Link>
                        <div className="postbox__date">
                          <span>{item.month}</span>
                          <h5>{item.date}</h5>
                        </div>
                        <div className="postbox__play-btn">
                          <a className="popup-video"
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                          ><i className="fa-sharp fa-solid fa-play"></i></a>
                        </div>
                      </div>
                    }                    
                    {item.post_with_slider &&
                      <div className="postbox__thumb w-img">
                        <div className="postbox__date">
                          <span>{item.month}</span>
                          <h5>{item.date}</h5>
                        </div>
                        <div className="postbox__thumb-slider p-relative">
                          <Swiper
                            loop={false}
                            autoplay={true}
                            modules={[Navigation]}
                            navigation={{
                              nextEl: ".postbox-arrow-next",
                              prevEl: ".postbox-arrow-prev",
                            }}
                            breakpoints={{
                              '1400': {
                                slidesPerView: 1,
                              },
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
                            }}
                            className="swiper-container postbox__thumb-slider-active">
                            {item.slider_images?.map((slide, slide_i) =>
                              <SwiperSlide key={slide_i} className="swiper-slide">
                                <Image src={slide} style={{ height: 'auto' }} alt="image-here" />
                              </SwiperSlide>
                            )}
                          </Swiper>
                          <div className="postbox__slider-arrow-wrap d-none d-sm-block">
                            <button className="postbox-arrow-prev">
                              <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                            <button className="postbox-arrow-next">
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    }
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>{item.category}</span>
                        <i></i>
                        <span>{item.comments} Comments</span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{item.description}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href="/blog-details" className="tp-btn-border-lg">read more</Link>
                      </div>
                    </div>
                  </article>
                )}

                <div className="blog-list__btn">
                  <a className="tp-btn-black-lg" href="#">Load more<span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></a>
                </div>
              </div>
            </div>
            <BlogSidebar />

          </div>
        </div>
      </section>

     
    </>
  );
};

export default SideBlogPostBoxArea;