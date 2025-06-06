import { CardMedia } from "@mui/material";
import faqImage2 from "../assets/img/feature/faq-img-2.png";

const Faq = () => {
  return (
    <section className="tp-faq-area">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6 order-2 order-lg-1">
            <div className="tp-about-faq-img">
              <CardMedia
                component="img"
                src={faqImage2}
                alt="Image Not Found"
              />
            </div>
          </div> */}
          <div className="col-lg-12">
            <div className="tp-faq-text tp-about-faq-text pt-130 pb-120">
              <div className="section-title-wrapper-two mb-45 text-center">
                <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">
                  Frequently Asked Questions (FAQs)
                </h5>
                <h2 className="tp-section-title heading-color-black text-center">
                  Every Cleaning Related <br />
                  Answer is Here
                </h2>
              </div>
              <div className="accordion mb-4" id="accordion-gq">
                <h4 className="accordion-header mb-4">
                  General Questions
                </h4>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="gq-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-gq-1"
                      aria-expanded="false"
                      aria-controls="collapse-gq-1"
                    >
                      What types of cleaning services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapse-gq-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="gq-1"
                    data-bs-parent="#accordion-gq"
                  >
                    <div className="accordion-body">
                      We offer residential, commercial, construction, and post-renovation cleaning services. Each service is customizable to meet the specific needs of the clients.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-gq-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-gq-2"
                      aria-expanded="false"
                      aria-controls="collapse-gq-2"
                    >
                      How do I book a cleaning service?
                    </button>
                  </h2>
                  <div
                    id="collapse-gq-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-gq-2"
                    data-bs-parent="#accordion-gq"
                  >
                    <div className="accordion-body">
                      You can book through our website, by phone, or via email. We’ll confirm availability and provide a quote based on your requirements.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-0">
                  <h2 className="accordion-header" id="heading-gq-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-gq-3"
                      aria-expanded="false"
                      aria-controls="collapse-gq-3"
                    >
                      Do you bring your own cleaning supplies and equipment?
                    </button>
                  </h2>
                  <div
                    id="collapse-gq-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-gq-3"
                    data-bs-parent="#accordion-gq"
                  >
                    <div className="accordion-body">
                      Yes, we bring all necessary cleaning products and equipment. If you prefer, we use your supplies, just let us know when booking.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-0">
                  <h2 className="accordion-header" id="heading-gq-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-gq-4"
                      aria-expanded="false"
                      aria-controls="collapse-gq-4"
                    >
                      Are your cleaners insured, and background checked?
                    </button>
                  </h2>
                  <div
                    id="collapse-gq-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-gq-4"
                    data-bs-parent="#accordion-gq"
                  >
                    <div className="accordion-body">
                      Absolutely. All our staff members are thoroughly interviewed, background checked and insured within the company.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion mb-4" id="accordion-rc">
                <h4 className="accordion-header mb-4">
                  Residential Cleaning
                </h4>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="rc-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-rc-1"
                      aria-expanded="false"
                      aria-controls="collapse-rc-1"
                    >
                      Do I need to be home during the cleaning?
                    </button>
                  </h2>
                  <div
                    id="collapse-rc-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="rc-1"
                    data-bs-parent="#accordion-rc"
                  >
                    <div className="accordion-body">
                      We appreciate your stay at home; it would allow you to inspect the place after the cleaning is done. Many of our clients provide access and go about their day. Your privacy and security are always respected.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-rc-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-rc-2"
                      aria-expanded="false"
                      aria-controls="collapse-rc-2"
                    >
                      How long does a typical home cleaning take?
                    </button>
                  </h2>
                  <div
                    id="collapse-rc-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-rc-2"
                    data-bs-parent="#accordion-rc"
                  >
                    <div className="accordion-body">
                      It depends on the size and condition of the home. A home with kids and pets will take more time to clean rather than a home with mature people living in it. Most standard cleanings take minimum of 4 hours.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion mb-4" id="accordion-cc">
                <h4 className="accordion-header mb-4">
                  Commercial Cleaning
                </h4>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="cc-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-cc-1"
                      aria-expanded="false"
                      aria-controls="collapse-cc-1"
                    >
                      Do you offer cleaning services outside of business hours?
                    </button>
                  </h2>
                  <div
                    id="collapse-cc-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="cc-1"
                    data-bs-parent="#accordion-cc"
                  >
                    <div className="accordion-body">
                      Yes, we offer flexible scheduling including evenings and weekends to minimize disruption to your operations.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-cc-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-cc-2"
                      aria-expanded="false"
                      aria-controls="collapse-cc-2"
                    >
                      Can I set up a recurring cleaning schedule for my office?
                    </button>
                  </h2>
                  <div
                    id="collapse-cc-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-cc-2"
                    data-bs-parent="#accordion-cc"
                  >
                    <div className="accordion-body">
                      Definitely. We offer daily, weekly, and custom cleaning schedules to suit your business needs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion mb-4" id="accordion-pcrc">
                <h4 className="accordion-header mb-4">
                  Post-Construction & Renovation Cleaning
                </h4>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="pcrc-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-pcrc-1"
                      aria-expanded="false"
                      aria-controls="collapse-pcrc-1"
                    >
                      What’s included in a post-construction clean?
                    </button>
                  </h2>
                  <div
                    id="collapse-pcrc-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="pcrc-1"
                    data-bs-parent="#accordion-pcrc"
                  >
                    <div className="accordion-body">
                      We remove dust, debris, and leftover materials, clean surfaces thoroughly, and ensure the space is move-in ready.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-pcrc-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-pcrc-2"
                      aria-expanded="false"
                      aria-controls="collapse-pcrc-2"
                    >
                      How soon can you clean after construction or renovation?
                    </button>
                  </h2>
                  <div
                    id="collapse-pcrc-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-pcrc-2"
                    data-bs-parent="#accordion-pcrc"
                  >
                    <div className="accordion-body">
                      We recommend scheduling once major construction is complete. We will confirm a date that ensures optimal results.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion mb-4" id="accordion-pp">
                <h4 className="accordion-header mb-4">
                  Pricing and Payments
                </h4>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="pp-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-pp-1"
                      aria-expanded="false"
                      aria-controls="collapse-pp-1"
                    >
                      How do you determine pricing?
                    </button>
                  </h2>
                  <div
                    id="collapse-pp-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="pp-1"
                    data-bs-parent="#accordion-pp"
                  >
                    <div className="accordion-body">
                      Prices are based on size, condition, and type of cleaning required. We offer free estimates after a quick consultation or walkthrough.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-pp-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-pp-2"
                      aria-expanded="false"
                      aria-controls="collapse-pp-2"
                    >
                      What payment methods do you accept?
                    </button>
                  </h2>
                  <div
                    id="collapse-pp-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-pp-2"
                    data-bs-parent="#accordion-pp"
                  >
                    <div className="accordion-body">
                      We accept credit cards, e-transfers, and direct bank deposits. Invoicing options are available for commercial and residential clients.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordion-policies">
                <h4 className="accordion-header mb-4">
                  Policies
                </h4>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="policies-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-policies-1"
                      aria-expanded="false"
                      aria-controls="collapse-policies-1"
                    >
                      What is your cancellation policy?
                    </button>
                  </h2>
                  <div
                    id="collapse-policies-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="policies-1"
                    data-bs-parent="#accordion-policies"
                  >
                    <div className="accordion-body">
                      We require at least 24 hours’ notice for cancellations or rescheduling. Late cancellations may be subject to a fee.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-policies-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-policies-2"
                      aria-expanded="false"
                      aria-controls="collapse-policies-2"
                    >
                      What if I'm not satisfied with the cleaning?
                    </button>
                  </h2>
                  <div
                    id="collapse-policies-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-policies-2"
                    data-bs-parent="#accordion-policies"
                  >
                    <div className="accordion-body">
                      Customer satisfaction is our top priority. We recommend an inspection by the client after the service is done, If you’re not happy, we’ll make it right at no additional cost.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-policies-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-policies-3"
                      aria-expanded="false"
                      aria-controls="collapse-policies-3"
                    >
                      Are your cleaning products safe for children and pets?
                    </button>
                  </h2>
                  <div
                    id="collapse-policies-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-policies-3"
                    data-bs-parent="#accordion-policies"
                  >
                    <div className="accordion-body">
                      Yes, we use eco-friendly and non-toxic cleaning products that are safe for your family and pets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
