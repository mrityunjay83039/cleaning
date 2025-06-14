import BreadCrumb from "../../common/BreadCrumb";
import { useParams } from "react-router-dom";
import JobList from "./JobList";
import { useGetAllPublicJobsQuery } from "../../redux/services/job";

const Jobs = () => {

  const { data: jobData } = useGetAllPublicJobsQuery();

  return (
    <>
      <BreadCrumb breadCrumTitle="Job" pageName="Jobs" />
      <section className="blog-sidebar-area pt-120 pb-90">
        <div className="container">
          <div className="tp-custom-container-box">
            <div className="row">
              <div className="col-lg-12">
                <div className="ablog__sidebar--wrapper mr-50">
                  <JobList noOfPost="1" jobData={jobData} />
                </div>
              </div>
              {/* 
              <div className="col-lg-3">
                <BlogSideBar />
              </div> 
              */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
