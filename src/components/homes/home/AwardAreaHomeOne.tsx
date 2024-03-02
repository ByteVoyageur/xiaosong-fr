'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { MouseEvent } from 'react';

import AwardUpArrowIcon from '@/svg/home/AwardIcons/AwardUpArrowIcon';
import AwardLeftArrowIcon from '@/svg/home/AwardIcons/AwardLeftArrowIcon';
import award_start from "@/assets/img/award/shape/award-shape-1.png";
import UseHoverReveal from '@/hooks/UseHoverReveal';


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  award_data: {
    id: number;
    img: string;
    company: string;
    date: string;
  }[];
}


const award_content: DataType = {
  subtitle: "Award",
  title: <>Awards & <br /> recognitions</>,
  award_data: [
    {
      id: 1,
      img: "/assets/img/award/award-5.jpg",
      company: "Awwwards SOTD",
      date: "FOR DISPLAY 2023",
    },
    {
      id: 2,
      img: "/assets/img/award/award-6.jpg",
      company: "Wix.Com",
      date: "INTERVIEW 2022",
    },
    {
      id: 3,
      img: "/assets/img/award/award-10.jpg",
      company: "CSS Awards",
      date: "FEATURE 2021",
    },
    {
      id: 4,
      img: "/assets/img/award/award-1.jpg",
      company: "Muzli",
      date: "FEATURE 2020",
    },
    {
      id: 5,
      img: "/assets/img/award/award-4.jpg",
      company: "Awwwards",
      date: "FOR MUTEZA 2019",
    },
    {
      id: 6,
      img: "/assets/img/award/award-3.jpg",
      company: "Chapters Studio",
      date: "FOR DISPLAY 2018",
    }
  ]
}

const { subtitle, title, award_data } = award_content;
const AwardAreaHomeOne = ({ style_2 }: {style_2?: boolean}) => {
  const {handleMouseMove} = UseHoverReveal();
  const bg_img  = style_2 ? null : '/assets/img/bg/distort-bg.png';


  return (
    <>

      <section 
      style={{ backgroundImage: `url(${bg_img})` }} 
      className={`tp-award-area pt-120 ${style_2 ? 'tp-award-customize black-bg-3 pb-50' : 'theme-bg pb-120 tp-bg-light p-relative'}`}>
        <div className="container">
          <div className={`tp-award-inner pb-80 ${style_2 ? '' : 'p-relative'}`}>
            {style_2 ? null : <span className="tp-award-bottom-border"></span>}
            <div className="row">
              <div className="col-xl-5">
                <div className="tp-award-wrapper">
                  <div className="tp-section-title-wrapper mb-30">
                    <div className={`tp-section-title-inner p-relative ${style_2 ? '' : 'tp_title_anim'}`}>
                      {style_2 ? null : <span className="tp-section-subtitle tp-award-subtitle">{subtitle}</span>}
                      <h3 className={`tp-section-title ${style_2 ? 'tp_title_anim' : ''}`}>{title}</h3>
                    </div>
                  </div>
                  <div className="tp-award-text-wrapper p-relative">
                    <h3 className="tp-award-text-outline d-none d-xl-block" data-speed="1.1" data-lag="0.1">{subtitle}</h3>
                    <h3 className="tp-award-text-fill d-none d-xl-block" data-speed="1.3" data-lag="0.2">{subtitle} </h3>
                    <div className="tp-award-shape">
                      <Image className="tp-award-shape-1" data-speed="1" data-lag="0.1" src={award_start} alt="diego" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="tp-award-item-wrapper pt-35 pl-70">
                  {award_data.map((award) => (
                    <div key={award.id} className="tp-award-item p-relative tp-hover-reveal-item" 
                    onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                      <Link href="/about" className="d-block">
                        <div
                          className="tp-award-item-inner d-flex align-items-center justify-content-between flex-wrap">
                          <div className="tp-award-arrow">
                            <AwardLeftArrowIcon />
                          </div>
                          <div className="tp-award-content">
                            <h3 className="tp-award-title">{award.company}</h3>
                            <p>{award.date}</p>
                          </div>
                          <div className="tp-award-btn-wrapper">
                            <span className="tp-award-btn">
                              <span>
                                <AwardUpArrowIcon />
                                <AwardUpArrowIcon />
                              </span>
                            </span>
                          </div>
                        </div>
                      </Link>
                      <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${award.img})` }}></div>
                      <span className="tp-award-inner-border"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardAreaHomeOne;