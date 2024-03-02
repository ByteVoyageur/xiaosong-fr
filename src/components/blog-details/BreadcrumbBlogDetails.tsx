
import React from 'react';
import Image from 'next/image';
import avatar_img from "@/assets/img/users/blog-list-avata-1.png";
import banner_img from "@/assets/img/blog/blog-details-big-img-2.jpg";


const BreadcrumbBlogDetails = () => {
  return (
    <>
      <div className="blog-details__area blog-details__customize pt-200 black-bg-3">
        <div className="container">
          <div className="row">
            <div className="blog-list__title-box">
              <div className="blog-list__text-sm">
                <span className="category">
                  Blog</span><i className="fa-regular fa-angle-right"></i><span>
                    Complete Guide to User Flow in UX Design
                  </span>
              </div>
              <h4 className="blog-list__title tp-char-animation">Complete Guide to <br /> User Flow in UX Design</h4>
            </div>
            <div className="blog-details__meta mb-70">
              <span ><Image src={avatar_img} style={{ height: 'auto' }} alt="image-here" /><i>Polina Viola</i></span>
              <span>Apr 21, 2020</span>
              <span>2 Comments</span>
            </div>
          </div>
        </div>
        <div className="blog-details__big-thumb text-center ">
          <Image data-speed="0.7" src={banner_img} alt="image-here" />
        </div>
      </div>
    </>
  );
};

export default BreadcrumbBlogDetails;