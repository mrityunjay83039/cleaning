// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AppSnackBar from "./snackBar";
import { CardMedia } from "@mui/material";

const Header = () => {
  return (
    <>
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
                    sx={{width:'150px'}}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-4">
                <div className="tp-main-menu tp-main-menu-three">
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
                        <Link to="/service">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/service">Services</Link>
                          </li>
                          <li>
                            <Link to="/service-details">Services Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/blog-sidebar">Blog</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/blog-sidebar">Blog Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
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
                  <div className="tp-header-number-three">
                    <span>
                      Call Us : <a href="tel:33888200-55">33 888 200 - 55</a>
                    </span>
                  </div>
                  <div className="tp-header-btn-three">
                    <a href="contact.html" className="yellow-btn">
                      <i className="flaticon-enter"></i> Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
