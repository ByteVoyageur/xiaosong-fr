'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import blog_img_1 from "@/assets/img/course/course-1.jpg";
import blog_img_2 from "@/assets/img/course/course-2.jpg";

import blog_img_3 from "@/assets/img/blog/blog-1.jpg";
import blog_img_4 from "@/assets/img/blog/blog-2.jpg";
import blog_img_5 from "@/assets/img/blog/blog-3.jpg";
import figma_icon from "@/assets/img/course/logo/figma.png";
import ae_icon from "@/assets/img/course/logo/ae.png";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  priceing_data: {
    tab_id: string;
    tab_content: string;
    tab_items?: {
      time?: string;
      info_1?: string;
      info_2?: string | JSX.Element;
      price?: string;
      btn_text?: string;
      img?: StaticImageData | any;
      course_meta?: string;
      course_title?: string;
      new_price?: string;
      old_price?: string;
      offer?: string;
      date?: string;
      title?: string;
      category?: string;
    }[];
  }[]
}

const price_content: DataType = {
  subtitle: "Advantage",
  title: <>Resources for <br /> growth</>,
  priceing_data: [
    {
      tab_id: "home",
      tab_content: "Pricing",
      tab_items: [
        {
          time: "1 Month",
          info_1: "Paid monthly",
          info_2: "Cancel anytime",
          price: "$1300/mo",
          btn_text: "Get Started",
        },
        {
          time: "3 Month",
          info_1: "Paid monthly",
          info_2: "Save $800",
          price: "$4200/mo",
          btn_text: "Get Started",
        },
        {
          time: "Not sure?",
          info_1: "Check the skill",
          info_2: <>You can order <br /> 1 free task</>,
          btn_text: "Free Skill Check",
        }
      ]
    },
    {
      tab_id: "profile",
      tab_content: "Courses",
      tab_items: [
        {
          img: blog_img_1,
          course_meta: "3 Hours 42 Mins / English",
          course_title: "Animation Basics / Volume 1",
          new_price: "48.90",
          old_price: "72.90",
          offer: "Save Up to 35%",
        },
        {
          img: blog_img_2,
          course_meta: "3 Hours 32 Mins / English",
          course_title: "Animation Basics / Volume 1",
          new_price: "48.90",
          old_price: "72.90",
          offer: "Save Up to 35%",
        }
      ]
    },
    {
      tab_id: "blog",
      tab_content: "Blog",
      tab_items: [
        {
          img: blog_img_3,
          date: "October 10, 2023",
          title: "6 practical exercises to learn UI/UX designer.",
          category: "UX Design / Branding",
        },
        {
          img: blog_img_4,
          date: "June 12, 2023",
          title: "How to build photoshoots Scene",
          category: "UX Design / Branding",
        },
        {
          img: blog_img_5,
          date: "May 21, 2023",
          title: "The ABCs of conversion oriented design",
          category: "UX Design / Branding",
        }

      ]
    }
  ]
}

const { subtitle, title, priceing_data } = price_content

