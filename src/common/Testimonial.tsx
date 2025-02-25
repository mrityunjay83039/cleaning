import { CardMedia } from "@mui/material";
import TestimonialImg3 from "../assets/img/google-review.png";
import TestQuote from "../assets/img/icon/test-qoute.png";
import TestimonialAuthor2 from "../assets/img/testimonial/testimonial-author-2.jpg";
import TestimonialAuthor3 from "../assets/img/testimonial/testimonial-author-3.jpg";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section className="tp-testimonial-area position-relative">
      <div className="tp-testimonial-shape tp-about-testimonial-shape"></div>
      <div className="container">
        <div className="tp-testimonial-bg white-bg z-index">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-testimonial-img">
                <Link
                  to={"https://maps.app.goo.gl/VckCZKkzucC5QzH16"}
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    src={TestimonialImg3}
                    alt="img not found"
                    className="img-fluid"
                  />
                </Link>
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
                        I couldn’t be happier with the service provided by Urban
                        helping and cleaning services From start to finish, the
                        team was professional, efficient, and detail-oriented.
                        They arrived on time, fully equipped, and worked
                        tirelessly to leave my home spotless. Every corner was
                        cleaned, and they even went above and beyond to organize
                        a few things for me.
                      </p>
                      <div className="tp-testimonial-author">
                        <div className="tp-testimonial-author-img">
                        <i className="fa fa-user fs-2"></i>
                        </div>
                        <div className="tp-testimonial-author-text">
                          <h4 className="tp-testimonial-author-text-name heading-color-black">
                            Laddi Sandhu
                          </h4>
                          {/* <span className="tp-testimonial-author-text-designation">
                            Chief Marketing Manager
                          </span> */}
                        </div>
                      </div>
                      <div className="tp-testimonial-qoute">
                        <CardMedia
                          component="img"
                          src={TestQuote}
                          alt="img not found"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="tp-testimonial-single swiper-slide z-index">
                      <p className="mb-45">
                        I wanted to take a moment to express my sincere
                        appreciation for the outstanding cleaning services you
                        provided for my home. The team did an exceptional job,
                        and I am thoroughly impressed with the attention to
                        detail and professionalism they displayed throughout the
                        process. I will definitely be recommending your services
                        to friends and family, and I look forward to working
                        with you again in the future.
                      </p>
                      <p>Thank you once again for your excellent service!</p>
                      <div className="tp-testimonial-author">
                        <div className="tp-testimonial-author-img">
                        <i className="fa fa-user fs-2"></i>
                        </div>
                        <div className="tp-testimonial-author-text">
                          <h4 className="tp-testimonial-author-text-name heading-color-black">
                            Ajit Pal Singh
                          </h4>
                          {/* <span className="tp-testimonial-author-text-designation">
                            Chief Web Developer
                          </span> */}
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
                        UHC Services exceeded my expectations! Their team was
                        professional, punctual, and left my home spotless. They
                        paid attention to every detail, even cleaning areas I
                        hadn’t thought of. I’m so impressed with their quality
                        of work and would highly recommend them to anyone
                        looking for reliable cleaning services!
                      </p>
                      <div className="tp-testimonial-author">
                        <div className="tp-testimonial-author-img">
                        <i className="fa fa-user fs-2"></i>
                        </div>
                        <div className="tp-testimonial-author-text">
                          <h4 className="tp-testimonial-author-text-name heading-color-black">
                            Media Guru
                          </h4>
                          {/* <span className="tp-testimonial-author-text-designation">
                            Chief Marketing Officer
                          </span> */}
                        </div>
                      </div>
                      <div className="tp-testimonial-qoute">
                        <CardMedia
                          component="img"
                          src={TestQuote}
                          alt="img not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* If we need navigation buttons  */}
          <div className="tp-testimonial-slider-arrow">
            <div className="testimonial-button-next slide-next">
              <i className="far fa-chevron-right"></i>
            </div>
            <div className="testimonial-button-prev slide-prev">
              <i className="far fa-chevron-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
