
import BlogSidebar from '@/components/blog-sidebar';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Blog Sidebar - Diego - Personal Creative Portfolio & Resume Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <BlogSidebar />
    </Wrapper>
  );
};

export default index;