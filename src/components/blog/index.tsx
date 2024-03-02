'use client';
import BlogArea from './BlogArea';
import React, { useEffect } from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import FooterFour from '@/layouts/footers/FooterFour';


const Blog = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogArea />
          </main>
          <FooterFour />
        </div>
      </div>

    </>
  );
};

export default Blog;