const PriceAreaHomeOne = ({ style }: any) => {
  const [activeTab, setActiveTab] = useState("home");
  const activeRef = useRef<HTMLButtonElement>(null);
  const marker = useRef<HTMLSpanElement>(null);

  // handleActive
  const handleActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, tab: string) => {
    setActiveTab(tab);
    const buttonElement = e.target as HTMLButtonElement;
    if (buttonElement.classList.contains("active") && marker.current) {
      marker.current.style.left = buttonElement.offsetLeft + "px";
      marker.current.style.width = buttonElement.offsetWidth + "px";
    }
  };
  
  useEffect(() => {
    if (activeTab && activeRef.current && activeRef.current.classList.contains("active") && marker.current) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, [activeTab]);


  return (
    <>

      <section className={`${style ? 'sv-inner__price-area sv-inner__price-customize black-bg-3' : 'tp-pcb-area pt-80'} pb-70`}>
        {style ? null
          :
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="tp-section-title-wrapper mb-30 text-start text-md-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title">{title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {style ?
                <div className="sv-inner__price-title-box text-center">
                  <h4 className="tp-section-title-3 tp_title_anim">Services & Pricing</h4>
                  <p className="tp_title_anim">No surprises. No hassles. Just right.</p>
                </div>
                :
                <div className="tp-pcb-tab blog-btn-tab d-flex justify-content-center mb-80">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">

                    {priceing_data.map((item, index) =>
                      <li key={index} className="nav-items" role="presentation">
                        <button
                          className={`nav-links ${activeTab === item.tab_id ? "active" : ""}`}
                          id={`${item.tab_id}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.tab_id}`}
                          type="button"
                          role="tab"
                          aria-controls={item.tab_id}
                          ref={activeTab === item.tab_id ? activeRef : null}
                          onClick={(e) => handleActive(e, item.tab_id)}
                          aria-selected={index === 0 ? "true" : "false"}
                          tabIndex={-1}
                          >
                          {item.tab_content}
                        </button>
                      </li>
                    )}
                  </ul>
                  <span ref={marker} id="blog-btn-bg"></span>
                </div>
              }
            </div>
          </div>
          <div className="tp-pcb-tab-wrapper">
            <div className="row">
              <div className="tab-content" id="myTabContent">

                {priceing_data.map((item, i) =>
                  <div key={i}
                    className={`tab-pane fade ${i === 0 ? "active show" : ""}`}
                    id={item.tab_id} role="tabpanel" aria-labelledby={`${item.tab_id}-tab`}>

                    {i === 0 &&
                      <div className="tp-price-inner">
                        <div className="row">
                          {item.tab_items?.map((inner_item, inner_i) =>
                            <div key={inner_i} className="col-xl-4 col-lg-4 col-md-6 mb-70">
                              <div className="tp-price-item">
                                <div className={`tp-price-head ${inner_i === 2 ? "mb-125" : "mb-100"} text-center`}>
                                  <h4 className="tp-price-head-title">{inner_item.time}</h4>
                                  <span>{inner_item.info_1}</span>
                                </div>

                                <div className={`tp-price-body ${inner_i === 2 ? "" : "mb-35"} text-center`}>
                                  <span className={`${inner_i === 2 ? "tp-price-text" : inner_i === 1 ? "tp-price-radius-border" : ""}`}>
                                    {inner_item.info_2}
                                  </span>
                                  {inner_i === 2 ? "" : <h4 className="tp-price-body-title">{inner_item.price}</h4>}

                                </div>

                                <div className="tp-price-btn-box text-center">
                                  <Link
                                    className={`${style ? "tp-btn-price-white" : inner_i === 2 ? "tp-btn-price-border" : "tp-btn-price"}`} href="/contact">
                                    <div>
                                      <span>{inner_item.btn_text}</span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    }
                    {i === 1 &&
                      <div className="tp-pcb-inner pl-70 pr-70">
                        <div className="row gx-50">
                          {item.tab_items?.map((inner_item, inner_i) =>
                            <div key={inner_i} className="col-xl-6 col-lg-6 mb-70">
                              <div className="tp-course-item">
                                <div className="tp-course-thumb-wrap p-relative">
                                  <div className="tp-course-thumb fix">
                                    <Link href="/contact">
                                      <Image className="w-100" src={inner_item.img} alt="image-here" />
                                    </Link>
                                  </div>
                                  <div className="tp-course-logo d-flex align-items-center">
                                    <span>
                                      <Image src={figma_icon} alt="image-here" />
                                    </span>
                                    <span>
                                      <Image src={ae_icon} alt="image-here" />
                                    </span>
                                  </div>
                                </div>
                                <div className="tp-course-content">
                                  <div className="tp-course-meta">
                                    <span>{inner_item.course_meta}</span>
                                  </div>
                                  <h3 className="tp-course-title">
                                    <Link href="/contact">{inner_item.course_title}</Link>
                                  </h3>
                                  <div className="tp-course-price-btn-box d-flex align-items-center">
                                    <Link href="/contact" className="tp-course-price-btn">
                                      <span className="new-price">${inner_item.new_price}</span>
                                      <span className="old-price"><del>${inner_item.old_price}</del></span>
                                    </Link>
                                    <div className="tp-course-pirce-offer p-relative">
                                      <span>
                                        <svg width="60" height="51" viewBox="0 0 60 51" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" clipRule="evenodd"
                                            d="M4.99903 50.134C6.57433 43.3833 8.8496 40.404 11.6064 39.3942C14.3632 38.3821 17.47 39.3406 20.5768 40.3012C22.721 40.977 24.9089 41.6665 26.9218 41.7906C29.0222 41.9213 30.9914 41.4401 32.698 39.7457C33.0918 39.339 33.442 38.679 33.6608 37.7993C34.0108 36.6058 34.2296 34.9813 34.3171 33.0754C34.7547 25.8451 33.8797 14.4651 34.9299 7.53443C35.1487 5.9412 35.4985 4.59017 35.9799 3.59618C36.4175 2.73122 36.9425 2.14674 37.6426 1.99802C38.2115 1.87664 38.8679 2.04667 39.6993 2.50813C41.0996 3.296 42.7623 4.9029 44.8627 7.50927C46.7006 9.79086 48.2325 12.3611 50.0266 14.6952C52.8271 18.3492 55.7588 22.0523 59.0406 24.984C59.2594 25.1693 59.5656 25.1508 59.7406 24.943C59.9594 24.7347 59.9158 24.4154 59.697 24.23C56.4589 21.3399 53.5709 17.6849 50.8141 14.0823C49.0638 11.7422 47.4886 9.16538 45.6507 6.87777C43.4628 4.13472 41.6687 2.46003 40.1809 1.6306C39.1307 1.01442 38.2115 0.8471 37.4238 1.00949C36.6362 1.17679 35.9362 1.69566 35.4111 2.52782C34.711 3.62898 34.2295 5.31516 33.9232 7.38516C32.8729 14.3404 33.7484 25.7615 33.3108 33.0174C33.2233 34.8359 33.0043 36.3871 32.698 37.5259C32.523 38.2012 32.3041 38.7217 31.954 39.0339C30.51 40.4981 28.8037 40.895 26.9658 40.7824C25.0405 40.6626 22.9401 39.9874 20.8397 39.3368C17.5578 38.3072 14.1882 37.3619 11.2564 38.4461C8.32458 39.532 5.69908 42.6479 4.03626 49.9055C3.94874 50.1772 4.12369 50.4489 4.38624 50.5118C4.64879 50.5747 4.95527 50.4058 4.99903 50.134Z"
                                            fill="currentcolor" />
                                          <path fillRule="evenodd" clipRule="evenodd"
                                            d="M3.54456 49.7407C3.5008 49.6702 3.41312 49.4783 3.36936 49.3197C3.10681 48.5488 2.84451 47.3525 2.757 47.0015C1.79431 43.8965 1.00666 40.4208 1.00666 37.0949C1.00666 36.8161 0.787614 36.5903 0.525064 36.5908C0.218755 36.5914 -0.00012207 36.8177 -0.00012207 37.0966C-0.00012207 40.5187 0.831287 44.0955 1.75021 47.2907C1.88149 47.6467 2.14404 48.861 2.40659 49.644C2.49411 49.9255 2.58188 50.1584 2.6694 50.305C2.75691 50.4253 2.84426 50.5078 2.93177 50.5598C3.10681 50.6943 3.36962 50.7599 3.63217 50.7511C3.93847 50.7413 4.28846 50.6401 4.63852 50.4685C5.38242 50.1328 6.2575 49.5188 6.95763 49.0332C7.35146 48.7544 7.70161 48.5166 7.9204 48.4438C9.80201 47.82 11.8585 48.4848 13.4338 50.6434C13.6088 50.8676 13.9154 50.9162 14.1342 50.7511C14.353 50.586 14.3966 50.2694 14.2654 50.0447C12.34 47.4559 9.88944 46.7358 7.61401 47.4848C7.04515 47.6653 5.82008 48.6615 4.72612 49.2979C4.37606 49.4799 4.06949 49.6297 3.80694 49.703C3.71943 49.7243 3.67567 49.7391 3.58815 49.7413C3.58815 49.7424 3.54456 49.744 3.54456 49.7407Z"
                                            fill="currentcolor" />
                                        </svg>
                                      </span>
                                      <p>{inner_item.offer}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    }
                    {i === 2 &&
                      <div className="tp-blog-inner">
                        <div className="row gx-45">
                          {item.tab_items?.map((inner_item, index) =>
                            <div key={index} className="col-xl-4 col-lg-4 mb-70">
                              <div className="tp-blog-item">
                                <div className="tp-blog-thumb fix">
                                  <Link href="/blog-details">
                                    <Image className="w-100" src={inner_item.img} alt="image-here" />
                                  </Link>
                                </div>
                                <div className="tp-blog-content">
                                  <h4 className="tp-blog-title-sm">
                                    <Link href="/blog-details">{inner_item.title}</Link></h4>
                                  <div className="tp-blog-meta d-flex justify-content-between align-items-center">
                                    <span>{inner_item.date}</span>
                                    <span><Link href="/blog-details">{inner_item.category}</Link></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    }

                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceAreaHomeOne;