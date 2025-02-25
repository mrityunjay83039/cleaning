import React from "react";
import BreadCrumb from "./BreadCrumb";
import { serviceList_servicePage } from "../config/constants";
import { Link } from "react-router-dom";
import serviceFeature from "../assets/img/icon/service-feature.png";

const ServiceDetails = ({ serviceData }) => {
  const { service_image, service_name, service_description } = serviceData;

  return (
    <>
      <BreadCrumb breadCrumTitle={service_name} pageName={service_name} />

      <section className="tp-service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-faqs-left">
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title">Category...</h4>
                  <ul>
                    {serviceList_servicePage.map((ele) => {
                      return (
                        <li key={ele.id}>
                          <a href={ele.btnLink}>
                            {ele.title}
                            <i className="fas fa-arrow-circle-right"></i>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title mb-30">
                    Contact Us Now
                  </h4>
                  <div className="tp-services-sidebar-btn">
                    <a href="tel: +1(778)800-4455" className="mb-15">
                      +1(778)800-4455
                    </a>
                    <a href="mailto:info@uhcservices.ca" className="mb-10">
                      info@uhcservices.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-service-details">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="tp-service-details-img mb-30">
                      <img src={service_image} alt="img not found" />
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">
                  {service_name}
                </h2>
                {service_description}
                {/* <p className="mb-20">
                  Fusce fusce ante dis varius iaculis quis penatibus do placerat
                  et convallis ultricies egestas hacker pharetra veile litora
                  nascetur diam dapibus euismod neque sapien siverra nunc nisler
                  fortune litora neque ultrices eros aenean habitant tellus
                  torquent ipsum, commodo Ligula curae; auctor ultricies laoreet
                  metus cubilia enim faucibus litora nibh torquent platea
                  sodales auctor gravida tortor class litora id arcu conubia.
                  Augue suscipit metus ante eu rhoncus cras. Ipsum nulla feugiat
                  nam pede cras a eleifend. Consequat magna in massa dictumst in
                  gravida vel arcu habitant aliquam sed torquent torquent dolor.
                  Diam tortor. Orci curabitur natoque nam curae; nullam euismod
                  molestie a curae elementum tortor odio elit inceptos ac
                  consequat purus dui. Ad mollis eget nullam. Nulla neque turpis
                  interdum hymenaeos pretium blandit. Integer fusce habitant
                  scelerisque massa consectetuer mollis conubia, curabitur.
                </p>
                <p className="mb-35">
                  Neque gravida dui fermentum pulvinar fringilla sodales massa
                  hendrerit nascetur. Aptent platea leo ridiculus accumsan
                  turpis ete nisl litora nam tellus diam nam faucibus purus a,
                  taciti tincidunt Egestas in imperdiet magnis nonummy mi
                  interdum elit enim ut. Curabitur quis vitae lobortis quam
                  lacus pharetra mus, arcu. Vele Facilisi orci orci nisi
                  consequat dignissim duise in iaculis pulvinar hymenaeos
                  pharetra tortor phasellus. Consectetuer penatibus id. Eleifend
                  potenti. Elit purus fermentum idev posuere nullam iaculis.
                  Fusce orci co nsectetuer. Metus nonummy turpis sodales vivamus
                  mollis posuere fermentum{" "}
                </p>
                <h3 className="tp-service-details-subtitle">
                  Service Overview
                </h3>
                <p className="mb-40">
                  Quisque maorbi gravida, enim hendrerit nunc feugiat vehicula
                  fringilla. Ridiculus sapien curabitur. Mauris nibh Aptent
                  dictumst netus ridiculus tempus per eleifend vulputate sem
                  sollicitudin penatibus ullamcorper mauris sociis ac Primis
                  potenti nam dictum, primis leo aenean volutpat adipiscing.
                  Metus, elit. Feugiat cras cursus iaculis nulla tortor dictumst
                  sociosqu malesuada nostra scelerisque massa rhoncus torquent
                  Pellentesque, primis luctus. Donec eget vivamus integer. Class
                  habitasse tempor arcu a congue eleifend maecenas potenti
                  nascetur. Senectus netus dolor donec arcu nisi malesuada erat
                  a mattis, fames. Ut vestibulum enim tincidunt varius ligula mi
                  conubia quisque pretium bibendum. Mauris montes fusce dolor
                  leo aliquet tempus felis.
                </p> */}
                <div className="tp-service-details-img mb-30 position-relative">
                  <img
                    src="assets/img/service/service-details-3.jpg"
                    alt="img not found"
                  />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <a
                        className="venobox"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://youtu.be/o4GuSJYSzrY"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <p className="mb-25 d-flex">
                  <i className="far fa-check-circle"></i> Imperdiet. Iaculis
                  bibendum platea feugiat erat commodo maecenas sociosqu varius
                  nunc litora fringilla Tincidunt ad neque vitae duis mus
                  phasellus pede rutrum rutrum massa dis purus magnis senectus
                  ridiculus vestibulum. Cursus accumsan praes tesque massa
                  consectetuer etiam laoreet velit sagittis erat Inceptos
                </p>
                <p className="mb-35 d-flex">
                  <i className="far fa-check-circle"></i> Commodo maecenas
                  sociosqu, varius nunc litora fringilla Tincidunt ad neque
                  vitae duis mus phasellus pede rutrum rutrum massa purus magnis
                  senectus ridiculus vestibulum praes tesque massa consectetuer{" "}
                </p>
                <h3 className="tp-service-details-subtitle mb-20">
                  Why Choose us
                </h3>
                <p className="mb-35">
                  Sem sollicitudin penatibus ullamcorper mauris sociis ac primis
                  potenti nam dictum, primis leo aenean volutpat adipiscing
                  metus elite Feugiat cras cursus iaculis nulla tortor dictumst
                  sociosqu malesuada nostra scelerisque
                </p>

                {/* call to action section */}

                <div className="row">
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img
                          src={serviceFeature}
                          className="img-fluid"
                          alt="img not found"
                        />
                        <i className="flaticon-booking"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/about-us" target="_blank">
                          About <br />
                          Us
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img
                          src={serviceFeature}
                          className="img-fluid"
                          alt="img not found"
                        />
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="https://wa.me/+17788004455" target="_blank">
                          Get Support On <br />
                          Whatsapp
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img
                          src={serviceFeature}
                          className="img-fluid"
                          alt="img not found"
                        />
                        <i className="flaticon-boy"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/contact-us" target="_blank">
                          Book an <br />
                          Appointement
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Call to action section ends  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
