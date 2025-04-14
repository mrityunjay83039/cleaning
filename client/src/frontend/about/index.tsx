import aboutAuthor from "../../assets/img/about/about-author.png";
import Faq from "../../common/Faq";
import { Typography } from "@mui/material";
import BreadCrumb from "../../common/BreadCrumb";

const About = () => {
  return (
    <>
      <BreadCrumb breadCrumTitle="About UHC" pageName="About Us" />
      <section className="tp-about-area tp-abouts-area position-relative pt-120 pb-100 fix">
        <div className="container">
          {/* <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            
          </div>
        </div> */}
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div
                className="tp-about-img-two tp-abouts-img-two position-relative mr-80 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <img
                  src="./img/service/commercial-cleaning-service.png"
                  className="img-fluid"
                  alt="about image"
                  style={{width:'70%'}}
                />
                <img
                  src="./img/service/post-renovation-cleaning.jpg"
                  className="img-fluid img-second"
                  alt="about image"
                  style={{width:"80%"}}
                />
                <div className="tp-about-img-two-badge">
                  <h3>5</h3>
                  <h5>
                  Star <br />
                  Rated on Google
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-10">
              <div
                className="tp-about-text tp-about-inner-page-text z-index wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="section-title-wrapper mb-30">
                  <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">
                    About our UHC
                  </h5>
                  <h2 className="tp-section-title heading-color-black">
                    Our Success Cleaning <br />
                    Up your Mess
                  </h2>
                </div>
                <p className="mb-40">
                  UHC is a professional cleaning company providing cleaning
                  services throughout British Columbia. We provide cleaning
                  services for commercial properties, offices, residential
                  buildings, warehouses, banks, hospitals, senior homes,
                  restaurants, educational institutions, and construction-sites
                  as well. We excel in providing top-notch services. Our
                  experienced team has all the relevant certifications and
                  high-tech equipment’s to perform the job.
                </p>

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
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </section>
    </>
  );
};

export default About;
