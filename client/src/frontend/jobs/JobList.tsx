import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const JobList = ({ noOfPost, jobData }) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  if (!jobData || !jobData?.jobs?.length) return <p className="no-blog-message">No Job found.</p>;

  const postsPerPage =
    noOfPost === "All" ? jobData?.jobs?.length : parseInt(noOfPost);

  const totalPages = Math.ceil(jobData?.jobs?.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobData?.jobs.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((el) => (
          <div className="ablog ablog-4 wow fadeInUp" data-wow-delay=".4s" key={el._id}>
            <div className="row g-0 align-items-stretch mb-4">
              {el.imageUrl && (
                <div className="col-md-3">
                  <img
                    src={el.imageUrl}
                    alt={el.title}
                    className="img-fluid h-100 object-fit-cover"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
              )}
              <div className={el.imageUrl ? "col-md-9 p-3" : "col-12"}>
                <div className="service_title">
                  <h4 className="tp-service-three-title heading-color-black-with-hover mb-3">
                    <Link to={`/jobs/${el.slug}`}>{el.title}</Link>
                  </h4>
                </div>
                <div className="tp-service-three-text mb-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        el.jobDetail
                          .replace(/<[^>]+>/g, "") // strip HTML tags
                          .slice(0, 200) + "...",
                    }}
                  />
                </div>
                <div className="ablog__btn4 text-end">
                  <Link
                    to={`/jobs/${el.slug}`}
                    className="theme-btn"
                    aria-label={`Read more about ${el.title}`}
                  >
                    <i className="flaticon-enter"></i> Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {noOfPost !== "All" && totalPages > 1 && (
        <div className="row">
          <div className="col-12">
            <div
              className="basic-pagination mt-10 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <ul>
                {/* Previous Button */}
                {currentPage > 1 && (
                  <li>
                    <a
                      className="prev page-numbers"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        goToPage(currentPage - 1);
                      }}
                    >
                      <i className="fal fa-long-arrow-left"></i>
                    </a>
                  </li>
                )}
                
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
