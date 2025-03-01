import BreadCrumb from "../../common/BreadCrumb";
import ServiceListLeftSection from "../../common/ServiceListLeftSection";
import ServiceCallToAction from "../../common/ServiceCallToAction";

const CommercialCleaning = () => {
  return (
    <>
      <BreadCrumb
        breadCrumTitle="Commercial Cleaning Service"
        pageName="Commercial Cleaning Service"
      />

      <section className="tp-service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-faqs-left">
                <ServiceListLeftSection />

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
                      <img
                        src="../img/service/commercial-cleaning-service.png"
                        alt="Commercial Cleaning Service"
                        style={{ aspectRatio: "3/2" }}
                      />
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">
                  Commercial Cleaning Service
                </h2>
                <p>
                  In today's fast-paced business environment, maintaining a
                  clean and hygienic space is essential. Our Regular Cleaning
                  Service is specifically designed to meet the high standards
                  required by businesses, offices, and commercial properties. We
                  understand that a pristine workspace not only reflects
                  positively on your brand but also contributes to a healthier
                  and more productive environment for employees and visitors
                  alike.
                </p>

                <p>
                  Our dedicated team of cleaning professionals utilizes
                  state-of-the-art equipment and premium cleaning products to
                  deliver outstanding results every time. We offer a
                  comprehensive suite of services that includes dusting,
                  vacuuming, floor cleaning, window washing, and disinfecting.
                  Each service is executed with precision and care, ensuring
                  that every surface—from high-touch areas to expansive office
                  floors—is thoroughly cleaned and maintained.
                </p>

                <p>
                  Dusting is carried out meticulously to remove allergens and
                  debris that can affect indoor air quality, while our vacuuming
                  services target both visible dirt and hidden particles in
                  high-traffic areas. Our floor cleaning process is tailored to
                  the specific needs of your flooring, ensuring that carpets,
                  tiles, or hardwood surfaces are treated with the appropriate
                  cleaning method to preserve their appearance and longevity.
                  Clean windows not only enhance the overall look of your
                  property but also allow more natural light to brighten your
                  workspace. Additionally, our rigorous disinfecting routines
                  are designed to reduce the spread of germs and create a safer
                  environment in today’s health-conscious climate.
                </p>

                <p>
                  We offer flexible scheduling options to accommodate the unique
                  needs of your business. Whether you require cleaning services
                  on a daily, weekly, or monthly basis, our team will work
                  around your operational hours to minimize disruption. Our
                  commitment to reliability and consistency means you can always
                  count on us to deliver exceptional cleaning results,
                  regardless of the size or complexity of your commercial space.
                </p>

                <p>
                  Choosing our Regular Cleaning Service is an investment in the
                  well-being and efficiency of your business. We strive to
                  create a spotless environment that not only meets regulatory
                  standards but also sets a benchmark for excellence in
                  cleanliness and hygiene. With our expert team at your service,
                  you can rest assured that every corner of your property will
                  be maintained to the highest level of care.
                </p>

                <p>
                  Ready to elevate your business environment and create a
                  welcoming, healthy workspace? Book Now and experience the
                  transformative impact of a professionally cleaned property!
                </p>
                <ServiceCallToAction />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommercialCleaning;
