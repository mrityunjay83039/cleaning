import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SliderBg3 from '../../assets/img/slider/slider-bg-3.jpg';
import SliderIcon1 from '../../assets/img/icon/slider-icon-1.png';
import featureBg from '../../assets/img/icon/feature-bg.png';
import SliderImg3 from '../../assets/img/slider/slider-img-3.png';
import AboutImg3 from '../../assets/img/about/about-img-3.jpg';
import AboutImg4 from '../../assets/img/about/about-img-4.jpg';
import AboutImgShape3 from '../../assets/img/about/about-img-shape-3.png';
import Brand1 from '../../assets/img/brand/brand-1.png';
import Brand2 from '../../assets/img/brand/brand-2.png';
import Brand3 from '../../assets/img/brand/brand-3.png';
import Brand4 from '../../assets/img/brand/brand-4.png';
import Brand5 from '../../assets/img/brand/brand-5.png';
import Brand6 from '../../assets/img/brand/brand-6.png';
import Service9 from '../../assets/img/service/service-9.jpg';
import Service10 from '../../assets/img/service/service-10.jpg';
import Service11 from '../../assets/img/service/service-11.jpg';
import Service12 from '../../assets/img/service/service-12.jpg';
import Project5 from '../../assets/img/project/project-5.jpg';
import Project6 from '../../assets/img/project/project-6.jpg';
import Project7 from '../../assets/img/project/project-7.jpg';
import Project8 from '../../assets/img/project/project-8.jpg';
import Author2 from '../../assets/img/testimonial/author-2.png';
import Author3 from '../../assets/img/testimonial/author-3.png';
import Author4 from '../../assets/img/testimonial/author-4.png';
import NewsletterBg from '../../assets/img/blog/newsletter-bg.jpg';
import AboutImg5 from '../../assets/img/about/about-img-5.jpg';
import BlogImg7 from '../../assets/img/blog/blog-img-7.jpg';
import BlogImg8 from '../../assets/img/blog/blog-img-8.jpg';
import BlogImg9 from '../../assets/img/blog/blog-img-9.jpg';

