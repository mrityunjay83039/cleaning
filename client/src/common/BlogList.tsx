import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const BlogList = ({ noOfPost, blogData }) => {

  const [currentPage, setCurrentPage] = useState(1);

  if (!blogData || !blogData.blogs.length) return <p className="no-blog-message">No blog found.</p>;

  const postsPerPage =
    noOfPost === "All" ? blogData.blogs.length : parseInt(noOfPost);

  const totalPages = Math.ceil(blogData.blogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.blogs.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {currentPosts.map((el) => (
          <div className="row g-0 align-items-stretch mb-4">
            <div className="col-md-4">
              <div className="ablog__img">
                <img 
                  src={el.imageUrl} 
                  alt={el.title}                     
                  className="img-fluid h-100 object-fit-cover"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="ablog__text">
                <div className="service_title">
                  <h4 className="tp-service-three-title heading-color-black-with-hover mb-4">
                    <Link to={`/blogs/${el.slug}`}>{el.title}</Link>
                  </h4>
                </div>
                <div className="tp-service-three-text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: el.blogDetail.slice(0, 200) + "...",
                    }}
                  />
                </div>
                <div className="ablog__btn4">
                  <Link to={`/blogs/${el.slug}`} className="theme-btn">
                    <i className="flaticon-enter"></i> Read More
                  </Link>
                </div>
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

export default BlogList;
