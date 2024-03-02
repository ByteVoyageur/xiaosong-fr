import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu_data from './MenuData';


const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, index) => (
          <li className={`${item.has_dropdown || item.img_dropdown ? 'has-dropdown' : ''}`} key={index}>
            <Link href={item.link}>{item.title}</Link>
            {item.img_dropdown &&
              <div className="tp-submenu submenu has-homemenu">
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {item.sub_menus?.map((sub_menu, sub_index) => (
                    <div className="col homemenu" key={sub_index}>
                      {!sub_menu.mobile_menu &&
                        <>
                          <div className="homemenu-thumb mb-15">
                            <Link href={sub_menu.link}><Image src={sub_menu.demo_img} alt="diego-image" /></Link>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <Link href={sub_menu.link}>{sub_menu.title}</Link>
                            </h4>
                          </div>
                        </>
                      }
                    </div>
                  ))}
                </div>
              </div>
            }
            {item.has_dropdown &&
              <ul className="tp-submenu submenu">
                {item.sub_menus?.map((sub_menu, sub_index) => (
                  <li key={sub_index}><Link href={sub_menu.link}>{sub_menu.title}</Link></li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;