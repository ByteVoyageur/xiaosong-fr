import Image from "next/image";
import ContactFormHomeTwo from "@/components/forms/ContactFormHomeTwo";
import shape_1 from "@/assets/img/contact/contact-shape-1.png";
import shape_2 from "@/assets/img/contact/contact-shape-2.png";
import icon_1 from "@/assets/img/contact/icon-1.png";
import icon_2 from "@/assets/img/contact/icon-2.png";

const ContactAreaHomeTwo = () => {
 

  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-7 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper contact-section">
            <span className="tp-hero-2__circle-3"></span>
            <span className="tp-hero-2__circle-5"></span>
            <Image className="contact-shape-1 tp-zoom-in-out" src={shape_1} alt="image-here" />
            <Image className="contact-shape-2 tp-zoom-in-out" src={shape_2} alt="image-here" />
          </div>
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-contact-2__title-box text-center">
                  <h4 className="tp-contact-2__title">Take a coffee & chat with me</h4>
                </div>
                <div className="tp-contact-2__top-info mb-80 d-flex align-items-center justify-content-center">
                  <div className="parallax-wrap">
                    <div className="parallax-element">
                      <a href="mailto:diego@mail.com">
                        <Image src={icon_1} alt="image-here" />
                        <span>diego@mail.com</span>
                      </a>
                    </div>
                  </div>
                  <div className="parallax-wrap">
                    <div className="parallax-element">
                      <a href="tel:+351810342440">
                        <Image src={icon_2} alt="image-here" />
                        <span>+(351) 810 342 440</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tp-contact-2__bottom-info">
                  <div className="row justify-content-center">
                    <div className="col-xl-10"> 

                      <ContactFormHomeTwo />


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAreaHomeTwo;