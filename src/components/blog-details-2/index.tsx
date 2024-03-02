
'use client'
import FooterFour from '@/layouts/footers/FooterFour';
import HeaderFour from '@/layouts/headers/HeaderFour';
import React, { useEffect } from 'react';
import BreadcrumbBlogDetailsTwo from './BreadcrumbBlogDetailsTwo';
import PostboxBlogDetailsTwoArea from './PostboxBlogDetailsTwoArea';




const BlogDetailsTwo = () => {

  return (
    <>
      <HeaderFour style={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbBlogDetailsTwo />
            <PostboxBlogDetailsTwoArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsTwo;