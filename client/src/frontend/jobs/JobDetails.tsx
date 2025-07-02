import { useParams } from "react-router-dom";
import BreadCrumb from "../../common/BreadCrumb";
import { useGetJobBySlugQuery } from "../../redux/services/job";

const JobDetails = () => {
  
  const { slug } = useParams();
  const { data: jobDetail } = useGetJobBySlugQuery(slug)
  
  return (
    <>
      <BreadCrumb breadCrumTitle="Blog Posts" pageName="Blog" />
      <section className="blog-sidebar-area pt-120 pb-90">
        <div className="container">
          <div className="tp-custom-container-box">
            <div className="row">
              <div className="col-lg-12">
                {jobDetail?.job && (
                  <>
                    <div className="blog__details--wrapper">
                      <div className="ablog ablog-4">
                        {jobDetail?.job?.imageUrl && (
                          <div className="ablog__img wow fadeInUp">
                            <img
                              src={jobDetail.job?.imageUrl}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        )}
                        <div className="ablog__text px-4">
                          <div className="service_title">
                            <h3 className="mb-20">
                              {jobDetail?.job?.title}
                            </h3>
                          </div>
                          <div className="tp-service-three-text">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: jobDetail?.job?.jobDetail,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
