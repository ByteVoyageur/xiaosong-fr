

import blog_img_1 from "@/assets/img/blog/blog-standard-1.jpg";
import blog_img_2 from "@/assets/img/blog/blog-standard-3.jpg";

// slider images 
import slider_img_1 from "@/assets/img/blog/blog-standard-2.jpg";
import slider_img_2 from "@/assets/img/blog/blog-standard-1.jpg";
import slider_img_3 from "@/assets/img/blog/blog-standard-4.jpg"; 
import { StaticImageData } from "next/image";

interface DataType {
  id: number,
  post_with_img?: boolean,
  post_with_video?: boolean,
  post_with_slider?: boolean,
  img?: StaticImageData | any,
  slider_images?: StaticImageData[],
  category: string,
  comments: number,
  month: string,
  date: number,
  title: string,
  description: string,
}

const article_data: DataType[] = [
  {
    id: 1,
    post_with_img: true,
    img: blog_img_1,
    category: "UI/UX Design",
    comments: 0,
    month: "Jun",
    date: 16,
    title: "Complete Guide to User Flow in UX Design",
    description: "Quisque volutpat non nisl idele tincidunt praesent at eros vitae the pulvinar ornare. Nuncion eleifen the interdum velit, ac accumsan dui fermentum et. In the imperdiet urna sed efficitur euismod. Vestibulum bullam...",
  },
  {
    id: 2,
    post_with_video: true,
    img: blog_img_2,
    category: "Inspiration",
    comments: 2,
    month: "Jun",
    date: 17,
    title: "Rental Friendly Practices for your Guests",
    description: "Quisque volutpat non nisl idele tincidunt praesent at eros vitae the pulvinar ornare. Nuncion eleifen the interdum velit, ac accumsan dui fermentum et. In the imperdiet urna sed efficitur euismod. Vestibulum bullam...",
  },
  {
    id: 3,
    post_with_slider: true,
    slider_images: [
      slider_img_1,
      slider_img_2,
      slider_img_3,
    ],
    category: "Inspiration",
    comments: 2,
    month: "Jun",
    date: 18,
    title: "UX in Ecommerce - 5 things to avoid.",
    description: "Quisque volutpat non nisl idele tincidunt praesent at eros vitae the pulvinar ornare. Nuncion eleifen the interdum velit, ac accumsan dui fermentum et. In the imperdiet urna sed efficitur euismod. Vestibulum bullam...",
  },
  {
    id: 4,
    post_with_img: true,
    img: slider_img_3,
    category: "Web Development",
    comments: 0,
    month: "Jun",
    date: 19,
    title: "Get Started With Tiktok Ads.",
    description: "Quisque volutpat non nisl idele tincidunt praesent at eros vitae the pulvinar ornare. Nuncion eleifen the interdum velit, ac accumsan dui fermentum et. In the imperdiet urna sed efficitur euismod. Vestibulum bullam...",
  },
]

export default article_data