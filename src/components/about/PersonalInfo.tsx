'use client';
import Image from "next/image";

import whatsap from "@/assets/img/about/whatsap.png";
import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png"; 


interface DataType {
  subtitle: string;
  title: string;
  email: string;
  phone: string;
  skillsets_data: {
    id: number;
    title: string;
    percent: number;
  }[];
  experience_data: {
    id: number;
    time: string;
    designation: string;
    company: string;
  }[];
  education_data: {
    id: number;
    time: string;
    designation: string;
    collage: string;
  }[];
}

const personal_content: DataType = {
  subtitle: 'Personal Info',
  title: 'Perceived end knowledge certainly day sweetness why cordially.',
  email: "example@gmail.com",
  phone: "+491 234 5678",
  skillsets_data: [
    {
      id: 1,
      title: "Figma",
      percent: 90
    },
    {
      id: 2,
      title: "Sketch",
      percent: 82
    },
    {
      id: 3,
      title: "Photoshop",
      percent: 65
    },
    {
      id: 4,
      title: "Invision",
      percent: 58
    }
  ],
  experience_data: [
    {
      id: 1,
      time: "2022 - Present",
      designation: "UI/UX Lead Designer",
      company: "Amazon INC",
    },
    {
      id: 2,
      time: "2018 - 2022",
      designation: "Product Lead Designer",
      company: "Amazon INC",
    },
    {
      id: 3,
      time: "2016 - 2018",
      designation: "Graphic Designer",
      company: "Amazon INC",
    }

  ],
  education_data: [
    {
      id: 1,
      time: "2014 - 2016",
      designation: "Stanford University",
      collage: "of California.",
    },
    {
      id: 2,
      time: "2012 - 2014",
      designation: "Specialization Course.",
      collage: "MIT University",
    },
    {
      id: 3,
      time: "2009 - 2012",
      designation: "Level High School.",
      collage: "San Fransisco",
    }

  ]
}

const { subtitle, title, email, phone, skillsets_data, experience_data, education_data } = personal_content

