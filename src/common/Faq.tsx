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
                  Frequently Asked Questions
                </h5>
                <h2 className="tp-section-title heading-color-black text-center">
                  Every Cleaning Related <br />
                  Answer is Here
                </h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How many years have you been in business?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Enim quisque primis praesent cursus convallis pulvinar
                      phasellus adipiscing nullam ullamcorper pretium accumsan.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you bring equipment and cleaning supplies?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Enim quisque primis praesent cursus convallis pulvinar
                      phasellus adipiscing nullam ullamcorper pretium accumsan.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How many years have you been in business?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Enim quisque primis praesent cursus convallis pulvinar
                      phasellus adipiscing nullam ullamcorper pretium accumsan.
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
