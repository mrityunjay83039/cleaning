import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../redux/services/blog";
import { useGetAllCategoriesQuery } from "../../redux/services/categories";
import BreadCrumb from "../../common/BreadCrumb";
import BlogSideBar from "./BlogSideBar";

const Blogs = () => {
  const { data: blogData} = useGetAllBlogsQuery();
  return (
    <>
    <BreadCrumb breadCrumTitle="Blog Posts" pageName="Blog" />
    <section className="blog-sidebar-area pt-120 pb-90">
      <div className="container">
        <div className="tp-custom-container-box">
          <div className="row">
            <div className="col-lg-9">
              <div className="ablog__sidebar--wrapper mr-50">
                {blogData &&
                  blogData?.blogs.length > 0 &&
                  blogData?.blogs.map((el) => {
                    return (
                      <div
                        className="ablog ablog-4 mb-55 wow fadeInUp"
                        data-wow-delay=".4s"
                        key={el._id}
                      >
                        <div className="ablog__img">
                          <img
                            src={el.imageUrl}
                            className="img-fluid"
                            alt={el.title}
                          />
                        </div>
                        <div className="ablog__text ablog__text4">
                          {/* <div className="ablog__meta ablog__meta4">
                            <ul>
                              <li>
                                <a href="blog-details-2.html">
                                  {" "}
                                  January 15, 2021{" "}
                                </a>
                              </li>
                              <li>
                                <a href="blog-details.html">
                                  <i className="far fa-user"></i> Klenar{" "}
                                </a>
                              </li>
                              <li>
                                <a href="blog-details.html">
                                  <i className="fal fa-comments"></i> No
                                  Comments
                                </a>
                              </li>
                            </ul>
                          </div> */}
                          <h3 className="ablog__text--title4 mb-20">
                            <Link to={`./${el.slug}`}>
                              {el.title}
                            </Link>
                          </h3>
                          <div
                            dangerouslySetInnerHTML={{ __html: el.blogDetail.slice(0, 200) + "..." }}
                          />

                          <div className="ablog__btn4">
                            <Link
                              to={`./${el.slug}`}
                              className="theme-btn"
                            >
                              <i className="flaticon-enter"></i> Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-3">
              <BlogSideBar/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="basic-pagination mt-10 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <ul>
                  <li>
                    <span aria-current="page" className="page-numbers current">
                      1
                    </span>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      3
                    </a>
                  </li>
                  <li>
                    <a className="next page-numbers" href="#">
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Blogs;
