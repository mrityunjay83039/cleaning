// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AppSnackBar from "./snackBar";
import { CardMedia } from "@mui/material";
import { serviceList_servicePage } from "../config/constants";

const Header = () => {
  return (
    <>
      {/* <!-- preloader --> */}
      {/* <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div> */}
      {/* <!-- preloader end  --> */}

      {/* <!-- back to top start --> */}
      {/* <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div> */}
      {/* <!-- back to top end --> */}
      <AppSnackBar />
      <header>
        <div className="tp-header-area-three header-sticky">
          <div className="tp-custom-container">
            <div className="row justify-content-xl-center align-items-center">
              <div className="col-xxl-2 col-xl-3 col-8">
                <div className="tp-header-logo-three">
                  <Link to="/">
                    <CardMedia
                      component="img"
                      image="./logo.png"
                      alt="Logo"
                      sx={{ width: "120px" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-4">
                <div className="tp-main-menu tp-main-menu-three text-center">
                  <nav id="tp-mobile-menu">
                    <ul>
                      <li className="menu-item-has-children">
                        <Link to="/" className="active">
                          Home
                        </Link>
                        {/* If you plan to add a sub-menu for Home, include it here */}
                      </li>
                      <li>
                        <Link to="/about-us">About</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/services">Services</Link>
                        <ul className="sub-menu service-submenu">
                          <div className="row">
                            {serviceList_servicePage.map((item) => {
                              return (
                                <div className="col-md-4">
                                  <li key={item.id}>
                                    <Link to={item.btnLink}>{item.title}</Link>
                                  </li>
                                </div>
                              );
                            })}
                          </div>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/blogs">Blog</Link>
                        {/* <ul className="sub-menu">
                          <li>
                            <Link to="/blog-sidebar">Blog Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* mobile menu activation */}
                <div className="side-menu-icon d-xl-none text-end">
                  <button className="side-toggle">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-3 d-none d-xl-block">
                <div className="tp-header-right-three">
                  {/* <div className="tp-header-number-three">
                    <span>
                      Call Us : <a href="tel:33888200-55">33 888 200 - 55</a>
                    </span>
                  </div> */}
                  <div className="tp-header-btn-three">
                    <Link to="/contact-us" className="yellow-btn">
                      <i className="flaticon-enter"></i> Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- mobile menu info --> */}
      <div className="fix">
        <div className="side-info">
          <button className="side-info-close">
            <i className="fal fa-times"></i>
          </button>
          <div className="side-info-content">
            <div className="tp-mobile-menu mean-container">
              <div className="mean-bar">
                <nav className="mean-nav">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link to="/" className="active">
                        Home
                      </Link>
                      {/* If you plan to add a sub-menu for Home, include it here */}
                    </li>
                    <li>
                      <Link to="/about-us">About</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/services">Services</Link>
                      <ul className="sub-menu">
                        {serviceList_servicePage.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link to={item.btnLink}>{item.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/blogs">Blog</Link>
                      {/* <ul className="sub-menu">
                          <li>
                            <Link to="/blog-sidebar">Blog Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul> */}
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="contact-infos mb-30">
              <div className="contact-list mb-30">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <i className="flaticon-pin"></i>#305, 14225 57 Avenue,
                    Surrey, BC, Canada
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <a href="mailto:info@uhcservices.ca">info@uhcservices.ca</a>
                  </li>
                  <li>
                    <i className="flaticon-phone-call"></i>
                    <a href="tel:+1(778)800-4455">+1(778)800-4455</a>
                  </li>
                </ul>
                <div className="sidebar__menu--social">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay"></div>
      {/* <!-- mobile menu info --> */}
    </>
  );
};

export default Header;
