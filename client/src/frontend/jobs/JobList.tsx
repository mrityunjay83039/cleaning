import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const JobList = ({ noOfPost, jobData }) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  if (!jobData || !jobData?.jobs?.length) return <p className="no-blog-message">No blog found.</p>;

  const postsPerPage =
    noOfPost === "All" ? jobData?.jobs?.length : parseInt(noOfPost);

  const totalPages = Math.ceil(jobData?.jobs?.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobData?.jobs.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {currentPosts.map((el) => (
        <div
          className="ablog ablog-4 mb-55 wow fadeInUp"
          data-wow-delay=".4s"
          key={el._id}
          style={{ flex: 1 }}
        >
          <div className="ablog__img">
            <img src={el.imageUrl} className="img-fluid" alt={el.title} />
          </div>
          <div className="ablog__text ablog__text4">
            <div className="service_title">
              <h4 className="tp-service-three-title heading-color-black-with-hover mb-20">
                <Link to={`/jobs/${el.slug}`}>{el.title}</Link>
              </h4>
            </div>
            <div className="tp-service-three-text">
              <div
                dangerouslySetInnerHTML={{
                  __html: el.jobDetail.slice(0, 200) + "...",
                }}
              />
            </div>
            <div className="ablog__btn4">
              <Link to={`/jobs/${el.slug}`} className="theme-btn">
                <i className="flaticon-enter"></i> Read More
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      {noOfPost !== "All" && totalPages > 1 && (
        <div className="row">
          <div className="col-12">
            <div
              className="basic-pagination mt-10 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <ul>
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li key={page}>
                      {page === currentPage ? (
                        <span
                          aria-current="page"
                          className="page-numbers current"
                        >
                          {page}
                        </span>
                      ) : (
                        <a
                          className="page-numbers"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            goToPage(page);
                          }}
                        >
                          {page}
                        </a>
                      )}
                    </li>
                  )
                )}

                {/* Next Button */}
                {currentPage < totalPages && (
                  <li>
                    <a
                      className="next page-numbers"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        goToPage(currentPage + 1);
                      }}
                    >
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobList;
