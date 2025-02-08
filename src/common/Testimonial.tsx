import { CardMedia } from "@mui/material";
import TestimonialImg3 from "../assets/img/testimonial/testimonial-img-3.jpg";
import TestimonialAuthor1 from "../assets/img/testimonial/testimonial-author-1.jpg";
import TestQuote from "../assets/img/icon/test-qoute.png";
import TestimonialAuthor2 from "../assets/img/testimonial/testimonial-author-2.jpg";


const Testimonial = () => {
  return (
    <section className="tp-testimonial-area position-relative">
      <div className="tp-testimonial-shape tp-about-testimonial-shape"></div>
      <div className="container">
        <div className="tp-testimonial-bg white-bg z-index">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-testimonial-img">
                <CardMedia
                  component="img"
                  src={TestimonialImg3}
                  alt="img not found"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-testimonial tp-abouts-testimonial ml-70">
                <div className="section-title-wrapper">
                  <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">
                    Customer Statement
                  </h5>
                  <h2 className="tp-section-title mb-20 heading-color-black">
                    Our Client Feedback
                  </h2>
                </div>
                <div className="tp-testimonial-active swiper-container">
                  <div className="swiper-wrapper">
                    <div className="tp-testimonial-single swiper-slide z-index">
                      <p className="mb-45">
                        Erat dapibus interdum consequat eleifend. Porttitor
                        iaculis per lectus ornare dolor pede. Metus urna
                        faucibus montes duis conds imentum congue. Accumsan
                        bibendum pharetra a quisque nulla dictumst quam praesent
                        pharetra cos aptent sociosqu. Imperdiet mattis sociosqu
                        differ frome aliquam.
                      </p>
                      {/* <div className="tp-testimonial-author">
                        <div className="tp-testimonial-author-img">
                          <CardMedia
                            component="img"
                            src={TestimonialAuthor1}
                            alt="img not found"
                            className="img-fluid"
                          />
                        </div>
                        <div className="tp-testimonial-author-text">
                          <h4 className="tp-testimonial-author-text-name heading-color-black">
                            Rich Gragory
                          </h4>
                          <span className="tp-testimonial-author-text-designation">
                            Chief Marketing Manager
                          </span>
                        </div>
                      </div>
                      <div className="tp-testimonial-qoute">
                        <CardMedia
                          component="img"
                          src={TestQuote}
                          alt="img not found"
                          className="img-fluid"
                        />
                      </div> */}
                    </div>
                    {/* <div className="tp-testimonial-single swiper-slide z-index">
                      <p className="mb-45">
                        Erat dapibus interdum consequat eleifend. Porttitor
                        iaculis per lectus ornare dolor pede. Metus urna
                        faucibus montes duis conds imentum congue. Accumsan
                        bibendum pharetra a quisque nulla dictumst quam praesent
                        pharetra cos aptent sociosqu. Imperdiet mattis sociosqu
                        differ frome aliquam.
                      </p>
                      <div className="tp-testimonial-author">
                        <div className="tp-testimonial-author-img">
                          <CardMedia
                            component="img"
                            src={TestimonialAuthor2}
                            alt="img not found"
                            className="img-fluid"
                          />
                        </div>
                        <div className="tp-testimonial-author-text">
                          <h4 className="tp-testimonial-author-text-name heading-color-black">
                            Jhon Doe
                          </h4>
                          <span className="tp-testimonial-author-text-designation">
                            Chief Web Developer
                          </span>
                        </div>
                      </div>
                      <div className="tp-testimonial-qoute">
                        <CardMedia
                          component="img"
                          src={TestQuote}
                          alt="img not found"
                          // className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="tp-testimonial-single swiper-slide z-index">
                      <p className="mb-45">
                        Erat dapibus interdum consequat eleifend. Porttitor
                        iaculis per lectus ornare dolor pede. Metus urna
                        faucibus montes duis conds imentum congue. Accumsan
                        bibendum pharetra a quisque nulla dictumst quam praesent
                        pharetra cos aptent sociosqu. Imperdiet mattis sociosqu
                        differ frome aliquam.
                      </p>
                      <div className="tp-testimonial-author">
                        <div className="tp-testimonial-author-img">
                          <CardMedia
                            component="img"
                            src={TestimonialAuthor2}
                            alt="img not found"
                            className="img-fluid"
                          />
                        </div>
                        <div className="tp-testimonial-author-text">
                          <h4 className="tp-testimonial-author-text-name heading-color-black">
                            Shon Toy
                          </h4>
                          <span className="tp-testimonial-author-text-designation">
                            Chief Marketing Officer
                          </span>
                        </div>
                      </div>
                      <div className="tp-testimonial-qoute">
                        <CardMedia
                          component="img"
                          src={TestQuote}
                          alt="img not found"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* If we need navigation buttons  */}
          {/* <div className="tp-testimonial-slider-arrow">
            <div className="testimonial-button-next slide-next">
              <i className="far fa-chevron-right"></i>
            </div>
            <div className="testimonial-button-prev slide-prev">
              <i className="far fa-chevron-left"></i>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
