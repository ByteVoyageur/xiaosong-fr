'use client';
import HeaderFour from '@/layouts/headers/HeaderFour';
import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import SideBlogPostBoxArea from './SideBlogPostBoxArea';
import FooterFour from '@/layouts/footers/FooterFour';
import VideoPopup from '@/modals/VideoPopup';


const BlogSidebar = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb />
            <SideBlogPostBoxArea setIsVideoOpen={setIsVideoOpen} />
          </main>
          <FooterFour />
        </div>
      </div>

       {/* video modal start */}
       <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </>
  );
};

export default BlogSidebar;