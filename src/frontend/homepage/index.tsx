import { Container, Grid, Button, Typography, Grid2, Box } from "@mui/material";
import SliderBg3 from "../../assets/img/slider/slider-bg-3.jpg";
import SliderIcon1 from "../../assets/img/icon/slider-icon-1.png";
import SliderImg3 from "../../assets/img/slider/slider-img-3.png";
import AboutImg3 from "../../assets/img/about/about-img-3.jpg";
import AboutImg4 from "../../assets/img/about/about-img-4.jpg";
import AboutImgShape3 from "../../assets/img/about/about-img-shape-3.png";
import Service9 from "../../assets/img/service/service-9.jpg";
import Service10 from "../../assets/img/service/service-10.jpg";
import Service11 from "../../assets/img/service/service-11.jpg";
import Service12 from "../../assets/img/service/service-12.jpg";
import AboutImg5 from "../../assets/img/about/about-img-5.jpg";
import BlogImg7 from "../../assets/img/blog/blog-img-7.jpg";
import BlogImg8 from "../../assets/img/blog/blog-img-8.jpg";
import BlogImg9 from "../../assets/img/blog/blog-img-9.jpg";
import Testimonial from "../../common/Testimonial";
import { Link } from "react-router-dom";

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
                    <div className="tp-slider-three z-index">
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
                    </div>
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
                  src={SliderImg3}
                  className="img-fluid"
                  alt="img not found"
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-slider-three z-index">
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
                    </div>
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
                  src={SliderImg3}
                  className="img-fluid"
                  alt="img not found"
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-slider-three z-index">
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
                    </div>
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
                  src={AboutImg3}
                  className="img-fluid"
                  alt="img-not-found"
                />
                <img
                  src={AboutImg4}
                  className="img-fluid tp-about-img-three-second"
                  alt="img-not-found"
                />
                <img
                  src={AboutImgShape3}
                  className="img-fluid tp-about-img-three-third"
                  alt="img-not-found"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                className="tp-about-text tp-about-text-three mb-30 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="section-title-wrapper mb-25">
                  <Typography
                    variant="h5"
                    className="tp-section-subtitle-three mb-20 theme-blue-color"
                  >
                    About UHC Services
                  </Typography>
                  <Typography
                    variant="h2"
                    className="tp-section-title-two color-theme-blue"
                  >
                    Cleaning Services for All
                  </Typography>
                </div>
                <Typography className="mb-40">
                  Fusce fusce ante dis varius iaculis quis penatibus do placerat
                  et convallis ultricies egestas hacker pharetra veile litora
                  nascetur diam dapibus euismod neque sapien siverra nunc nisler
                  fortune litora neque.
                </Typography>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <div className="tp-about-service mb-35">
                      <div className="tp-about-service-icon yellow-circle-shape mb-20">
                        <i className="flaticon-snowfall"></i>
                      </div>
                      <div className="tp-about-service-text">
                        <Typography
                          variant="h4"
                          className="tp-about-service-text-title mb-15"
                        >
                          <a href="service.html">
                            Residential Cleaning Services
                          </a>
                        </Typography>
                        <Typography>
                          Duis congue atend lorem consequat interdum pretium
                          ligula semper
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={6}>
                    <div className="tp-about-service mb-35">
                      <div className="tp-about-service-icon yellow-circle-shape mb-20">
                        <i className="flaticon-business-and-trade"></i>
                      </div>
                      <div className="tp-about-service-text">
                        <Typography
                          variant="h4"
                          className="tp-about-service-text-title mb-15"
                        >
                          <Link to="/services">
                            Commercial Cleaning Services
                          </Link>
                        </Typography>
                        <Typography>
                          Duis congue atend lorem consequat interdum pretium
                          ligula semper
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <div className="tp-about-three-btn">
                      <Button
                        variant="contained"
                        className="theme-btn"
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
          <Grid container spacing={3}>
            {[
              "House Cleaning",
              "Hospital Cleaning",
              "Kitchen Cleaning",
              "Window Cleaning",
            ].map((title, index) => (
              <Grid item lg={6} key={index}>
                <div
                  className="tp-service-three mb-30 wow fadeInUp"
                  data-wow-delay={`${0.6 + index * 0.3}s`}
                >
                  <div className="tp-service-three-img">
                    <img
                      src={[Service9, Service10, Service11, Service12][index]}
                      className="img-fluid"
                      alt="img-not-found"
                    />
                    <div className="tp-service-three-img-icon">
                      <i
                        className={`flaticon-${title
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      ></i>
                    </div>
                  </div>
                  <div className="tp-service-three-text fix">
                    <Typography
                      variant="h4"
                      className="tp-service-three-title mb-20"
                    >
                      <Link to="/services">{title}</Link>
                    </Typography>
                    <Typography className="mb-30">
                      Buscipit tincidunt duis antino gravidia nam tellusy
                      nascetur neque vulpuits aenean is scelerisque ultrces
                      muscle mass and matter order commo
                    </Typography>
                    <div className="tp-service-three-text-btn">
                      <Button
                        variant="contained"
                        className="yellow-btn"
                        href="service-details.html"
                      >
                        <i className="flaticon-enter"></i> Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
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
                          #305, 14225 57 Avenue, Surrey
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
