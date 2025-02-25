import BreadCrumb from "../../common/BreadCrumb";
import ServiceListLeftSection from "../../common/ServiceListLeftSection";
import ServiceCallToAction from "../../common/ServiceCallToAction";

const StrataCleaning = () => {
  return (
    <>
      <BreadCrumb
        breadCrumTitle="Strata Cleaning Service"
        pageName="Strata Cleaning Service"
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
                        src="../img/service/strata-cleaning-service.jpg"
                        alt="Strata Cleaning Service"
                        style={{ aspectRatio: "3/2" }}
                      />
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">
                  Strata Cleaning Service
                </h2>
                <p>
                  Our strata cleaning service is specifically designed to
                  maintain the pristine condition of multi-unit residential
                  buildings. We understand that common areas such as hallways,
                  lobbies, stairwells, elevators, parking garages, and outdoor
                  spaces are the heart of any property. A spotless environment
                  not only enhances the building’s appearance but also
                  contributes to a safe, inviting space for all residents.
                </p>

                <p>
                  In every strata property, the cleanliness of shared areas
                  directly impacts the daily lives of residents and visitors
                  alike. Our expert team works diligently to ensure that these
                  high-traffic zones are kept immaculate. Whether it’s removing
                  daily dust and debris from hallways or deep cleaning lobbies
                  to create a welcoming atmosphere, our approach is both
                  thorough and tailored to the specific needs of your building.
                </p>

                <p>
                  We pay close attention to detail in every task we undertake.
                  Our cleaning process includes regular maintenance and
                  intensive cleaning sessions as required, ensuring that every
                  surface in your building is spotless. From cleaning the
                  often-overlooked corners of stairwells to meticulously
                  sanitizing elevators, our service covers all aspects necessary
                  to maintain a high standard of hygiene and presentation.
                </p>

                <p>
                  Our team uses only top-quality cleaning products and equipment
                  to achieve exceptional results. We are committed to
                  environmentally responsible practices and ensure that all
                  cleaning materials are safe for both residents and the planet.
                  This approach not only preserves the longevity of your
                  building’s fixtures but also creates a healthier, more
                  sustainable living environment for everyone.
                </p>

                <p>
                  Reliability and professionalism are at the core of our
                  service. We understand that multi-unit residential buildings
                  require a dependable cleaning schedule, and our flexible plans
                  are designed to work around your building’s unique needs.
                  Whether you require daily, weekly, or bi-weekly cleaning
                  services, we are here to deliver a consistent and efficient
                  service that you can trust.
                </p>

                <p>
                  Our strata cleaning service is more than just a routine
                  chore—it is an investment in the quality of life for your
                  residents. A clean, well-maintained property boosts resident
                  satisfaction and can even increase the property’s overall
                  value. We are dedicated to ensuring that every common area is
                  maintained to the highest standards, reflecting positively on
                  both property management and the community as a whole.
                </p>

                <p>
                  Ready to elevate the standard of cleanliness in your building?
                  Schedule your strata cleaning service today and experience the
                  peace of mind that comes with knowing every common area is
                  expertly maintained. Trust in our team to create a safer,
                  cleaner, and more attractive environment for all residents,
                  ensuring your property always looks its best.
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

export default StrataCleaning;
