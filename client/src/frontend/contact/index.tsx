import { InlineWidget } from "react-calendly";
import BreadCrumb from "../../common/BreadCrumb";

const ContactUs = () => {
  return (
    <>
      <BreadCrumb breadCrumTitle="Free Contact" pageName="Contact Us" />

      <InlineWidget
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "0172bd",
          textColor: "333333",
        }}
        url="https://calendly.com/mrityunjaykr83039/30min"
      />

      {/* <!-- map area start here --> */}
      <div className="tp-map-area pt-120 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.9522181441257!2d-122.83091182466639!3d49.106548183212276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dba9b0ce8d63%3A0x47868701f4299a8e!2s14225%2057%20Ave%2C%20Surrey%2C%20BC%20V3X%202W6%2C%20Canada!5e0!3m2!1sen!2sin!4v1739240748594!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- map area end here --> */}

      {/* <!-- contact area start here --> */}
      {/* <section className="tp-contact-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div
                className="section-title-wrapper-two mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">
                  Get Free Estimate
                </h5>
                <h2 className="tp-section-title heading-color-black">
                  If you Have Any Query, Don’t Hesitate <br />
                  Contact with us{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="row custom-mar-20">
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-contact-info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Address</h4>
                      <p>
                        #305, 14225 57 Avenue, Surrey, British Columbia, Canada
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-contact-info-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Phone</h4>
                      <a href="tel:+1(778)800-4455">+1(778)800-4455</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="tp-contact-info-icon">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Email</h4>
                      <a href="mailto:info@uhcservices.ca">
                        info@uhcservices.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-contact-form">
                <div className="row custom-mar-20">
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="text" placeholder="Full name" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field select-field-arrow mb-20">
                      <select>
                        <option value="">Choose Subject</option>
                        <option value="">House Cleaning</option>
                        <option value="">Office Cleaning</option>
                        <option value="">Kitchen Cleaning</option>
                        <option value="">Club Cleaning</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <textarea placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 custom-pad-20">
                    <div className="tp-contact-form-field">
                      <button type="submit" className="theme-btn">
                        <i className="flaticon-enter"></i> Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- contact area end here --> */}
    </>
  );
};

export default ContactUs;
