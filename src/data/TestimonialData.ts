
import { StaticImageData } from 'next/image';
import testimonial_img_1 from '@/assets/img/portfolio/2/portfolio-3.jpg';
import testimonial_img_2 from '@/assets/img/portfolio/2/portfolio-2.jpg';
import testimonial_img_3 from '@/assets/img/portfolio/2/portfolio-1.jpg';
import testimonial_img_4 from '@/assets/img/portfolio/2/portfolio-4.jpg';
import testimonial_img_5 from '@/assets/img/portfolio/2/portfolio-5.jpg';
import testimonial_img_6 from '@/assets/img/portfolio/2/portfolio-1.jpg';
import testimonial_img_7 from '@/assets/img/portfolio/2/portfolio-2.jpg';
import testimonial_img_8 from '@/assets/img/portfolio/2/portfolio-3.jpg';
import testimonial_img_9 from '@/assets/img/portfolio/2/portfolio-1.jpg';
import testimonial_img_10 from '@/assets/img/portfolio/2/portfolio-2.jpg';
import testimonial_img_11 from '@/assets/img/portfolio/2/portfolio-3.jpg';

interface DataType {
  id: number;
  brand_img: StaticImageData;
  brand_tag: string;
  brand_name: string;
  time: number;
}

const testimonial_data: DataType[] = [
  {
    id: 1,
    brand_img: testimonial_img_1,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 2,
    brand_img: testimonial_img_2,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 3,
    brand_img: testimonial_img_3,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 4,
    brand_img: testimonial_img_4,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 5,
    brand_img: testimonial_img_5,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 6,
    brand_img: testimonial_img_6,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 7,
    brand_img: testimonial_img_7,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 8,
    brand_img: testimonial_img_8,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 9,
    brand_img: testimonial_img_9,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 10,
    brand_img: testimonial_img_10,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
  {
    id: 11,
    brand_img: testimonial_img_11,
    brand_tag: "Branding",
    brand_name: "Web Animation",
    time: 2023,
  },
]
export default testimonial_data