
import React from 'react';
import BrandIcon from '@/svg/about/BrandIcon';

const brand_imgs = [
  {icon: <BrandIcon />, delay: '.1s'}, 
  {icon: <BrandIcon />, delay: '.2s'}, 
  {icon: <BrandIcon />, delay: '.4s'}, 
  {icon: <BrandIcon />, delay: '.5s'}, 
  {icon: <BrandIcon />, delay: '.8s'}, 
  {icon: <BrandIcon />, delay: '.9s'}, 
]

const BrandAreaAbout = () => {
  return (
    <>               
      <div className="ab-brand__area black-bg-3 pb-100 ab-brand__plr">
        <div className="container-fluid">
          <div className="row gx-20 row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">

            {brand_imgs.map((item, index) => (
              <div key={index} className="col-xl mb-20">
                <div className="ab-brand__item wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                  <a href="#">
                    <span>
                      {item.icon}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaAbout;