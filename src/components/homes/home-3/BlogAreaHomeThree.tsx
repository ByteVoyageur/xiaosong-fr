
 
import React from 'react';
import Link from 'next/link'; 
import DownArrowIcon from '@/svg/home-3/DownArrowIcon';
import Image, { StaticImageData } from 'next/image';
import blog_img_3_1 from "@/assets/img/blog/blog-3-1.jpg";
import blog_img_3_2 from "@/assets/img/blog/blog-3-2.jpg";

interface Datatype {
  id: number;
  path: string;
  img: StaticImageData;
  title: string;
  category: string;
  date: string;
  time: string;
}

const blog_data: Datatype[] = [
  {
    id: 1,
    path: "home_3",
    img: blog_img_3_1,
    title: "16 witty tips to get <br /> six-figure clients on Dribbble",
    category: "Branding",
    date: "October 3,",
    time: "7 min read",
  },
  {
    id: 2,
    path: "home_3",
    img: blog_img_3_2,
    title: "Bluwalk redesign: sign-up <br /> rate increased twice and counting",
    category: "Branding",
    date: "November 4,",
    time: "7 min read",
  }

]


const BlogAreaHomeThree = () => {
  return (
    <>
      <div className="tp-blog-3__area black-bg-3 pt-320 pb-50 fix">
        <div className="container">
          <div className="tp-blog-3__title-wrap mb-60">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="tp-blog-3__title-box">
                  <h4 className="tp-section-title-3 tp_title_anim">Articles & Publications</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-4">
                <div className="tp-blog-3__btn text-start text-md-end">
                  <Link className="tp-btn-blue" href="/blog">
                    <span className="text"> View All Post</span>
                    <span className="icon">
                      <DownArrowIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-50">
            {blog_data.map((item, i) =>
              <div key={i} className="col-xl-6">
                <div className="tp-blog-3__item mb-70">
                  <div className="tp-blog-3__content">
                    <h4 className="tp-blog-3__content-title">
                      <Link href="/blog-details-2" dangerouslySetInnerHTML={{ __html: item.title }}></Link>
                    </h4>
                    <div className="tp-blog-3__meta-box mb-30 d-flex align-items-center justify-content-between">
                      <div className="tp-blog-3__category">
                        <span>{item.category}</span>
                      </div>
                      <div className="tp-blog-3__meta">
                        <span>{item.date} {new Date().getFullYear()}</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="tp-blog-3__thumb">
                    <Link href="/blog-details">
                      <Image className="w-100" style={{ objectFit: "cover", height: "auto" }} src={item.img} alt="image-here" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAreaHomeThree;