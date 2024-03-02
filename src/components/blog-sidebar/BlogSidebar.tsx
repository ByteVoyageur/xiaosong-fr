'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import post_img_1 from "@/assets/img/blog/sidebar-1.jpg";
import post_img_2 from "@/assets/img/blog/sidebar-2.jpg";
import Link from 'next/link';


interface DataType {
  category_title: string;
  category_list: {
    title: string;
    items: number;
  }[];
  post_title: string;
  post_list: {
    id: number;
    img: StaticImageData;
    title: string;
    category: string;
    date: string;
  }[];
  tag_title: string;
  tags: {
    title: string;
    link: string;
  }[];
}


const sidebar_content: DataType = {
  category_title: "Category",
  category_list: [
    { title: "Design", items: 7 },
    { title: "Experience", items: 4 },
    { title: "Uncategorized", items: 3 },
    { title: "Digital", items: 8 },
  ],
  post_title: "Recent Post",
  post_list: [
    {
      id: 1,
      img: post_img_1,
      title: "Lazarev. got 3 CSS Design Awards",
      category: "DESIGN",
      date: "Nov 14,",
    },
    {
      id: 2,
      img: post_img_2,
      title: "Is Graphic Design a Talent or Skill?",
      category: "DESIGN",
      date: "Nov 15,",
    }
  ],
  tag_title: "Tags",
  tags: [
    { title: "symphony", link: "https://symphony.com" },
    { title: "nokia", link: "https://nokia.com" },
    { title: "tech", link: "https://tech.com" },
    { title: "Samsung", link: "https://samsung.com" },
    { title: "Alcatel", link: "https://slcatel.com" },
    { title: "mous", link: "https://mous.com" },
    { title: "landing", link: "https://landing.com" },
    { title: "Oppos", link: "https://Oppos.com" },
  ],
}

const { category_title, category_list, post_title, post_list, tag_title, tags } = sidebar_content

const BlogSidebar = () => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="sidebar__wrapper tp-blog-sidebar-sticky">
          <div className="sidebar__widget mb-60">
            <div className="sidebar__widget-content">
              <h3 className="sidebar__widget-title">Search Here</h3>
              <div className="sidebar__search">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="sidebar__search-input-2">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://https://w3.org/2000/svg">
                        <path d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.9984 17L15.3984 15.4" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-60">
            <h3 className="sidebar__widget-title">{category_title}</h3>
            <div className="sidebar__widget-content">
              <ul>
                {category_list.map((item, index) => (
                  <li key={index}><Link href="/blog">{item.title}<span>({item.items})</span></Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sidebar__widget mb-60">
            <h3 className="sidebar__widget-title">{post_title}</h3>
            <div className="sidebar__widget-content">
              <div className="sidebar__post rc__post">
                {post_list.map((item, index) => (
                  <div key={index} className="rc__post mb-30 d-flex align-items-center">
                    <div className="rc__post-thumb mr-20">
                      <Link href="/blog-details"><Image src={item.img} alt="image-here" /></Link>
                    </div>
                    <div className="rc__post-content">
                      <h3 className="rc__post-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="rc__meta d-flex align-items-center">
                        <span>{item.category}</span>
                        <span className="text-2"><i>.</i>{item.date} {new Date().getFullYear()}</span>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-60">
            <h3 className="sidebar__widget-title">{tag_title}</h3>
            <div className="sidebar__widget-content">
              <div className="tagcloud">
                {tags.map((item, index) => (
                  <Link href={item.link} key={index} title={item.title} target="_blank">{item.title}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;


