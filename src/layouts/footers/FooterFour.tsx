
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import shape_1 from "@/assets/img/footer/footer-shape-2.png";
import FooterLogo from "@/assets/img/logo/logo-2.png";


import HeroGoogleIcon from '@/svg/home/HeroIcons/HeroGoogleIcon';
import HeroEmailIcon from '@/svg/home/HeroIcons/HeroEmailIcon';
import HeroBehanceIcon from '@/svg/home/HeroIcons/HeroBehanceIcon';
import YoutubeIconHeorAreaHomeTwo from '@/svg/home-2/YoutubeIconHeorAreaHomeTwo'; 


interface DataType {
  sm_info: React.JSX.Element;
  social_links: {
      id: number;
      cls: string;
      link: string;
      icon: React.JSX.Element;
  }[];
  links: {
      title: string;
      link: string;
  }[];
  address: React.JSX.Element;
  email: string;
  phone: string;
}

const footer_content: DataType = {
  sm_info: <>Feel free to reach out with questions <br /> or inquiries.</>,
  social_links: [
    {
      id: 1,
      cls: "gmail",
      link: "https://mail.google.com",
      icon: <HeroEmailIcon />,
    },
    {
      id: 2,
      cls: "dribble",
      link: "https://www.google.com",
      icon: <HeroGoogleIcon />,
    },
    {
      id: 3,
      cls: "behance",
      link: "https://www.behance.net",
      icon: <HeroBehanceIcon />,
    },
    {
      id: 4,
      cls: "youtube",
      link: "https://www.youtube.com",
      icon: <YoutubeIconHeorAreaHomeTwo />,
    },
  ],
  links: [
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ],
  address: <>California <span></span> <br /> 987 Design Blvd, Suite 543, Beverly Hills, CA 902</>,
  email: "hello@youremail.com",
  phone: "+1(789) 8001234",
}

const { sm_info, social_links, links, address, email, phone } = footer_content;

const FooterFour = () => {
  return (
    <>
      <footer>
        <div className="tp-footer-4__main-wrapper black-bg-2 p-relative z-index-1 fix" style={{ backgroundImage: "url(/assets/img/footer/overly-bg.png)" }}>
          <div className="tp-footer-4__area pt-80 pb-60">
            <div className="tp-footer-4__shape">
              <Image src={shape_1} alt="logo-here" />
            </div>
            <div className="container">
              <div className="row align-items-start">
                <div className="col-xl-4 col-lg-4 col-md-8 mb-40">
                  <div className="tp-footer-4__widget footer-col-4-1">
                    <div className="tp-footer-4__logo">
                      <Link href="/"><Image src={FooterLogo} alt="logo-here" /></Link>

                    </div>
                    <div className="tp-footer-4__content">
                      <p>{sm_info}</p>
                    </div>
                    <div className="tp-footer-4__social">
                      {social_links.map((item, index) => (
                        <Link href={item.link} key={index} target="_blank">
                          <span>
                            {item.icon}
                          </span>
                        </Link>
                      ))}

                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 mb-40">
                  <div className="tp-footer-4__widget footer-col-4-2">
                    <h4 className="tp-footer-4__widget-title">Explore</h4>
                    <ul>
                      {links.map((item, index) => (
                        <li key={index}><Link href={item.link}> <i className="fa-regular fa-arrow-right"></i> {item.title}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-8 mb-40">
                  <div className="tp-footer-4__widget footer-col-4-3">
                    <h4 className="tp-footer-4__widget-title">Address</h4>
                    <div className="tp-footer-4__widget-address">
                      <a href="https://www.google.com/maps" target="_blank">
                        {address}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 mb-40">
                  <div className="tp-footer-4__widget footer-col-4-4">
                    <h4 className="tp-footer-4__widget-title">Say Hello</h4>
                    <div className="tp-footer-4__widget-mail">
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                    <div className="tp-footer-4__widget-mail">
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright-4__area tp-copyright-4__bdr-top pt-20 pb-20">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-copyright-4__text text-center">  
                    <span>ThemePure @ {new Date().getFullYear()}. All Rights Reserved.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;