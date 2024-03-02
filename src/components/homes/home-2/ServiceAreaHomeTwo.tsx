"use client";
import Image from 'next/image';
import React, { MouseEvent } from 'react';


import service_start from "@/assets/img/services/shape/services-shape-3.png";
import RightArrowHomeTwo from '@/svg/home-2/RightArrowHomeTwo';
import UseHoverReveal from '@/hooks/UseHoverReveal';


interface DataType {
  id: number;
  accordion_id: string;
  bg_img: string;
  question: string;
  ans: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    accordion_id: "One",
    bg_img: "/assets/img/faq/faq-4.jpg",
    question: "Visual design",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
  {
    id: 2,
    accordion_id: "Two",
    bg_img: "/assets/img/faq/faq-1.jpg",
    question: "Product design",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
  {
    id: 3,
    accordion_id: "Three",
    bg_img: "/assets/img/faq/faq-2.jpg",
    question: "UI kits / Design systems",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
  {
    id: 4,
    accordion_id: "Four",
    bg_img: "/assets/img/faq/faq-3.jpg",
    question: "Strategy",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
]

const ServiceAreaHomeTwo = () => {
  const {handleMouseMove} = UseHoverReveal();
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-3 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper">
            <span className="tp-hero-2__circle-1"></span>
            <span className="tp-hero-2__circle-2"></span>
            <span className="tp-hero-2__circle-3"></span>
            <span className="tp-hero-2__circle-4"></span>
          </div>
          <div className="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
            <span></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__service-accordion">
                  <span className="tp-hero-2__service-title">
                    <Image className="tp-zoom-in-out" src={service_start} alt="image-here" />
                    OUR SERVICES
                  </span>

                  <div className="accordion" id="accordionExample">

                    {service_data.map((item, i) =>
                      <div key={i} className="accordion-items tp-hero-2__accordion-item tp-hover-reveal-item active" onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-buttons ${i === 0 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.accordion_id}`}
                            aria-expanded={`${i === 0 ? "true" : "false"}`}
                            aria-controls={`collapse${item.accordion_id}`}>
                            <RightArrowHomeTwo />
                            {item.question}<span>0{item.id}</span>
                            <span className="accordion-btn-wrap">
                              <span className="accordion-btn"></span>
                            </span>
                          </button>
                        </h2>
                        <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                        <div id={`collapse${item.accordion_id}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>{item.ans}</p>
                          </div>
                        </div>
                      </div>
                    )}
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

export default ServiceAreaHomeTwo;