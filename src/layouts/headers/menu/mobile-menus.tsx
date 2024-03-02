"use client"
import Link from "next/link";
import menu_data from "./MenuData";
import React, { useEffect, useState } from "react";


const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState<string>("");

  // const [hoveredItem, setHoveredItem] = useState<string>("active");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };



  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-hover-active nav ul li');

    const handleMouseEnter = (event: Event) => {
      const target = event.currentTarget as HTMLLIElement;
      target.classList.add('active');
      Array.from(target.parentElement!.children).forEach((sibling) => {
        if (sibling !== target) {
          sibling.classList.remove('active');
        }
      });
    };

    const handleMouseLeave = (event: Event) => {
      const target = event.currentTarget as HTMLLIElement; 
      // add active class from all siblings  
      Array.from(target.parentElement!.children).forEach((sibling) => {
        if (sibling !== target) {
          sibling.classList.add('active');
        }
      })     

    };

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('mouseenter', handleMouseEnter);
      menuItem.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Cleanup event listeners on component unmount
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener('mouseenter', handleMouseEnter);
        menuItem.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);


  




  return (
    <>
      <ul>
        {menu_data.map((item, index) => (
          <React.Fragment key={index}>
            {item.img_dropdown &&
              <li className={`has-dropdown active`}
              >
                <Link href={item.link} className={`${navTitle === item.title ? "expanded" : ""}`}> {item.title}
                  <button className={`dropdown-toggle-btn ${navTitle === item.title ? "dropdown-opened" : ""}`}
                    onClick={() => openMobileMenu(item.title)}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 1V27" stroke="currentcolor" strokeOpacity="0.95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 14H27" stroke="currentcolor" strokeOpacity="0.95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </Link>
                <ul className="tp-submenu submenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                  {item.sub_menus?.map((sub_menu, sub_index) => (
                    <li key={sub_index}>
                      {sub_menu.mobile_menu! && (
                        <Link href={sub_menu.link}>{sub_menu.title}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            }
            {item.has_dropdown &&
              <li className={`has-dropdown active`}>
                <Link href={item.link} className={`${navTitle === item.title ? "expanded" : ""}`}> {item.title}
                  <button className={`dropdown-toggle-btn ${navTitle === item.title ? "dropdown-opened" : ""}`}
                    onClick={() => openMobileMenu(item.title)}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 1V27" stroke="currentcolor" strokeOpacity="0.95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 14H27" stroke="currentcolor" strokeOpacity="0.95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </Link>
                <ul className="tp-submenu submenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                  {item.sub_menus?.map((sub_menu, sub_index) => (
                    <li key={sub_index}>
                      <Link href={sub_menu.link}>{sub_menu.title}</Link>

                    </li>
                  ))}
                </ul>
              </li>
            }
            {!item.sub_menus && !item.img_dropdown &&
              <li className="active"><Link href={item.link}>{item.title}</Link></li>
            }
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default MobileMenus;



