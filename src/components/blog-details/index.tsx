'use client';
import HeaderFour from '@/layouts/headers/HeaderFour';
import React, { useEffect } from 'react';
import BreadcrumbBlogDetails from './BreadcrumbBlogDetails';
import PostboxBlogDetailsArea from './PostboxBlogDetailsArea';
import FooterFour from '@/layouts/footers/FooterFour';


const BlogDetails = () => {

  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbBlogDetails />
            <PostboxBlogDetailsArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;