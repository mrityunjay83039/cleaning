import { Container, Grid, Button, Typography, Grid2, Box } from "@mui/material";
import SliderBg3 from "../../assets/img/slider/slider-bg-3.jpg";
import SliderImg3 from "../../assets/img/before-after/3.webp";
import SliderImg2 from "../../assets/img/before-after/2.webp";
import SliderImg1 from "../../assets/img/before-after/1.webp";
import AboutImgShape3 from "../../assets/img/about/about-img-shape-3.png";
import BlogImg7 from "../../assets/img/blog/blog-img-7.jpg";
import BlogImg8 from "../../assets/img/blog/blog-img-8.jpg";
import BlogImg9 from "../../assets/img/blog/blog-img-9.jpg";
import Testimonial from "../../common/Testimonial";
import { Link } from "react-router-dom";
import Service from "../../common/service";
import { serviceList } from "../../config/constants";

const HomePage = () => {
  return (
    <main>
      {/* Hero Area Start Here */}
      <section className="tp-slider-area-three fix">
        <div className="tp-slider-active swiper-container">
          <div className="swiper-wrapper">
            <div
              className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide"
              data-swiper-autoplay="5000"
            >
              <div className="slide-bg" data-background={SliderBg3}></div>
              <div className="slider-img-three">
                <img
                  src={SliderImg3}
                  className="img-fluid"
                  alt="img not found"
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* <div className="tp-slider-three z-index text-center">
                      <h6
                        className="tp-slider-three-subtitle"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        <img
                          src={SliderIcon1}
                          className="img-fluid"
                          alt="img not found"
                        />{" "}
                        Your Trusted Partner in Commercial & Post construction
                        Professional Cleaning
                      </h6>
                      <h1
                        className="tp-slider-three-title"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        Urban Helping & Cleaning Services Ltd.
                      </h1>
                      <div
                        className="tp-slider-three-btn"
                        data-animation="fadeInUp"
                        data-delay=".9s"
                      >
                        <a href="about.html" className="yellow-btn">
                          <i className="flaticon-enter"></i> Learn More
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide"
              data-swiper-autoplay="5000"
            >
              <div className="slide-bg" data-background={SliderBg3}></div>
              <div className="slider-img-three">
                <img
                  src={SliderImg2}
                  className="img-fluid"
                  alt="img not found"
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* <div className="tp-slider-three z-index text-center">
                      <h6
                        className="tp-slider-three-subtitle"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        <img
                          src={SliderIcon1}
                          className="img-fluid"
                          alt="img not found"
                        />{" "}
                        Fast and efficient service
                      </h6>
                      <h1
                        className="tp-slider-three-title"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        Cleaning <br />
                        Excellence <br />
                        Guaranteed!
                      </h1>
                      <div
                        className="tp-slider-three-btn"
                        data-animation="fadeInUp"
                        data-delay=".9s"
                      >
                        <a href="about.html" className="yellow-btn">
                          <i className="flaticon-enter"></i> Learn More
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide"
              data-swiper-autoplay="5000"
            >
              <div className="slide-bg" data-background={SliderBg3}></div>
              <div className="slider-img-three">
                <img
                  src={SliderImg1}
                  className="img-fluid"
                  alt="img not found"
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* <div className="tp-slider-three z-index text-center">
                      <h6
                        className="tp-slider-three-subtitle"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        <img
                          src={SliderIcon1}
                          className="img-fluid"
                          alt="img not found"
                        />{" "}
                        Fast and efficient service
                      </h6>
                      <h1
                        className="tp-slider-three-title"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        something <br />
                        here <br />
                        Guaranteed!
                      </h1>
                      <div
                        className="tp-slider-three-btn"
                        data-animation="fadeInUp"
                        data-delay=".9s"
                      >
                        <a href="about.html" className="yellow-btn">
                          <i className="flaticon-enter"></i> Learn More
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-button-prev slide-prev">
            <i className="far fa-long-arrow-left"></i>
          </div>
          <div className="swiper-button-next slide-next">
            <i className="far fa-long-arrow-right"></i>
          </div>
        </div>
      </section>
      {/* Hero Area End Here */}

      {/* Feature Area Start Here */}
      {/* <section className="tp-feature-area-three pt-115 pb-80">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                <Typography variant="h5" className="tp-section-subtitle-three mb-20"> _ _ How We Works _ _</Typography>
                <Typography variant="h2" className="tp-section-title-two color-theme-blue">Excellent Techniques For <br /> Effective Cleaning</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {['Book Online', 'Received Data', 'Ready Cleaner', 'Start Cleaning'].map((title, index) => (
              <Grid item xl={3} sm={6} key={index}>
                <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay={`${0.4 + index * 0.3}s`}>
                  <div className="tp-feature-three-icon mb-30">
                    <img src={featureBg} className="img-fluid" alt="img not found" />
                    <i className={`flaticon-${title.toLowerCase().replace(' ', '-')}`}></i>
                  </div>
                  <div className="tp-feature-three-text">
                    <Typography variant="h4" className="tp-feature-three-title mb-20">
                      <a href="project-details.html">{title}</a>
                    </Typography>
                    <Typography>Coingue aten lorem consqua interdum pretium ligaula a semper mauris easy dictuma</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section> */}
      {/* Feature Area End Here */}

      {/* About Area Start Here */}
      <section className="tp-about-area-two position-relative pt-120 pb-85">
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <div
                className="tp-about-img-three pt-40 position-relative mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img
                  src="./img/service/commercial-cleaning-service.png"
                  className="img-fluid"
                  alt="about image"
                  style={{width:'70%'}}
                />
                <img
                  src="./img/service/regular-cleaning-service.jpg"
                  className="img-fluid tp-about-img-three-second"
                  alt="about image"
                  style={{width:'60%'}}
                />
               
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                className="tp-about-text tp-about-text-three tp-about-inner-page-text mb-30 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="section-title-wrapper mb-25 text-center">
                  <Typography
                    variant="h5"
                    className="tp-section-subtitle-three mb-20 theme-blue-color"
                  >
                    About UHC Services
                  </Typography>
                  <Typography
                    variant="h3"
                    className="tp-section-title-two color-theme-blue"
                  >
Cleaning Up your Mess is Our Success
                  </Typography>
                </div>
                <Typography className="mb-40">
                  UHC is a professional cleaning company providing cleaning
                  services throughout British Columbia. We provide cleaning
                  services for commercial properties, offices, residential
                  buildings, warehouses, banks, hospitals, senior homes,
                  restaurants, educational institutions, and construction-sites
                  as well. We excel in providing top-notch services. Our
                  experienced team has all the relevant certifications and
                  high-tech equipment’s to perform the job.
                </Typography>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-about-number mb-30">
                      <div className="tp-about-number-icon">
                        <i className="flaticon-phone-call-1"></i>
                      </div>
                      <div className="tp-about-number-text">
                        <span className="heading-color-black">
                          Contact Now
                        </span>
                        <a
                          href="tel:+1(778)800-4455"
                          className="heading-color-black"
                        >
                          +1(778)800-4455
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                  <div className="tp-about-number mb-30">
                      <div className="tp-about-number-icon">
                        <i className="flaticon-email-1"></i>
                      </div>
                      <div className="tp-about-number-text">
                        <span className="heading-color-black">
                          Email Now
                        </span>
                        <a
                          href="mailto:info@uhcservices.ca"
                          className="heading-color-black"
                        >
                          info@uhcservices.ca
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <Grid container>
                  <Grid item xs={12}>
                    <div className="tp-about-three-btn text-center">
                      <Button
                        variant="contained"
                        className="theme-btn mt-2"
                        href="service-details.html"
                      >
                        <i className="flaticon-enter"></i> Learn More
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* About Area End Here */}

      {/* Service Area Start Here */}
      <section className="tp-service-area-three pt-115 pb-200 bg-gray-light">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div
                className="section-title-wrapper text-center mb-55 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <Typography
                  variant="h5"
                  className="tp-section-subtitle-three mb-20"
                >
                  _ _ Popular Services _ _
                </Typography>
                <Typography
                  variant="h2"
                  className="tp-section-title-two color-theme-blue"
                >
                  Quality Cleaning Making <br /> you Much Happy
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div className="row">
            {serviceList.map((ele) => {
              return (
                <div className="col-lg-6">
                  <Service
                    key={ele.id}
                    serviceImg={ele.img}
                    serviceIcon={ele.icon}
                    serviceTitle={ele.title}
                    serviceDesc={ele.desc}
                    serviceBtnLink={ele.btnLink}
                    serviceBtnText={ele.btnText}
                  />
                </div>
              );
            })}
          </div>

          <Box display="flex" justifyContent="center">
            <Link className="theme-btn" to="/services">
              <i className="flaticon-enter"></i> View All
            </Link>
          </Box>
        </Container>
      </section>
      {/* Service Area End Here */}

      {/* Testimonial Area Start Here */}
      <Testimonial />
      {/* Testimonial Area End Here */}

      {/* CTA Area Start Here */}

      {/* CTA Area End Here */}

      {/* Choose Area Start Here */}
      {/* <section className="tp-choose-area-three position-relative mt-120 pb-50">
        <div className="tp-choose-area-three-img">
          <img src={AboutImg5} alt="img-not-found" />
          <div className="tp-choose-three-year tp-choose-three-year-responsive mb-50">
            <div className="tp-choose-three-year-inner">
              <Typography variant="h3">20 Years</Typography>
              <Typography variant="h4">
                Successfully <br /> Provide Service
              </Typography>
            </div>
          </div>
        </div>
        <Container>
          <Grid container alignItems="end" justifyContent="center">
            <Grid
              item
              xl={6}
              textAlign="end"
              display={{ xs: "none", xl: "block" }}
            >
              <div className="tp-choose-three-year mb-50">
                <div className="tp-choose-three-year-inner">
                  <Typography variant="h3">20 Years</Typography>
                  <Typography variant="h4">
                    Successfully <br /> Provide Service
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={10}>
              <div className="tp-choose-three">
                <div className="section-title-wrapper mb-25">
                  <Typography
                    variant="h5"
                    className="tp-section-subtitle-three mb-20"
                  >
                    Why Choose Us _ _
                  </Typography>
                  <Typography
                    variant="h2"
                    className="tp-section-title-two color-theme-blue"
                  >
                    Find Standard Cleaning <br /> with Personal Touch
                  </Typography>
                </div>
                <Typography className="mb-45">
                  Sed nteger porta vel placerat cra torquent dolor site
                  habitasse elementum disign proin pulvinar class quam socis
                  quam cum quisque ennim praesent anest amet fermentum proin
                  donec massa augue in neque sapien
                </Typography>
                <Grid container spacing={2}>
                  {[
                    "Online Estimation",
                    "Project Discount",
                    "Work Monitoring",
                    "Satisfied Service",
                  ].map((title, index) => (
                    <Grid item sm={6} key={index}>
                      <div className="tp-about-service mb-55">
                        <div className="tp-about-service-icon yellow-circle-shape mb-20">
                          <i
                            className={`flaticon-${title
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          ></i>
                        </div>
                        <div className="tp-about-service-text">
                          <Typography
                            variant="h4"
                            className="tp-about-service-text-title mb-15"
                          >
                            <Link to="/services">{title}</Link>
                          </Typography>
                          <Typography>
                            Facilsis veicula hendrerit turp turpis solutat
                            neique dapibus justo rdiculu dapibus no ridiculuy
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section> */}
      {/* Choose Area End Here */}

      {/* Blog Area Start Here */}
      <section className="tp-blog-area-three bg-gray-light pt-115">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div
                className="section-title-wrapper mb-55 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <Typography
                  variant="h5"
                  className="tp-section-subtitle-three mb-20"
                >
                  _ _ Recent Article_ _
                </Typography>
                <Typography
                  variant="h2"
                  className="tp-section-title-two color-theme-blue"
                >
                  Stay Connect Our Blogs <br /> Every Moment
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {[BlogImg7, BlogImg8, BlogImg9].map((img, index) => (
              <Grid item lg={4} md={6} key={index}>
                <div
                  className="tp-blog-three mb-30 wow fadeInUp"
                  data-wow-delay={`${0.4 + index * 0.3}s`}
                >
                  <div className="tp-blog-three-img">
                    <Link to="/services/services">
                      <img src={img} className="img" alt="img-not-found" />
                    </Link>
                  </div>
                  <div className="tp-blog-three-text">
                    <div className="tp-blog-three-text-meta">
                      <Link to="/services">By Jhon Cardo</Link>
                      <span>_ _</span>
                      <Link to="/services">Jun 02 - 2021</Link>
                    </div>
                    <Typography
                      variant="h4"
                      className="tp-blog-three-title mb-15"
                    >
                      <Link to="/services">
                        Baoreet and placerat amet class rempus manusp curpise
                      </Link>
                    </Typography>
                    <div className="tp-blog-three-link">
                      <Link to="/services">
                        <i className="flaticon-enter"></i> Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Contact Area Start Here */}
        <div className="tp-contact-cta-area position-relative pt-85">
          <Container>
            <div className="tp-contact-cta-bg">
              <Grid container>
                <Grid item lg={4} sm={6}>
                  <div
                    className="tp-contact-cta border-r-1 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-contact-cta-inner">
                      <div className="tp-contact-cta-inner-icon">
                        <i className="flaticon-home"></i>
                      </div>
                      <div className="tp-contact-cta-inner-text">
                        <span>Office Address</span>
                        <Typography variant="h5">
                          #305, 14225 57 Avenue,
                          <br /> Surrey, BC, Canada
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <div
                    className="tp-contact-cta border-r-2 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-contact-cta-inner justify-content-center">
                      <div className="tp-contact-cta-inner-icon">
                        <i className="flaticon-support"></i>
                      </div>
                      <div className="tp-contact-cta-inner-text">
                        <span>Free Contact</span>
                        <Typography variant="h5">
                          <Link to="tel:+1(778)8004455">+1(778)800-4455</Link>
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={6}>
                  <div
                    className="tp-contact-cta wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="tp-contact-cta-inner justify-content-end">
                      <div className="tp-contact-cta-inner-icon">
                        <i className="flaticon-email-1"></i>
                      </div>
                      <div className="tp-contact-cta-inner-text">
                        <span>Email Address</span>
                        <Typography variant="h5">
                          <Link to="mailto:info@thempure.com">
                            info@uhcservices.ca
                          </Link>
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* Contact Area End Here */}
      </section>
      {/* Blog Area End Here */}
    </main>
  );
};

export default HomePage;
