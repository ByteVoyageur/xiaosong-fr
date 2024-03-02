'use client';

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import project_img_1 from "@/assets/img/portfolio/3/portfolio-1.jpg";
import project_img_2 from "@/assets/img/portfolio/3/portfolio-2.jpg";
import project_img_3 from "@/assets/img/portfolio/3/portfolio-3.jpg";
import project_img_4 from "@/assets/img/portfolio/3/portfolio-4.jpg";


type DataType = StaticImageData[];
const project_imgs: DataType = [project_img_1, project_img_2, project_img_3, project_img_4];

const ProjectAreaHomeThree = () => {


  const hoverTextRefs: React.RefObject<HTMLDivElement>[] | any = [];
  const moveText = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const hoverTextRef = hoverTextRefs[index];

    if (hoverTextRef.current) {
      const item = hoverTextRef.current.getBoundingClientRect();
      const x = e.clientX - item.left; 
      const y = e.clientY - item.top;

      const children = hoverTextRef.current.children;
      if (children[0] && children[0].children[2]) { 
        (children[0].children[2] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };



  return (
    <>
      <div className="tp-project-3__area p-relative black-bg-3 pt-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-3__title-box pb-30 text-center portfolio-sec-pin">
                <h3 className="tp-section-title-3 tp_title_anim">Featured Projects</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-portfolio-item-wrapper-3">

                {project_imgs.map((img, index) =>
                  <div key={index} className="tp-portfolio-item-3 portfolio-panel pb-80 tp-hover-reveal-text"
                    ref={(element) => {
                      hoverTextRefs[index] = React.createRef();
                      hoverTextRefs[index].current = element;
                    }}
                    onMouseMove={(e) => moveText(e, index)} 
                  >
                    <Link href="/portfolio-details">
                      <Image src={img} style={{ height: 'auto' }} alt="image-here" />
                      <span></span>
                      <div className="tp-portfolio-view-btn-3">
                        <span>View <br /> Work</span>
                      </div>
                    </Link>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAreaHomeThree;