const PersonalInfo = () => {

  return (
    <>
      <div className="ab-personal-info__area black-bg-3 pb-30 tp-personal-info-pin-section">
        <div className="container">
          <div className="row">

            <div className="col-xl-6 col-lg-6">
              <div className="tp-personal-info-pin">
                <div className="ab-personal-info__left-box mr-200">
                  <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative"
                    data-tp-throwable-scene="true">
                    <div className="ab-personal-info__left-content">
                      <h4 className="ab-personal-info__left-content-title">
                        <span>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M26.7012 1.29878C25.8354 0.433026 24.7007 0.00012207 23.5659 0.00012207C22.4311 0.00012207 21.2964 0.433085 20.4306 1.29878L18.792 2.93738L25.0623 9.20812L26.7012 7.56934C27.567 6.70353 27.9999 5.56887 27.9999 4.43409C27.9999 3.29925 27.567 2.16446 26.7012 1.29878Z"
                              fill="currentcolor" />
                            <path
                              d="M1.96617 19.7631L0.108182 21.6212L0 27.9999L6.37874 27.8917L8.23685 26.0336L1.96617 19.7631Z"
                              fill="currentcolor" />
                            <path
                              d="M17.9672 3.76208L11.5667 10.1625L2.79102 18.9382L9.06158 25.2088L17.8373 16.4331L24.2376 10.0329L17.9672 3.76208ZM10.1426 18.6818L9.31775 17.857L10.1238 17.0509L10.9487 17.8758L10.1426 18.6818ZM12.2686 16.5558L11.4437 15.731L12.2686 14.9061L13.0934 15.731L12.2686 16.5558ZM14.4134 14.4111L13.5886 13.5862L14.414 12.7614L15.2388 13.5862L14.4134 14.4111ZM16.5587 12.2662L15.7339 11.4414L16.5587 10.6166L17.3836 11.4414L16.5587 12.2662Z"
                              fill="currentcolor" />
                            <path d="M27.9982 26.8334H13.3506V28H27.9982V26.8334Z" fill="currentcolor" />
                          </svg>
                        </span>
                        {subtitle}
                      </h4>
                      <p>{title}</p>
                      <a href={`mailto:${email}`}>{email}</a>
                      <a href={`tel:${phone}`}><span>
                        <Image src={whatsap} alt="image-here" /></span>{phone}</a>
                    </div> 

                    <div className="tp-services-capsule-item-wrapper">
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Frontend</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Phototyping</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Design solutions</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Consulting</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Brand strategy</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Consulting</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Brand strategy</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>UI/UX Design</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Design Audit</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Testing</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="">
                          <Image src={shape_1} alt="brand-img" />
                        </span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="">
                          <Image src={shape_2} alt="brand-img" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="ab-personal-info__right-wrap">

                <div className="ab-personal-info__skill mb-85 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s">
                  <h4 className="ab-personal-info__right-title">
                    <span>
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M17.9306 17.0117C18.1464 17.2396 18.2808 17.5397 18.311 17.8608C18.3412 18.1819 18.2652 18.5041 18.0961 18.7726C17.9269 19.0411 17.6751 19.2391 17.3835 19.333C17.0918 19.4269 16.7784 19.4108 16.4968 19.2875C16.2151 19.1641 15.9825 18.9412 15.8387 18.6567C15.6949 18.3721 15.6488 18.0436 15.7082 17.7271C15.7676 17.4106 15.9288 17.1257 16.1645 16.921C16.4001 16.7162 16.6955 16.6043 17.0003 16.6043C17.1731 16.6042 17.3442 16.64 17.5038 16.7099C17.6634 16.7798 17.8085 16.8824 17.9307 17.0117H17.9306ZM17.5155 20.4206V27.4166H20.9695C21.014 27.3602 21.0689 27.3138 21.1308 27.2805C22.9641 26.298 24.4315 24.6905 25.2963 22.7172C26.1612 20.7439 26.3731 18.5197 25.8978 16.4033C25.4226 14.287 24.288 12.4017 22.6769 11.0514C21.0658 9.7011 19.0721 8.96453 17.0173 8.96042C14.9624 8.95631 12.9661 9.6849 11.3501 11.0287C9.73424 12.3725 8.59291 14.2533 8.11015 16.3678C7.62739 18.4822 7.83133 20.7072 8.68911 22.6839C9.54689 24.6607 11.0085 26.2741 12.8383 27.2639C12.9136 27.2979 12.9803 27.3502 13.0328 27.4166H16.485V20.4206C15.9221 20.2863 15.4257 19.9371 15.0908 19.4397C14.7559 18.9423 14.606 18.3316 14.6698 17.7245C14.7335 17.1174 15.0065 16.5565 15.4365 16.1492C15.8665 15.7418 16.4232 15.5166 17.0002 15.5166C17.5772 15.5166 18.134 15.7418 18.564 16.1492C18.9939 16.5565 19.2669 17.1174 19.3307 17.7245C19.3945 18.3316 19.2446 18.9423 18.9097 19.4397C18.5748 19.9371 18.0784 20.2863 17.5155 20.4206ZM16.485 0.545464C16.485 0.400798 16.5393 0.262057 16.6359 0.159763C16.7325 0.0574683 16.8636 0 17.0002 0C17.1369 0 17.2679 0.0574683 17.3646 0.159763C17.4612 0.262057 17.5155 0.400798 17.5155 0.545464V4.2049C17.5155 4.34957 17.4612 4.48831 17.3646 4.5906C17.2679 4.6929 17.1369 4.75037 17.0002 4.75037C16.8636 4.75037 16.7325 4.6929 16.6359 4.5906C16.5393 4.48831 16.485 4.34957 16.485 4.2049V0.545464ZM28.2926 5.27172C28.3404 5.22106 28.3972 5.18087 28.4597 5.15344C28.5222 5.12602 28.5892 5.11189 28.6568 5.11187C28.7245 5.11184 28.7915 5.12593 28.854 5.15331C28.9165 5.1807 28.9733 5.22085 29.0211 5.27147C29.069 5.32209 29.1069 5.3822 29.1328 5.44836C29.1588 5.51451 29.1721 5.58542 29.1721 5.65704C29.1721 5.72865 29.1588 5.79957 29.133 5.86574C29.1071 5.93192 29.0692 5.99205 29.0214 6.04271L26.577 8.62978C26.4804 8.73208 26.3493 8.78956 26.2127 8.78956C26.076 8.78957 25.9449 8.73211 25.8483 8.62981C25.7517 8.52751 25.6974 8.38877 25.6974 8.24409C25.6973 8.09942 25.7516 7.96067 25.8483 7.85836L28.2926 5.27172ZM33.485 17.4517C33.6216 17.4517 33.7526 17.5091 33.8492 17.6114C33.9457 17.7136 34 17.8523 34 17.9969C34 18.1415 33.9457 18.2801 33.8492 18.3824C33.7526 18.4846 33.6216 18.542 33.485 18.542H30.0286C29.892 18.542 29.761 18.4846 29.6645 18.3824C29.5679 18.2801 29.5136 18.1415 29.5136 17.9969C29.5136 17.8523 29.5679 17.7136 29.6645 17.6114C29.761 17.5091 29.892 17.4517 30.0286 17.4517H33.485ZM29.0214 29.952C29.0692 30.0027 29.1071 30.0628 29.133 30.129C29.1588 30.1951 29.1721 30.2661 29.1721 30.3377C29.1721 30.4093 29.1588 30.4802 29.1328 30.5464C29.1069 30.6125 29.069 30.6726 29.0211 30.7232C28.9733 30.7739 28.9165 30.814 28.854 30.8414C28.7915 30.8688 28.7245 30.8829 28.6568 30.8829C28.5892 30.8828 28.5222 30.8687 28.4597 30.8413C28.3972 30.8138 28.3404 30.7737 28.2926 30.723L25.8483 28.1354C25.8004 28.0847 25.7625 28.0246 25.7366 27.9584C25.7108 27.8922 25.6975 27.8213 25.6975 27.7497C25.6975 27.6051 25.7519 27.4664 25.8485 27.3641C25.9451 27.2619 26.0762 27.2045 26.2128 27.2045C26.3494 27.2046 26.4804 27.2621 26.577 27.3644L29.0214 29.952ZM5.70781 30.723C5.61123 30.8253 5.48022 30.8828 5.34359 30.8829C5.20697 30.8829 5.07592 30.8255 4.97928 30.7232C4.88264 30.621 4.82833 30.4823 4.82828 30.3377C4.82824 30.193 4.88247 30.0543 4.97905 29.952L7.42345 27.3644C7.52003 27.2621 7.65104 27.2046 7.78766 27.2045C7.92429 27.2045 8.05534 27.2619 8.15197 27.3641C8.24861 27.4664 8.30293 27.6051 8.30297 27.7497C8.30302 27.8943 8.24879 28.0331 8.15221 28.1354L5.70781 30.723ZM0.514992 18.542C0.378407 18.542 0.247417 18.4846 0.150838 18.3824C0.0542579 18.2801 0 18.1415 0 17.9969C0 17.8523 0.0542579 17.7136 0.150838 17.6114C0.247417 17.5091 0.378407 17.4517 0.514992 17.4517H3.97178C4.10836 17.4517 4.23935 17.5091 4.33593 17.6114C4.43251 17.7136 4.48677 17.8523 4.48677 17.9969C4.48677 18.1415 4.43251 18.2801 4.33593 18.3824C4.23935 18.4846 4.10836 18.542 3.97178 18.542H0.514992ZM4.97905 6.04256C4.88409 5.93991 4.83123 5.80173 4.83197 5.65805C4.83271 5.51438 4.88698 5.37681 4.98299 5.27526C5.079 5.1737 5.20899 5.11636 5.34471 5.1157C5.48043 5.11504 5.61092 5.1711 5.70781 5.27172L8.15221 7.85843C8.24884 7.96074 8.30312 8.09949 8.30311 8.24416C8.30311 8.38884 8.24881 8.52759 8.15217 8.62988C8.05553 8.73218 7.92447 8.78964 7.7878 8.78963C7.65114 8.78963 7.52008 8.73215 7.42345 8.62984L4.97905 6.04278V6.04256ZM20.8471 28.5065H13.1534V29.9276C13.1534 31.0077 13.5587 32.0435 14.2801 32.8072C15.0015 33.5709 15.98 34 17.0002 34C18.0205 34 18.999 33.5709 19.7204 32.8072C20.4418 32.0435 20.8471 31.0077 20.8471 29.9276V28.5065Z"
                          fill="currentcolor" />
                      </svg>
                    </span> {' '}
                    Skillsets
                  </h4>
                  <div className="p-progress-bar-wrap">
                    {skillsets_data.map((item, index) => (
                      <div key={index} className="tp-progress-bar-item">
                        <label>{item.title}</label>
                        <div className="tp-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              data-wow-delay=".1s"
                              data-wow-duration="2s"
                              role="progressbar"
                              data-width={`${item.percent}%`}
                              aria-valuenow={item.percent}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{
                                width: `${item.percent}%`,
                                visibility: "visible",
                                animationDuration: "2s",
                                animationDelay: "0.1s",
                                animationName: "slideInLeft"
                              }}>
                              <span>{item.percent}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

                <div className="ab-personal-info__exprience mb-85 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                  <h4 className="ab-personal-info__right-title">
                    <span>
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.002 0L16.3174 11.6667L28.002 14L16.3174 16.3333L14.002 28L11.6555 16.3333L0.00195312 14L11.6555 11.6667L14.002 0Z" fill="currentcolor" />
                      </svg>
                    </span>{' '}
                    Experience
                  </h4>

                  {experience_data.map((item, index) => (
                    <div key={index} className="ab-personal-info__exprience-box d-flex align-items-start ">
                      <span className="ab-personal-info__exprience-length">{item.time}</span>
                      <div className="ab-personal-info__exprience-content">
                        <h4 className="ab-personal-info__exprience-title">{item.designation}</h4>
                        <span>{item.company}</span>
                      </div>
                    </div>
                  ))}

                </div>

                <div className="ab-personal-info__exprience mb-85 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                  <h4 className="ab-personal-info__right-title">
                    <span>

                      <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3744 5.36788L16.3119 0.0534375C16.1101 -0.0178125 15.8899 -0.0178125 15.6881 0.0534375L0.625626 5.36788C0.251126 5.5 0.000500749 5.85375 7.49189e-07 6.25087C-0.000499251 6.648 0.249313 7.00231 0.623501 7.13531L15.686 12.4901C15.7876 12.5262 15.8938 12.5443 16 12.5443C16.1063 12.5443 16.2124 12.5262 16.314 12.4901L31.3765 7.13531C31.7507 7.00231 32.0004 6.648 32 6.25087C31.9995 5.85375 31.7489 5.5 31.3744 5.36788Z" fill="currentcolor" />
                        <path d="M29.748 17.8816V9.7041L27.873 10.3707V17.8816C27.3083 18.2067 26.9277 18.8157 26.9277 19.5142C26.9277 20.2125 27.3083 20.8217 27.873 21.1467V25.754C27.873 26.2717 28.2928 26.6915 28.8105 26.6915C29.3283 26.6915 29.748 26.2717 29.748 25.754V21.1468C30.3128 20.8218 30.6934 20.2126 30.6934 19.5142C30.6934 18.8158 30.3129 18.2067 29.748 17.8816Z" fill="currentcolor" />
                        <path d="M15.9996 14.4192C15.6778 14.4192 15.3608 14.3645 15.0575 14.2566L6.58984 11.2463V15.3718C6.58984 16.3812 7.64278 17.2347 9.71941 17.9087C11.5295 18.4962 13.7598 18.8198 15.9996 18.8198C18.2393 18.8198 20.4697 18.4962 22.2798 17.9087C24.3564 17.2347 25.4093 16.3812 25.4093 15.3718V11.2463L16.9417 14.2566C16.6383 14.3645 16.3214 14.4192 15.9996 14.4192Z" fill="currentcolor" />
                      </svg>

                    </span> {' '}
                    Education
                  </h4>

                  {education_data.map((item, index) => (
                    <div key={index} className="ab-personal-info__exprience-box d-flex align-items-start ">
                      <span className="ab-personal-info__exprience-length">{item.time}</span>
                      <div className="ab-personal-info__exprience-content">
                        <h4 className="ab-personal-info__exprience-title">{item.designation}</h4>
                        <span>{item.collage}</span>
                      </div>
                    </div>
                  ))}

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;