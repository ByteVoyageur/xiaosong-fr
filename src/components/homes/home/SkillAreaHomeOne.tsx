'use client'
import React, { useEffect } from 'react';
// skill images
import skill_img_1 from "@/assets/img/skill/angular.png";
import skill_img_2 from "@/assets/img/skill/wp.png";
import skill_img_3 from "@/assets/img/skill/nodejs.png";
import skill_img_4 from "@/assets/img/skill/html.png";
import skill_img_5 from "@/assets/img/skill/webflow.png";
import skill_img_6 from "@/assets/img/skill/vue.png";

import skill_img_7 from "@/assets/img/skill/figma.png";
import skill_img_8 from "@/assets/img/skill/sketch.png";
import skill_img_9 from "@/assets/img/skill/photoshop.png";
import skill_img_10 from "@/assets/img/skill/xd.png";
import skill_img_11 from "@/assets/img/skill/in.png";
import skill_img_12 from "@/assets/img/skill/ai.png";
import Image from 'next/image';

const skill_content = {
  subtitle: "Advantage",
  title: "Skills & tools",
  info: "For those who know what they're looking for..",
  skill_data: [
    {
      tab_id: "tech",
      items: [
        {
          img: skill_img_1,
          title: "Angular",
          percent: 85
        },
        {
          img: skill_img_2,
          title: "WordPress",
          percent: 95
        },
        {
          img: skill_img_3,
          title: "NodeJS",
          percent: 60
        },
        {
          img: skill_img_4,
          title: "HTML",
          percent: 97
        },
        {
          img: skill_img_5,
          title: "Webflow",
          percent: 80,
        },
        {
          img: skill_img_6,
          title: "Vue",
          percent: 90
        }
      ],
    },
    {
      tab_id: "design",
      items: [
        {
          img: skill_img_7,
          title: "Figma",
          percent: 95,
        },
        {
          img: skill_img_8,
          title: "Sketch",
          percent: 82
        },
        {
          img: skill_img_9,
          title: "Photoshop",
          percent: 98
        },
        {
          img: skill_img_10,
          title: "Adobe XD",
          percent: 85
        },
        {
          img: skill_img_11,
          title: "InVision",
          percent: 90
        },
        {
          img: skill_img_12,
          title: "Illustrator",
          percent: 80
        }

      ],
    }
  ]
}
const { subtitle, title, info, skill_data } = skill_content

const SkillAreaHomeOne = () => {

  useEffect(() => {
    function tpTabLine2() {
      const marker = document.querySelector('#lineMarker') as HTMLElement;
      const item = document.querySelectorAll('.tp-marker-tab button') as NodeListOf<HTMLButtonElement>;

      // Find the initially active element
      const initiallyActive = document.querySelector('.tp-marker-tab .nav-link.active') as HTMLElement;

      // Set the initial width of the marker based on the initially active element
      if (initiallyActive) {
        marker.style.left = initiallyActive.offsetLeft + 'px';
        marker.style.width = initiallyActive.offsetWidth + 'px';
      }

      function indicator(e: HTMLElement) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
      }

      item.forEach(link => {
        link.addEventListener('click', (e) => {
          indicator(e.target as HTMLElement);
        });
      }); 

      marker.style.display = 'block';

      function anchorWidthCounter() {
        let anchorWidths = 0;
        let a: HTMLElement;
        let aWidth: number;
        let aPadLeft: number;
        let aPadRight: number;
        let aTotalWidth: number;

        item.forEach((elem) => {
          const activeTest = elem.classList.contains('active');

          if (activeTest) {
            // Break out of the loop.
            return;
          }

          a = elem.parentElement as HTMLElement; // Get the parent element
          aWidth = a.offsetWidth;
          aPadLeft = parseFloat(getComputedStyle(a).paddingLeft);
          aPadRight = parseFloat(getComputedStyle(a).paddingRight);
          aTotalWidth = aWidth + aPadLeft + aPadRight;

          anchorWidths = anchorWidths + aTotalWidth;
        });

        return anchorWidths;
      }
    }

    tpTabLine2();
  }, []);



  return (
    <>
      <section className="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix theme-bg-2" style={{backgroundImage: 'url(/assets/img/skill/bg-distort.png)'}}>
        <div className="tp-skill-shape">
          <span className="tp-skill-shape-1"></span>
          <span className="tp-skill-shape-2"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-section-title">
                <div className="tp-section-title-wrapper tp_text_anim mb-30 text-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title">{title}</h3>
                  </div>
                  <p>{info}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-tab tp-tab d-flex align-items-center justify-content-center mb-70">
                <nav>
                  <div className="nav nav-tabs tp-marker-tab" id="nav-tab" role="tablist">
                    {skill_data.map((item, i) =>
                      <button key={i} className={`nav-link ${i === 1 ? 'active' : ''}`} id={`nav-${item.tab_id}-tab`} data-bs-toggle="tab"
                        data-bs-target={`#nav-${item.tab_id}`} type="button" role="tab" aria-controls={`nav-${item.tab_id}`}
                        aria-selected={`${i === 0 ? 'false' : 'true'}`} tabIndex={-1}> {item.tab_id}
                      </button>
                    )}
                    <span id="lineMarker"></span>
                  </div>
                </nav>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tab-content" id="nav-tabContent">

                {skill_data.map((item, i) =>
                  <div key={i} className={`tab-pane fade ${i === 1 ? 'show active' : ''}`}
                    id={`nav-${item.tab_id}`} role="tabpanel" aria-labelledby={`nav-${item.tab_id}-tab`} tabIndex={0}>
                    <div className="tp-skill-tab-content tp-skill-radius">
                      <div className="row">
                        {item.items.map((inner_item, index) =>
                          <div key={index} className="col-xl-2 col-lg-3 col-md-3 col-6">
                            <div className="tp-skill-item text-center">
                              <div
                                className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                                <div className="tp-skill-icon">
                                  <span>
                                    <Image src={inner_item.img} alt="image-here" />
                                  </span>
                                </div>
                                <h3 className="tp-skill-count"><span>{inner_item.percent}</span>%</h3>
                              </div>
                              <div className="tp-skill-content">
                                <h3 className="tp-skill-title">{inner_item.title}</h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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

export default SkillAreaHomeOne;