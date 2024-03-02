
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from "next/image";
import Facebook from '@/svg/icons/Facebook';
import Linkedin from '@/svg/icons/Linkedin';
import Twitter from '@/svg/icons/Twitter';

import thumb_img_1 from "@/assets/img/blog/blog-details-2.jpg";
import banner_img from "@/assets/img/blog/related-post.jpg";
import avatar_1 from "@/assets/img/users/user24.jpg";
import user_1 from "@/assets/img/users/avata-1.png";
import user_2 from "@/assets/img/users/user24.jpg";
import user_3 from "@/assets/img/users/avata-3.png";
import CommentForm from '../forms/CommentForm';
import BlogSidebar from '../blog-sidebar/BlogSidebar';


// data types
interface DataType {
  social_links: {
    id: number;
    icon: React.JSX.Element;
    link: string;
  }[];
  description_1: string;
  description_2: string;
  title_1: string;
  description_3: string;
  description_4: string;
  description_5: string;
  quote: string;
  tags: { 
    title: string;
    link: string
  }[];
  name: string;
  sm_info: string;
  total_comments: number
  comments_data: {
    id: number;
    img: StaticImageData;
    name: string;
    time: string;
    comment_text: string;
  }[];
}



const postboxt_content: DataType = {
  social_links: [
    {
      id: 1,
      icon: <Facebook />,
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: <Twitter />,
      link: "https://www.twitter.com",
    },
    {
      id: 3,
      icon: <Linkedin />,
      link: "https://www.linkedin.com",
    }
  ],
  description_1: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. As technology continues to advance at a rapid pace, the way we work and interact with our devices is also changing. One area that has seen significant growth in recent years is the intersection of user experience (UX) and user interface (UI) design, artificial intelligence (AI), and the modern work station.",
  description_2: "In this blog post, we will explore how these three elements are coming together to revolutionize the workplace.Nulla aliquam rerum nesciunt velit iusto. Deserunt fugiat tempora sed voluptatibus neque suscipit minima qui. Beatae ipsa autem adipisci. Iusto numquam maxime vitae natus molestiae.",
  title_1: "What's up with UX and UI?",
  description_3: "UX/UI design refers to the process of designing products, such as software, that are easy to use and intuitive for the user. This includes everything from the layout of buttons and menus to the overall aesthetic of the product. In the workplace, good UX/UI design can make a huge difference in terms of productivity and user satisfaction.",
  description_4: "AI, on the other hand, is the simulation of human intelligence in machines. It has the potential to automate many tasks and make them more efficient. In the workplace, AI can be used to assist with tasks such as scheduling, data analysis, and customer service.",
  description_5: "Additionally, AI-powered customer service can make it easier for employees to help customers and resolve issues. In conclusion, the intersection of UX/UI design, AI, and the modern work station is revolutionizing the way we work. By making the workplace more efficient, productive, and user-friendly, these three elements are helping to improve the overall work experience for employees and customers alike.",
  quote: "For example, a work station with a good UX/UI design and AI-powered software can make it easier for employees to access important information.",

  tags: [
    { title: "symphony", link: "https://symphony.com" },
    { title: "nokia", link: "https://nokia.com" },
    { title: "Samsung", link: "https://samsung.com" },
    { title: "Alcatel", link: "https://slcatel.com" },
    { title: "landing", link: "https://landing.com" },
  ],
  name: "Alison Baker",
  sm_info: "Digital content wrangler I UX enthusiast I Recovering educator I <br /> Shameless nerd & GIF connoisseur I Hockey fan.",
  total_comments: 3,
  comments_data: [
    {
      id: 1,
      img: user_1,
      name: "Justin Case",
      time: "April 8, 2023 at 7:38 am",
      comment_text: "Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor.",
    },
    {
      id: 2,
      img: user_2,
      name: "Alison Baker",
      time: "April 8, 2023 at 7:38 am",
      comment_text: "Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.",
    },
    {
      id: 3,
      img: user_3,
      name: "Jamil Rayhan",
      time: "April 8, 2023 at 7:38 am",
      comment_text: "Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor.",
    },
  ]
}

