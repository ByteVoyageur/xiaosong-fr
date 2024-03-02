
'use client'; 
import UseHoverReveal from '@/hooks/UseHoverReveal';
import React from 'react';

interface DataType {
  title: string;
  bg_img: string;
}

const info_data: DataType[] = [
  {
    title: "Product Design",
    bg_img: "/assets/img/about/ab-1.png",
  },
  {
    title: "Photography",
    bg_img: "/assets/img/about/ab-2.png",
  },
  {
    title: "Web Design",
    bg_img: "/assets/img/about/ab-3.png",
  },
  {
    title: "Graphic Design",
    bg_img: "/assets/img/about/ab-4.png",
  }
]


const AboutInfo = () => {
  const {handleMouseMove} = UseHoverReveal();
  return (
    <>
      <div id="about-info-area" className="ab-info__area black-bg-3 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ab-info__text">

                <div>
                  I'm Diego <span className="line"></span> a self though & self learned designer
                  based in USA. I started as a financial planner & social
                  media marketer, but now I do mix of everything from

                  {info_data.map((item, index) =>
                    <React.Fragment key={index}>
                      <a className="tp-hover-reveal-item" href="#" onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                        {item.title}
                        <span></span>
                        <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                      </a>, {' '}
                    </React.Fragment>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;