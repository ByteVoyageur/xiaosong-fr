'use client';
import React, { useEffect, useState } from 'react';

import HeroGoogleIcon from '@/svg/home/HeroIcons/HeroGoogleIcon';
import HeroEmailIcon from '@/svg/home/HeroIcons/HeroEmailIcon';
import HeroBehanceIcon from '@/svg/home/HeroIcons/HeroBehanceIcon';
import YoutubeIconHeorAreaHomeTwo from '@/svg/home-2/YoutubeIconHeorAreaHomeTwo';
import Link from 'next/link';
import { gsap } from 'gsap'; 

interface DataType {
  id: number;
  cls: string;
  link: string;
  icon: React.JSX.Element;
}

const footer_links: DataType[] = [
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
]

 


const FooterTwo = () => {

  const [active, setActive] = useState(false);

  const toggleTheme = () => {
    const themeScheme = localStorage.getItem('tp_theme_scheme');
    if (themeScheme === 'tp-theme-dark') {
      tp_set_scheme('tp-theme-light');
    } else {
      tp_set_scheme('tp-theme-dark');
    }
  };

  const tp_set_scheme = (tp_theme: any) => {
    localStorage.setItem('tp_theme_scheme', tp_theme);
    document.documentElement.setAttribute('tp-theme', tp_theme);

    // Toggle body class
    document.body.classList.toggle('dark-theme', tp_theme === 'tp-theme-dark');
    document.body.classList.toggle('light-theme', tp_theme === 'tp-theme-light');

    // Toggle button class
    setActive(tp_theme === 'tp-theme-dark');
  };

  const tp_init_theme = () => {
    const themeInput = document.querySelector('.themepure-theme-toggle-input');

    if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-light') {
      tp_set_scheme('tp-theme-light');
    } else {
      tp_set_scheme('tp-theme-dark');
    }
  };

  useEffect(() => {
    tp_init_theme();

    const themeInput = document.querySelector('.themepure-theme-toggle-input');
    (themeInput as HTMLInputElement).addEventListener('change', toggleTheme);

    return () => {
      (themeInput as HTMLInputElement).removeEventListener('change', toggleTheme);
    };
  }, []);


  // paralax
  useEffect(() => {
    const allParalax = document.querySelectorAll('.parallax-wrap');
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.1;
    let active = false;

    allParalax.forEach(function (e) {
      e.addEventListener('mousemove', mouseMoveBtn);
    });

    function mouseMoveBtn(e: any) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      mouse.x = e.pageX;
      mouse.y = e.pageY - scrollTop;
    }

    gsap.ticker.add(updatePosition);

    function updatePosition() {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
    }

    document.querySelectorAll('.parallax-wrap').forEach((element) => {
      element.addEventListener('mouseenter', (e) => {
        gsap.to(element, { duration: 0.3, scale: 2 });
        gsap.to(Array.from(element.children), { duration: 0.3, scale: 0.5 });
        active = true;
      });

      element.addEventListener('mouseleave', (e) => {
        gsap.to(element, { duration: 0.3, scale: 1 });
        gsap.to(Array.from(element.children), { duration: 0.3, scale: 1, x: 0, y: 0 });
        active = false;
      });

      element.addEventListener('mousemove', (e) => {
        parallaxCursorBtn(e, element, 2);
        callParallaxBtn(e, element);
      });
    });

    function callParallaxBtn(e: any, parent: any) {
      parallaxItBtn(e, parent, parent.querySelector('.parallax-element'), 20);
    }

    function parallaxItBtn(e: any, parent: any, target: any, movement: any) {
      const boundingRect = parent.getBoundingClientRect();
      const relX = e.pageX - boundingRect.left;
      const relY = e.pageY - boundingRect.top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      gsap.to(target, {
        duration: 0.3,
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
        ease: Power2.easeOut,
      });
    }

    function parallaxCursorBtn(e: any, parent: any, movement: any) {
      const rect = parent.getBoundingClientRect();
      const relX = e.pageX - rect.left;
      const relY = e.pageY - rect.top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2 - scrollTop) / movement;
    }

    const moveSection = document.querySelector('.tp-mouse-move-section');
    const moveSectionElements = document.querySelectorAll('.tp-mouse-move-element');

    if (moveSection && moveSectionElements) {
      moveSection.addEventListener('mousemove', (e: any) => {
        const x = e.clientX;
        const y = e.clientY;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const center = viewportWidth / 2;
        const centerHeight = innerHeight / 2;

        if (x > center) {
          gsap.to(moveSectionElements, {
            x: 20,
            duration: 2,
            ease: 'power4.out',
          });
        } else {
          gsap.to(moveSectionElements, {
            x: -20,
            scale: 1.1,
            duration: 2,
            ease: 'power4.out',
          });
        }

        if (y > centerHeight) {
          gsap.to(moveSectionElements, {
            y: 5,
            duration: 2,
            ease: 'power4.out',
          });
        } else {
          gsap.to(moveSectionElements, {
            y: -5,
            duration: 2,
            ease: 'power4.out',
          });
        }
      });
    }
  }, []); 



  return (
    <>
      <div className="tp-hero-2__area tp-hero-2__position">
        <div className="tp-hero__slider-wrapper tp-hero-2__slider-position p-relative z-index">
          <div className="tp-hero-social-wrapper tp-hero-social-wrapper-2 d-none d-xxl-block">
            <span className="tp-hero-social-bar"></span>
            <div className="tp-hero-social">
              {footer_links.map((item, index) => (
                <div key={index} className="parallax-wrap">
                  <div className="parallax-element">
                    <Link className={item.cls} href={item.link}>
                      {item.icon}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <span className="tp-hero-social-bar tp-hero-social-bar-2"></span>
          </div>
          <div className="tp-hero-2__bottom-wrap">
            <div className="tp-hero-2__bottom-content d-flex justify-content-between">
              <span>
                © Diego <br /> ALL RIGHTS RESERVED
              </span>


              <div className="tp-theme-toggle tp-theme-toggle-2 parallax-wrap" >
                <label 
                  defaultChecked={active}
                  onChange={toggleTheme}
                  className={`tp-theme-toggle-main themepure-theme-toggle parallax-element ${active ? 'dark-active' : 'light-active'}`}
                  htmlFor="this-s">

                  <span id="tp-theme-toggle-light" className="tp-theme-toggle-light">

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.0448 11.0454C9.70165 11.0454 11.0448 9.7023 11.0448 8.04544C11.0448 6.38859 9.70165 5.04544 8.0448 5.04544C6.38795 5.04544 5.0448 6.38859 5.0448 8.04544C5.0448 9.7023 6.38795 11.0454 8.0448 11.0454Z"
                        fill="currentColor" />
                      <path d="M8 1.5V2.68182" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M8 13.3182V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M3.40198 3.40277L4.24107 4.24186" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.7584 11.7581L12.5975 12.5972" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.5 8H2.68182" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M13.3174 8H14.4992" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.40198 12.5972L4.24107 11.7581" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.7584 4.24186L12.5975 3.40277" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </span>
                  <input id="this-s" type="checkbox" className="themepure-theme-toggle-input" />

                  <i className="tp-theme-toggle-slide"></i>

                  <span id="tp-theme-toggle-dark" className="tp-theme-toggle-dark">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 6.54054C11.8949 7.67776 11.4681 8.76152 10.7696 9.66503C10.071 10.5685 9.12957 11.2544 8.05544 11.6424C6.9813 12.0304 5.81888 12.1044 4.70419 11.8559C3.5895 11.6073 2.56866 11.0465 1.7611 10.2389C0.953538 9.43135 0.39267 8.4105 0.144121 7.29581C-0.104428 6.18112 -0.0303768 5.0187 0.357609 3.94457C0.745595 2.87043 1.43147 1.929 2.33497 1.23045C3.23848 0.531888 4.32224 0.105093 5.45946 0C4.79365 0.900756 4.47327 2.01056 4.55656 3.12758C4.63986 4.24459 5.12132 5.2946 5.91336 6.08664C6.7054 6.87869 7.75541 7.36014 8.87242 7.44344C9.98944 7.52673 11.0992 7.20635 12 6.54054Z"
                        fill="currentColor" />
                    </svg>
                  </span>

                </label>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTwo;