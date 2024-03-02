
import { BarLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="preloader__content text-center">
            <div className="preloader__top-text d-flex align-items-center justify-content-between">
              <p className="preloader__loading text-start">Loading</p>
              <h2 id="tp-loading-number" className="text-end"></h2>
            </div>
            <div id="tp-loading-bar" className="preloader__bar">
              <BarLoader color={`#fff`} height={8} width={`100%`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