const { social_links, title_1, description_1, description_2, description_3, description_4, description_5, quote, tags, name, sm_info, total_comments, comments_data } = postboxt_content

const PostboxBlogDetailsArea = () => {
  return (
    <>
      <section className="postbox-details__area pt-90 pb-120 black-bg-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox-details__wrapper  tp-blog-sidebar-sticky-area tp-blog-social-sticky-area p-relative">
                <div className="postbox-details__top-social tp-blog-social-sticky d-none d-xxl-inline-flex">
                  {social_links.map((item, i) =>
                    <Link href={item.link} key={i} target="_blank">
                      {item.icon}
                    </Link>
                  )}

                </div>
                <div className="postbox-details__text">
                  <p className="tp-dropcap pb-10">{description_1}</p>
                  <p className="pb-20">{description_2}</p>
                </div>
                <h4 className="postbox-details__title pb-15">{title_1}</h4>
                <div className="postbox-details__text pb-40">
                  <p>{description_3}</p>
                </div>
                <div className="postbox-details__thumb pb-55">
                  <Image src={thumb_img_1} style={{ height: 'auto' }} alt="image-here" />
                </div>
                <div className="postbox-details__text pb-20">
                  <p>{description_4}</p>
                </div>
                <div className="postbox-details__qoute p-relative">
                  <blockquote>
                    <div className="postbox-details__qoute-icon">
                      <span>
                        <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.5306 0C8.40816 2.95378 0 12.9328 0 25.9454C0 34.2479 3.67347 38 9.06122 38C14.2041 38 17.7959 34.4874 17.7959 29.458C17.7959 24.2689 14.1224 20.6765 8.89796 20.6765C6.36735 20.6765 4.32653 21.5546 2.69388 22.9118C3.26531 13.4916 9.79592 5.02941 19.102 1.83613L18.5306 0ZM43.3469 0C33.3061 2.95378 24.8163 12.9328 24.8163 25.9454C24.8163 34.2479 28.5714 38 33.9592 38C39.102 38 42.6939 34.4874 42.6939 29.458C42.6939 24.2689 39.0204 20.6765 33.7959 20.6765C31.2653 20.6765 29.1429 21.5546 27.5918 22.9118C28.1633 13.4916 34.6939 5.02941 44 1.83613L43.3469 0Z" fill="white" fillOpacity="0.1" />
                        </svg>
                      </span>
                    </div>
                    <div className="postbox-details__qoute-text">
                      <p>{quote}</p>
                    </div>
                  </blockquote>
                </div>
                <div className="postbox-details__text pt-20 pb-20">
                  <p>{description_5}</p>
                </div>
                <div className="tagcloud pb-35">
                  {tags.map((item, i) =>
                    <Link href={item.link} key={i} target="_blank">{item.title}</Link>
                  )}
                </div>
                <div className="postbox-details__author-info-box mb-95 p-relative">
                  <div className="postbox-details__author-wrap d-flex align-items-center">
                    <div className="postbox-details__author-avata">
                      <Image src={avatar_1} alt="image-here" />
                    </div>
                    <div className="postbox-details__author-content">
                      <h4>{name}</h4>
                      <p dangerouslySetInnerHTML={{ __html: sm_info }}></p>
                    </div>
                  </div>
                  <div className="postbox-details__author-social-wrap">
                    <div className="postbox-details__author-social-link">
                      {social_links.map((item, i) =>
                        <Link href={item.link} key={i} target="_blank" style={{ color: `rgba(255, 255, 255, 0.7)` }}>
                          {item.icon}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="postbox__comment mb-95">
                  <h3 className="postbox__comment-title"> {total_comments} {total_comments > 2 ? "Comments" : "Comment"}</h3>
                  <ul>
                    {comments_data.map((item, i) =>
                      <li key={i} className={`${i % 2 === 1 ? "children" : null}`}>
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <Image src={item.img} alt="image-here" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name">
                              <h5>{item.name}</h5>
                              <span className="post-meta">{item.time}</span>
                            </div>
                            <p>{item.comment_text}</p>
                            <div className="postbox__comment-reply">
                              <a href="#">
                                <svg width="12" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <CommentForm />

              </div>
            </div>

            <BlogSidebar />

            <div className="row">
              <div className="col-xl-12">
                <div className="postbox-details___related-post">
                  <h4 className="postbox-details___related-title">Related Aricles</h4>
                  <div className="postbox-details___related-post-box">
                    <div className="postbox-details___related-content-wrap mb-30">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6">
                          <h4 className="postbox-details___related-title-sm">
                            <Link href="/blog-details-2">16 witty tips to get six-figure clients on Dribbble</Link></h4>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                          <div className="postbox-details___related-meta">
                            <div className="blog-list__meta-box text-start text-lg-end">
                              <span className="category">Branding</span>
                              <span>October 3, 2023</span>
                              <span>7 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="postbox-details___related-thumb mb-80">
                          <Image data-speed="1.1" src={banner_img} alt="image-here" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="porfolio-details__navigation-wrap">
                          <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                              <div className="porfolio-details__navigation-content text-center text-md-start">
                                <a href="#"><i className="fa-regular fa-arrow-left"></i><span>Preview</span></a>
                                <h4>UX in Ecommerce</h4>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                              <div className="porfolio-details__navigation-bar text-center">
                                <a href="#">
                                  <span>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.5" d="M1 5.21053C1 3.22567 1 2.23323 1.61662 1.61662C2.23323 1 3.22567 1 5.21053 1C7.19539 1 8.18782 1 8.80444 1.61662C9.42105 2.23323 9.42105 3.22567 9.42105 5.21053C9.42105 7.19539 9.42105 8.18782 8.80444 8.80444C8.18782 9.42105 7.19539 9.42105 5.21053 9.42105C3.22567 9.42105 2.23323 9.42105 1.61662 8.80444C1 8.18782 1 7.19539 1 5.21053Z" stroke="white" strokeWidth="1.5" />
                                      <path opacity="0.5" d="M12.5781 16.7896C12.5781 14.8048 12.5781 13.8123 13.1947 13.1957C13.8114 12.5791 14.8038 12.5791 16.7887 12.5791C18.7735 12.5791 19.7659 12.5791 20.3826 13.1957C20.9992 13.8123 20.9992 14.8048 20.9992 16.7896C20.9992 18.7745 20.9992 19.7669 20.3826 20.3835C19.7659 21.0002 18.7735 21.0002 16.7887 21.0002C14.8038 21.0002 13.8114 21.0002 13.1947 20.3835C12.5781 19.7669 12.5781 18.7745 12.5781 16.7896Z" stroke="white" strokeWidth="1.5" />
                                      <path d="M1 16.7896C1 14.8048 1 13.8123 1.61662 13.1957C2.23323 12.5791 3.22567 12.5791 5.21053 12.5791C7.19539 12.5791 8.18782 12.5791 8.80444 13.1957C9.42105 13.8123 9.42105 14.8048 9.42105 16.7896C9.42105 18.7745 9.42105 19.7669 8.80444 20.3835C8.18782 21.0002 7.19539 21.0002 5.21053 21.0002C3.22567 21.0002 2.23323 21.0002 1.61662 20.3835C1 19.7669 1 18.7745 1 16.7896Z" stroke="white" strokeWidth="1.5" />
                                      <path d="M12.5781 5.21053C12.5781 3.22567 12.5781 2.23323 13.1947 1.61662C13.8114 1 14.8038 1 16.7887 1C18.7735 1 19.7659 1 20.3826 1.61662C20.9992 2.23323 20.9992 3.22567 20.9992 5.21053C20.9992 7.19539 20.9992 8.18782 20.3826 8.80444C19.7659 9.42105 18.7735 9.42105 16.7887 9.42105C14.8038 9.42105 13.8114 9.42105 13.1947 8.80444C12.5781 8.18782 12.5781 7.19539 12.5781 5.21053Z" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                              <div className="porfolio-details__navigation-content next text-center text-md-end">
                                <a href="#"><span>Next</span><i className="fa-regular fa-arrow-right"></i></a>
                                <h4>Tiktok Ads</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PostboxBlogDetailsArea;