const HomePage = () => {
  return (
    <main>
      {/* Hero Area Start Here */}
      <section className="tp-slider-area-three fix">
        <div className="tp-slider-active swiper-container">
          <Swiper>
            <SwiperSlide>
              <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center" data-swiper-autoplay="5000">
                <div className="slide-bg" style={{ backgroundImage: `url(${SliderBg3})` }}></div>
                <div className="slider-img-three">
                  <img src={SliderImg3} className="img-fluid" alt="img not found" />
                </div>
                <Container>
                  <Grid container>
                    <Grid item xs={12}>
                      <div className="tp-slider-three z-index">
                        <Typography variant="h6" className="tp-slider-three-subtitle" data-animation="fadeInUp" data-delay=".3s">
                          <img src={SliderIcon1} className="img-fluid" alt="img not found" /> Fast and efficient service
                        </Typography>
                        <Typography variant="h1" className="tp-slider-three-title" data-animation="fadeInUp" data-delay=".6s">
                          Cleaning <br /> Excellence <br /> Guaranteed!
                        </Typography>
                        <div className="tp-slider-three-btn" data-animation="fadeInUp" data-delay=".9s">
                          <Button variant="contained" className="yellow-btn" href="about.html">
                            <i className="flaticon-enter"></i> Learn More
                          </Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </SwiperSlide>
            
          </Swiper>
          <div className="swiper-button-prev slide-prev"><i className="far fa-long-arrow-left"></i></div>
          <div className="swiper-button-next slide-next"><i className="far fa-long-arrow-right"></i></div>
        </div>
      </section>
      {/* Hero Area End Here */}

      {/* Feature Area Start Here */}
      <section className="tp-feature-area-three pt-115 pb-80">
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
      </section>
      {/* Feature Area End Here */}

      {/* About Area Start Here */}
      <section className="tp-about-area-two position-relative pt-120 pb-85 bg-gray-light">
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <div className="tp-about-img-three pt-40 position-relative mb-30 wow fadeInUp" data-wow-delay=".3s">
                <img src={AboutImg3} className="img-fluid" alt="img-not-found" />
                <img src={AboutImg4} className="img-fluid tp-about-img-three-second" alt="img-not-found" />
                <img src={AboutImgShape3} className="img-fluid tp-about-img-three-third" alt="img-not-found" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="tp-about-text tp-about-text-three mb-30 wow fadeInUp" data-wow-delay=".6s">
                <div className="section-title-wrapper mb-25">
                  <Typography variant="h5" className="tp-section-subtitle-three mb-20">About The Klenar_ _</Typography>
                  <Typography variant="h2" className="tp-section-title-two color-theme-blue">Brightening The Home <br /> From Every Side</Typography>
                </div>
                <Typography className="mb-40">Fusce fusce ante dis varius iaculis quis penatibus do placerat et convallis ultricies egestas hacker pharetra veile litora nascetur diam dapibus euismod neque sapien siverra nunc nisler fortune litora neque.</Typography>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <div className="tp-about-service mb-35">
                      <div className="tp-about-service-icon yellow-circle-shape mb-20">
                        <i className="flaticon-snowfall"></i>
                      </div>
                      <div className="tp-about-service-text">
                        <Typography variant="h4" className="tp-about-service-text-title mb-15">
                          <a href="service.html">Residential Cleaning Services</a>
                        </Typography>
                        <Typography>Duis congue atend lorem consequat interdum pretium ligula semper</Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={6}>
                    <div className="tp-about-service mb-35">
                      <div className="tp-about-service-icon yellow-circle-shape mb-20">
                        <i className="flaticon-business-and-trade"></i>
                      </div>
                      <div className="tp-about-service-text">
                        <Typography variant="h4" className="tp-about-service-text-title mb-15">
                          <a href="service.html">Commercial Cleaning Services</a>
                        </Typography>
                        <Typography>Duis congue atend lorem consequat interdum pretium ligula semper</Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <div className="tp-about-three-btn">
                      <Button variant="contained" className="theme-btn" href="service-details.html">
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

      {/* Brand Area Start Here */}
      <div className="brand-area blue-dark-bg pt-100 pb-100">
        <Container>
          <div className="brand-active-two swiper-container">
            <Swiper>
              {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="brand-wrapper-two text-center">
                    <a href="#"><img src={brand} className="img-fluid" alt="img" /></a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
      {/* Brand Area End Here */}

      {/* Service Area Start Here */}
      <section className="tp-service-area-three pt-115 pb-200 bg-gray-light">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                <Typography variant="h5" className="tp-section-subtitle-three mb-20">_ _ Popular Services _ _</Typography>
                <Typography variant="h2" className="tp-section-title-two color-theme-blue">Quality Cleaning Making <br /> you Much Happy</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {['House Cleaning', 'Hospital Cleaning', 'Kitchen Cleaning', 'Window Cleaning'].map((title, index) => (
              <Grid item lg={6} key={index}>
                <div className="tp-service-three mb-30 wow fadeInUp" data-wow-delay={`${0.6 + index * 0.3}s`}>
                  <div className="tp-service-three-img">
                    <img src={[Service9, Service10, Service11, Service12][index]} className="img-fluid" alt="img-not-found" />
                    <div className="tp-service-three-img-icon">
                      <i className={`flaticon-${title.toLowerCase().replace(' ', '-')}`}></i>
                    </div>
                  </div>
                  <div className="tp-service-three-text fix">
                    <Typography variant="h4" className="tp-service-three-title mb-20">
                      <a href="service-details.html">{title}</a>
                    </Typography>
                    <Typography className="mb-30">Buscipit tincidunt duis antino gravidia nam tellusy nascetur neque vulpuits aenean is scelerisque ultrces muscle mass and matter order commo</Typography>
                    <div className="tp-service-three-text-btn">
                      <Button variant="contained" className="yellow-btn" href="service-details.html">
                        <i className="flaticon-enter"></i> Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      {/* Service Area End Here */}

      {/* Project Area Start Here */}
      <section className="tp-project-area-three pb-90">
        <div className="tp-newsletter-area-three position-relative pb-115">
          <Container>
            <div className="tp-newsletter-area-three-bg" style={{ backgroundImage: `url(${NewsletterBg})` }}>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xl={4}>
                  <div className="tp-newsletter-area-three-text">
                    <Typography variant="h2" className="tp-newsletter-area-three-title mb-20">Check Availability</Typography>
                    <div className="tp-newsletter-radio mr-20">
                      <input type="radio" id="test1" name="radio-group" defaultChecked />
                      <label htmlFor="test1">Residential</label>
                    </div>
                    <div className="tp-newsletter-radio">
                      <input type="radio" id="test2" name="radio-group" />
                      <label htmlFor="test2">Commercial</label>
                    </div>
                  </div>
                </Grid>
                <Grid item xl={6}>
                  <div className="tp-newsletter-area-three">
                    <form action="#">
                      <TextField type="email" placeholder="Write your email" variant="outlined" fullWidth />
                      <span><i className="fal fa-map-marker-alt"></i> Enter Address</span>
                      <Button type="submit" variant="contained" className="theme-btn">
                        <i className="flaticon-enter"></i> Subscribe
                      </Button>
                    </form>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container>
          <Grid container alignItems="center">
            <Grid item xl={4} lg={4} md={6}>
              <div className="tp-project-title-wrapper wow fadeInUp" data-wow-delay=".2s">
                <Typography variant="h5" className="tp-section-subtitle-three mb-20">Recent Project _ _</Typography>
                <Typography variant="h2" className="tp-section-title-two color-theme-blue mb-45">Brightening The Home From Every Side</Typography>
                <div className="tp-project-title-btn">
                  <Button variant="contained" className="yellow-btn" href="project-details.html">
                    <i className="flaticon-enter"></i> More Project
                  </Button>
                </div>
              </div>
            </Grid>
            {[Project5, Project6, Project7, Project8].map((project, index) => (
              <Grid item xl={4} lg={4} md={6} key={index}>
                <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay={`${0.4 + index * 0.3}s`}>
                  <div className="tp-project-three-img">
                    <img src={project} className="img" alt="img-not-found" />
                    <div className="tp-project-three-img-overlay">
                      <div className="tp-project-three-img-overlay-text">
                        <div className="tp-project-three-img-overlay-text-icon">
                          <a href={project} className="popup-image"><i className="fal fa-plus"></i></a>
                        </div>
                        <Typography variant="h4" className="tp-project-three-img-overlay-title">
                          <a href="project-details.html">{['project-5', 'project-6', 'project-7', 'project-8'][index].replace('-', ' ')}</a>
                        </Typography>
                        <span>{['Residential Service', 'Office Service', 'Kitchen Service', 'Hospital Service'][index]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      {/* Project Area End Here */}

      {/* Testimonial Area Start Here */}
      <section className="tp-testimonial-area-three pt-115 pb-190 bg-gray-light">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div className="section-title-wrapper text-center mb-55">
                <Typography variant="h5" className="tp-section-subtitle-three mb-20"> _ _ Customer Feedback _ _</Typography>
                <Typography variant="h2" className="tp-section-title-two color-theme-blue">Quality Cleaning Making <br /> you Much Happy</Typography>
              </div>
            </Grid>
          </Grid>
          <div className="tp-testimonial-three-shadow common-dots">
            <div className="tp-testimonial-three-active swiper-container">
              <Swiper>
                {[Author2, Author3, Author4].map((author, index) => (
                  <SwiperSlide key={index}>
                    <div className="tp-testimonial-two position-relative">
                      <div className="tp-testimonial-two-author mb-20">
                        <div className="tp-testimonial-two-author-img">
                          <img src={author} className="img-fluid" alt="img not found" />
                        </div>
                        <div className="tp-testimonial-two-author-text">
                          <span>Senior Designer</span>
                          <Typography variant="h4" className="tp-testimonial-two-name">{['Petar Mansion', 'Jhon Doe', 'Shane Watson'][index]}</Typography>
                        </div>
                      </div>
                      <Typography>
                        Hymenaeos rhoncus proin aliquam justo sum mauris rutrum nulam semper purus rutru non sociis libero varius cumer to duine felis enisa porta ridiculus nisl acequis.
                      </Typography>
                      <div className="tp-testimonial-two-qoute">
                        <i className="fal fa-quote-left"></i>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination-testimonial slide-dots"></div>
            </div>
          </div>
        </Container>
      </section>
      {/* Testimonial Area End Here */}

      {/* CTA Area Start Here */}
      <section className="tp-appoint-cta-area blue-dark-bg pt-80 pb-65">
        <Container>
          <Grid container alignItems="center">
            <Grid item xl={2} lg={12}>
              <div className="tp-appoint wow fadeInUp" data-wow-delay=".2s">
                <Typography variant="h4" className="tp-appoint-title text-white">Online <br /> Appointment </Typography>
              </div>
            </Grid>
            <Grid item xl={8} lg={9}>
              <Grid container alignItems="center">
                <Grid item lg={4}>
                  <div className="tp-appoint tp-appoint-three wow fadeInUp" data-wow-delay=".4s">
                    <TextField placeholder="Full Name" fullWidth />
                  </div>
                </Grid>
                <Grid item lg={4}>
                  <div className="tp-appoint tp-appoint-three wow fadeInUp" data-wow-delay=".6s">
                    <TextField placeholder="Phone Number" fullWidth />
                  </div>
                </Grid>
                <Grid item lg={4}>
                  <div className="tp-appoint tp-appoint-three select-field-arrow wow fadeInUp" data-wow-delay=".8s">
                    <Select fullWidth>
                      <MenuItem value="">Service Name</MenuItem>
                      <MenuItem value="commercial">Commercial Service</MenuItem>
                      <MenuItem value="residential">Residential Service</MenuItem>
                      <MenuItem value="industrial">Industrial Service</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={2} lg={3}>
              <div className="tp-appoint tp-appoint-three text-end wow fadeInUp" data-wow-delay="1s">
                <Button variant="contained" className="theme-btn">
                  <i className="flaticon-enter"></i> Submit Now
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* CTA Area End Here */}

      {/* Choose Area Start Here */}
      <section className="tp-choose-area-three position-relative mt-120 pb-50">
        <div className="tp-choose-area-three-img">
          <img src={AboutImg5} alt="img-not-found" />
          <div className="tp-choose-three-year tp-choose-three-year-responsive mb-50">
            <div className="tp-choose-three-year-inner">
              <Typography variant="h3">20 Years</Typography>
              <Typography variant="h4">Successfully <br /> Provide Service</Typography>
            </div>
          </div>
        </div>
        <Container>
          <Grid container alignItems="end" justifyContent="center">
            <Grid item xl={6} textAlign="end" display={{ xs: 'none', xl: 'block' }}>
              <div className="tp-choose-three-year mb-50">
                <div className="tp-choose-three-year-inner">
                  <Typography variant="h3">20 Years</Typography>
                  <Typography variant="h4">Successfully <br /> Provide Service</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={10}>
              <div className="tp-choose-three">
                <div className="section-title-wrapper mb-25">
                  <Typography variant="h5" className="tp-section-subtitle-three mb-20">Why Choose Us _ _</Typography>
                  <Typography variant="h2" className="tp-section-title-two color-theme-blue">Find Standard Cleaning <br /> with Personal Touch</Typography>
                </div>
                <Typography className="mb-45">Sed nteger porta vel placerat cra torquent dolor site habitasse elementum disign proin pulvinar class quam socis quam cum quisque ennim praesent anest amet fermentum proin donec massa augue in neque sapien</Typography>
                <Grid container spacing={2}>
                  {['Online Estimation', 'Project Discount', 'Work Monitoring', 'Satisfied Service'].map((title, index) => (
                    <Grid item sm={6} key={index}>
                      <div className="tp-about-service mb-55">
                        <div className="tp-about-service-icon yellow-circle-shape mb-20">
                          <i className={`flaticon-${title.toLowerCase().replace(' ', '-')}`}></i>
                        </div>
                        <div className="tp-about-service-text">
                          <Typography variant="h4" className="tp-about-service-text-title mb-15">
                            <a href="service.html">{title}</a>
                          </Typography>
                          <Typography>Facilsis veicula hendrerit turp turpis solutat neique dapibus justo rdiculu dapibus no ridiculuy</Typography>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Choose Area End Here */}

      {/* Blog Area Start Here */}
      <section className="tp-blog-area-three bg-gray-light pt-115">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div className="section-title-wrapper mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                <Typography variant="h5" className="tp-section-subtitle-three mb-20">_ _ Recent Article_ _</Typography>
                <Typography variant="h2" className="tp-section-title-two color-theme-blue">Stay Connect Our Journal <br /> Every Moment</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {[BlogImg7, BlogImg8, BlogImg9].map((img, index) => (
              <Grid item lg={4} md={6} key={index}>
                <div className="tp-blog-three mb-30 wow fadeInUp" data-wow-delay={`${0.4 + index * 0.3}s`}>
                  <div className="tp-blog-three-img">
                    <a href="blog-details.html"><img src={img} className="img" alt="img-not-found" /></a>
                  </div>
                  <div className="tp-blog-three-text">
                    <div className="tp-blog-three-text-meta">
                      <a href="blog-details.html">By Jhon Cardo</a>
                      <span>_ _</span>
                      <a href="blog-details.html">Jun 02 - 2021</a>
                    </div>
                    <Typography variant="h4" className="tp-blog-three-title mb-15">
                      <a href="blog-details.html">Baoreet and placerat amet class rempus manusp curpise</a>
                    </Typography>
                    <div className="tp-blog-three-link">
                      <a href="blog-details.html"><i className="flaticon-enter"></i> Continue Reading</a>
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
                  <div className="tp-contact-cta border-r-1 wow fadeInUp" data-wow-delay=".3s">
                    <div className="tp-contact-cta-inner">
                      <div className="tp-contact-cta-inner-icon">
                        <i className="flaticon-home"></i>
                      </div>
                      <div className="tp-contact-cta-inner-text">
                        <span>Office Address</span>
                        <Typography variant="h5">34/A Palmal, London</Typography>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <div className="tp-contact-cta border-r-2 wow fadeInUp" data-wow-delay=".6s">
                    <div className="tp-contact-cta-inner justify-content-center">
                      <div className="tp-contact-cta-inner-icon">
                        <i className="flaticon-support"></i>
                      </div>
                      <div className="tp-contact-cta-inner-text">
                        <span>Free Contact</span>
                        <Typography variant="h5"><a href="tel:02(850)2566325">02 (850) 256 6325</a></Typography>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={6}>
                  <div className="tp-contact-cta wow fadeInUp" data-wow-delay=".9s">
                    <div className="tp-contact-cta-inner justify-content-end">
                      <div className="tp-contact-cta-inner-icon">
                        <i className="flaticon-email-1"></i>
                      </div>
                      <div className="tp-contact-cta-inner-text">
                        <span>Email Address</span>
                        <Typography variant="h5"><a href="mailto:info@thempure.com">info@thempure.com</a></Typography>
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
  )
}

export default HomePage
