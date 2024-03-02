
import Link from 'next/link';
import React from 'react';
import Image from "next/image";

import service_thumbnail from '@/assets/img/services/sv-details.jpg';
import service_sm_thumb_1 from '@/assets/img/services/sv-details-1.jpg';
import service_sm_thumb_2 from '@/assets/img/services/sv-details-2.jpg';

interface DataType {
  subtitle: string,
  title: string,
  sm_info_1: React.JSX.Element,
  sm_info_2: React.JSX.Element,
  sm_info_3: React.JSX.Element,
  sm_info_4: React.JSX.Element,
  features_list: string[],
  sm_info_5: React.JSX.Element,
  side_title: string,
  categories: string[],
  text_box_title: React.JSX.Element,
  text_box_info: string,

}

const service_details_content: DataType = {
  subtitle: 'Design Studio',
  title: 'Logo and branding',
  sm_info_1: <>Branding is essential to establish yourself in the market <br /> in a unique and permanent way. At Riveal, we attach <br /> great importance. We seek to understand your business to better convey your values and your talent <br /> through your brand image.</>,
  sm_info_2: <>Explore our achievements and let yourself be <br /> convinced!</>,
  sm_info_3: <>Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience.</>,
  sm_info_4: <>Great user experience design lets users focus on the task they have to complete and evokes emotion without distracting them.!</>,
  features_list: [
    "Graphic research and production",
    "Presentation of your logo on different media",
    "Advice on the graphic orientation of your logo or its redesign",
    "Delivery of your logo in professional formats",
  ],
  sm_info_5: <>Great user experience design lets users focus on the task they have to complete &
  evokes emotion without distracting them. Bonus points for when it also looks & feels
  aesthetically pleasing!</>,
  side_title: "Full list of services",
  categories: [
    "Strategy",
    "Logo Design",
    "Graphic identity",
    "Web Design",
    "Development",
  ],
  text_box_title: <>Logo <br /> Design</>,
  text_box_info: "Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience.",  
}

const {
  subtitle,
  title,
  sm_info_1,
  sm_info_2,
  sm_info_3,
  sm_info_4,
  features_list,
  sm_info_5,
  side_title,
  categories,
  text_box_title,
  text_box_info,
} = service_details_content;

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details__area service-details__space pt-200 pb-120 black-bg-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__title-box mb-40">
                <span className="service-details__subtitle tp-char-animation">{subtitle}</span>
                <h4 className="service-details__title tp-char-animation">{title}</h4>
              </div>
            </div>
            <div className="row">
              <div className="offset-xl-4 col-xl-5">
                <div className="service-details__banner-text mb-80">
                  <p className="mb-30 tp_title_anim">{sm_info_1}</p>
                        <p className="tp_title_anim">{sm_info_2}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="service-details__tab-wrapper text-center mb-120">
                    <div className="service-details__tab-thumb">
                      <Image data-speed="0.4" src={service_thumbnail} style={{height: 'auto'}} alt="image-here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-7">
                  <div className="service-details__left-wrap">
                    <div className="service-details__left-text pb-20">
                      <p className="text-1 tp_title_anim">{sm_info_3}</p>
                      <p>{sm_info_4}</p>
                    </div>
                    <div className="service-details__fea-list">
                      <ul>
                        {features_list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))} 
                      </ul>
                    </div>
                    <div className="service-details__sm-thumb-wrap mb-60">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="service-details__sm-thumb">
                            <Image src={service_sm_thumb_1} style={{height: 'auto'}} alt="image-here" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="service-details__sm-thumb">
                            <Image src={service_sm_thumb_2} style={{height: 'auto'}} alt="image-here" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-details__left-text">
                      <p>{sm_info_5}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                  <div className="service-details__right-wrap fix p-relative">
                    <div className="service-details__rotate-text">
                      <span>{side_title}</span>
                    </div>
                    <div className="service-details__right-category">
                      {categories.map((item, index) => (
                        <Link key={index} href="#" className={index === 1 ? 'active' : ''}>{item}</Link>
                      ))} 
                    </div>
                    <div className="service-details__right-text-box">
                      <h4>{text_box_title}</h4>
                      <p className="mb-20">{text_box_info}</p>
                      <Link className="tp-btn-white" href="/contact">
                        Let's Talk
                        <span>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.9297 10.3651C5.12061 10.2162 5.29376 10.043 5.64006 9.69671L9.95722 5.37954C10.0616 5.27517 10.0138 5.0954 9.87438 5.04702C9.36479 4.87022 8.70189 4.53829 8.0818 3.9182C7.46171 3.29811 7.12978 2.63521 6.95299 2.12562C6.9046 1.98617 6.72483 1.9384 6.62046 2.04278L2.30329 6.35994L2.30328 6.35995C1.95699 6.70624 1.78385 6.87939 1.63494 7.0703C1.45928 7.29551 1.30868 7.53919 1.18581 7.79701C1.08164 8.01558 1.00421 8.24789 0.849336 8.71249L0.649225 9.31283L0.331026 10.2674L0.0326691 11.1625C-0.0435433 11.3911 0.0159628 11.6432 0.186379 11.8136C0.356795 11.984 0.608868 12.0435 0.837505 11.9673L1.73258 11.669L2.68717 11.3508L3.28751 11.1507C3.75211 10.9958 3.98442 10.9184 4.20299 10.8142C4.46082 10.6913 4.70449 10.5407 4.9297 10.3651Z"
                              fill="currentcolor" />
                            <path
                              d="M11.3089 4.02783C12.2304 3.10641 12.2304 1.61249 11.3089 0.691067C10.3875 -0.230356 8.89359 -0.230356 7.97217 0.691067L7.83337 0.82986C7.69944 0.963792 7.63876 1.15087 7.67222 1.3373C7.69327 1.45458 7.73229 1.62603 7.80327 1.83063C7.94522 2.23979 8.21329 2.77689 8.7182 3.2818C9.22311 3.78671 9.76021 4.05478 10.1694 4.19673C10.374 4.26772 10.5454 4.30673 10.6627 4.32778C10.8491 4.36124 11.0362 4.30056 11.1701 4.16663L11.3089 4.02783Z"
                              fill="currentcolor" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        );
};

        export default ServiceDetailsArea;