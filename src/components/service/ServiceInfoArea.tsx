
import ServiceArrowIcon from '@/svg/service/ServiceArrowIcon';
import ServiceBrandingIcon from '@/svg/service/ServiceBrandingIcon';
import ServiceDevelopmentIcon from '@/svg/service/ServiceDevelopmentIcon';
import ServiceMobileIcon from '@/svg/service/ServiceMobileIcon';
import ServiceSoftwareIcon from '@/svg/service/ServiceSoftwareIcon';
import ServiceUiIcon from '@/svg/service/ServiceUiIcon';
import ServiceWebIcon from '@/svg/service/ServiceWebIcon';
import StarIcon from '@/svg/service/StarIcon';
import React from 'react';


interface DataType {
  description: React.JSX.Element;
  design_data: {
      id: number;
      icon: React.JSX.Element;
      title: string;
  }[];
  development_data: {
      id: number;
      icon: React.JSX.Element;
      title: string;
  }[];
}

const service_info_content: DataType = {
  description: <>Refined branding and web design <br /> strategically created to tell your story, make <br /> a connection and establish a cutting-edge online and offline presence.</>,
  design_data: [
    {
      id: 1,
      icon: <ServiceWebIcon />,
      title: "Web Design",
    },
    {
      id: 2,
      icon: <ServiceUiIcon />,
      title: "UI/UX Design",
    },
    {
      id: 3,
      icon: <ServiceMobileIcon />,
      title: "Mobile App Design",
    },
    {
      id: 4,
      icon: <ServiceBrandingIcon />,
      title: "Branding",
    },

  ],
  development_data: [
    {
      id: 1,
      icon: <ServiceDevelopmentIcon />,
      title: "Web Development",
    },
    {
      id: 2,
      icon: <ServiceSoftwareIcon />,
      title: "Software Development",
    },
    {
      id: 3,
      icon: <ServiceMobileIcon />,
      title: "CMS Development",
    },
    {
      id: 4,
      icon: <ServiceBrandingIcon />,
      title: "Front-End Development",
    },


  ],
}

const { description, design_data, development_data } = service_info_content


const ServiceInfoArea = () => {
  return (
    <>
      <div className="sv-inner__info-area pt-120 pb-90 black-bg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="sv-inner__info-title-box mb-90">
                <h4 className="sv-inner__info-title tp_title_anim">
                  {description}
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="row mb-100">
                <div className="col-xl-4">
                  <div className="sv-inner__info-service">
                    <h4 className="sv-inner__left-title">
                      <span>
                        <StarIcon />
                      </span> {' '}
                      Design
                    </h4>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="sv-inner__service-category-wrap">

                    {design_data.map((item, i) => (
                      <div key={i} className="sv-inner__service-category">
                        <a className="d-flex align-items-center justify-content-between" href="#">
                          <div className="sv-inner__service-category-content">
                            <span>
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <div className="sv-inner__service-category-link">
                            <span>
                              <ServiceArrowIcon />
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4">
                  <div className="sv-inner__info-service">
                    <h4 className="sv-inner__left-title">
                      <span>
                        <StarIcon />
                      </span> {' '}
                      Development
                    </h4>
                  </div>
                </div>
                <div className="col-xl-8">

                  <div className="sv-inner__service-category-wrap">
                    {development_data.map((item, i) => (
                      <div key={i} className="sv-inner__service-category">
                        <a className="d-flex align-items-center justify-content-between" href="#">
                          <div className="sv-inner__service-category-content">
                            <span>
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <div className="sv-inner__service-category-link">
                            <span>
                              <ServiceArrowIcon />
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
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

export default ServiceInfoArea;