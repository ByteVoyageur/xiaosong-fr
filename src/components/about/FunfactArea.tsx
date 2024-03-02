

import React from 'react';
import Count from '../common/Count';

interface DataType {
  id: number;
  delay: string;
  counter: number;
  title: React.JSX.Element;
}

const funfact_data: DataType[] = [
  {
    id: 1,
    delay: '.3s',
    counter: 56,
    title: <>Projects <br /> Completed</>,
  },
  {
    id: 2,
    delay: '.5s',
    counter: 12,
    title: <>Years <br /> Of Experience</>,
  },
  {
    id: 3,
    delay: '.7s',
    counter: 34,
    title: <>Client <br /> Satisfaction</>,
  }

]

const FunfactArea = () => {
  return (
    <>
      <div className="ab-funfact__area ab-funfact__plr pt-110 pb-60 z-index-1 p-relative fix">
        <div className="ab-funfact__bg ab-funfact__overlay">
          <div className="ab-funfact__bg-item" data-speed="1.1" style={{ backgroundImage: 'url(/assets/img/funfact/funfact-bg-1-2.jpg)' }}></div>
        </div>
        <div className="container">
          <div className="row">

            {funfact_data.map((item, i) =>
              <div key={i} className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
                <div className="ab-funfact__item space-left-1 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                  <div className="ab-funfact__number">
                    <span data-purecounter-duration="1" className="purecounter counter-item text-center">
                      <Count number={item.counter} add_style={true} />
                    </span>
                  </div>
                  <div className="ab-funfact__content">
                    <h4 className="ab-funfact__title-sm">{item.title}</h4>
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

export default FunfactArea;