import BreadCrumb from "../../common/BreadCrumb";
import Service from "../../common/service";
import { serviceList_servicePage } from "../../config/constants";

const Services = () => {
  return (
    <>
      <BreadCrumb breadCrumTitle="Our Services" pageName="Services" />
      <section className="tp-service-area-three pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-wrapper text-center mb-55 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">
                  Our Best Services
                </h5>
                <h2 className="tp-section-title heading-color-black">
                  Quality Cleaning Making <br />
                  you Much Happy
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceList_servicePage.map((ele) => {
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
        </div>
      </section>
    </>
  );
};

export default Services;
