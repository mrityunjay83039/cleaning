import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import FooterBlog1 from "../assets/img/footer/footer-blog-1.png";
import FooterBlog2 from "../assets/img/footer/footer-blog-2.png";

const Footer = () => {
  return (
    <footer className="theme-dark-bg2">
      {/* Footer Area */}
      <Box className="tp-footer-area-two pt-160 pb-70">
        <Container>
          <Grid container spacing={2}>
            {/* Column 1 */}
            <Grid xs={12} sm={6} lg={4}>
              <Box
                className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <Box className="tp-footer-info tp-footer-info-three">
                  <Box className="tp-footer-info-logo mb-35">
                    <Link to="/">
                      <CardMedia
                        component="img"
                        image="./logo.png"
                        alt="Logo"
                        sx={{ width: "150px" }}
                      />
                    </Link>
                  </Box>
                  <Typography variant="body1" className="text-white mb-35">
                    Pulvinar seneius morbi to quisque nunc a towa faucibus netus
                    a mone lestie nice disease
                  </Typography>
                  <Box className="tp-footer-info-social tp-footer-info-social-three">
                    <a
                      href="https://www.facebook.com/uhcservices/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.x.com/uhc_services" target="_blank">
                      <img
                        src="/img/twitter.png"
                        alt="Twitter"
                        style={{ filter: "invert(1)", width: "35%" }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/uhc_services/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/uhc-services/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/@uhc_services"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>

                    
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Column 2 */}
            <Grid xs={12} sm={6} lg={4}>
              <Box
                className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <Typography
                  variant="h4"
                  className="tp-footer-widget-title mb-35"
                >
                  Our Services
                </Typography>
                <ul>
                  <li>
                    <a href="#">Carpet Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Plumbing Serivices</a>
                  </li>
                  <li>
                    <a href="#">Park Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Residential Services</a>
                  </li>
                  <li>
                    <a href="#">Toilet Cleaning</a>
                  </li>
                </ul>
              </Box>
            </Grid>

            {/* Column 3 */}
            <Grid xs={12} sm={6} lg={4}>
              <Box
                className="tp-footer-widget mb-30 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <Typography
                  variant="h4"
                  className="tp-footer-widget-title mb-35"
                >
                  Recent News
                </Typography>
                <Box className="tp-footer-news tp-footer-news-three">
                  <Box className="tp-footer-news-single tp-footer-news-three-single mb-10">
                    <Box className="tp-footer-news-three-single-img">
                      <a href="blog-details.html">
                        <img
                          src={FooterBlog1}
                          className="img-fluid"
                          alt="img-not-found"
                        />
                      </a>
                    </Box>
                    <Box className="tp-footer-news-three-single-text">
                      <Typography variant="h6">
                        <a href="blog-details.html">
                          Feugiat pharetra a ductor nonuy vehicula
                        </a>
                      </Typography>
                      <Typography variant="body2">
                        <span>Jun 02, 2021</span>
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="tp-footer-news-single tp-footer-news-three-single mb-10">
                    <Box className="tp-footer-news-three-single-img">
                      <a href="blog-details.html">
                        <img
                          src={FooterBlog2}
                          className="img-fluid"
                          alt="img-not-found"
                        />
                      </a>
                    </Box>
                    <Box className="tp-footer-news-three-single-text">
                      <Typography variant="h6">
                        <a href="blog-details.html">
                          Curabitur tortor venenatis an scelerisque
                        </a>
                      </Typography>
                      <Typography variant="body2">
                        <span>Jun 03, 2021</span>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Column 4 */}
            {/* <Grid xs={12} sm={6} lg={3}>
              <Box
                className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <Typography
                  variant="h4"
                  className="tp-footer-widget-title mb-40"
                >
                  Newsletter
                </Typography>
                <Box className="tp-footer-newsletter-three">
                  <Typography variant="body1" className="mb-20">
                    Sign up to get new exclusive offers
                  </Typography>
                  <form action="#">
                    <Box
                      className="tp-footer-newsletter-three-field position-relative mb-20"
                      component="div"
                    >
                      <input type="email" placeholder="Enter Email" />
                      <i className="fal fa-paper-plane"></i>
                    </Box>
                    <Button type="submit" className="yellow-btn">
                      <i className="flaticon-enter"></i> Subscribe
                    </Button>
                  </form>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </Container>
      </Box>

      {/* Copyright Area */}
      <Box className="tp-copyright-area-two theme-dark-bg3 z-index pt-30 pb-30">
        <Container>
          <Grid container justifyContent="center">
            <Grid size={12}>
              <Box className="tp-copyright tp-copyright-two text-center">
                <Typography variant="body2" className="m-0">
                  Copyright ©2025 <span>UHC Services</span>. All Rights
                  Reserved.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ position: "absolute", left: 0, bottom: 0 }}>
        <Link
          to="https://wa.me/+17788004455"
          target="_blank"
          style={{
            position: "fixed",
            left: "10px",
            bottom: "-12px",
            color: "#91cc22",
            zIndex: "99999",
            fontSize: "80px",
          }}
        >
          <i className="fab fa-whatsapp"></i>
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
