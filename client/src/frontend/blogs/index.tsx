import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../redux/services/blog";
import { baseConfig } from "../../config/base-config";
import { useGetAllCategoriesQuery } from "../../redux/services/categories";
import BreadCrumb from "../../common/BreadCrumb";

const Blogs = () => {
  const { data: blogData} = useGetAllBlogsQuery();
  const {data: categoriesData } = useGetAllCategoriesQuery();
  console.log("blog: ", blogData);
  console.log("categories: ", categoriesData);
  return (
    <>
    <BreadCrumb breadCrumTitle="Blog Posts" pageName="Blog" />
    <section className="blog-sidebar-area pt-120 pb-90">
      <div className="container">
        <div className="tp-custom-container-box">
          <div className="row">
            <div className="col-lg-8">
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
                            <Link to={`${baseConfig.baseUrl}/blogs/${el.slug}`}>
                              {el.title}
                            </Link>
                          </h3>
                          <div
                            dangerouslySetInnerHTML={{ __html: el.blogDetail }}
                          />

                          <div className="ablog__btn4">
                            <Link
                              to={`${baseConfig.baseUrl}/blogs/${el.slug}`}
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
            <div className="col-lg-4">
              <div className="ablog__sidebar">
                <div className="widget wow fadeInUp" data-wow-delay=".3s">
                  {/* <div className="sidebar--widget__search mb-45">
                    <form action="#">
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="far fa-search"></i>
                      </button>
                    </form>
                  </div>  */}
                </div>
                <div className="widget mb-45 wow fadeInUp" data-wow-delay=".5s">
                  {/* <h3 className="sidebar__widget--title mb-30">Recent News </h3>
                  <div className="sidebar--widget__post mb-20">
                    <div className="sidebar__post--thumb">
                      <a href="blog-details.html">
                        <div
                          className="post__img"
                          data-background="assets/img/blog/b1.jpg"
                        ></div>
                      </a>
                    </div>
                    <div className="sidebar__post--text">
                      <h4 className="sidebar__post--title">
                        <a href="blog-details.html">
                          Businesses Are Thriving <br />
                          Societies Are Not.
                        </a>
                      </h4>
                      <span>January 15, 2021</span>
                    </div>
                  </div> */}
                  {/* <div className="sidebar--widget__post mb-20">
                    <div className="sidebar__post--thumb">
                      <a href="blog-details.html">
                        <div
                          className="post__img"
                          data-background="assets/img/blog/b2.jpg"
                        ></div>
                      </a>
                    </div>
                    <div className="sidebar__post--text">
                      <h4 className="sidebar__post--title">
                        <a href="blog-details.html">
                          The Importance of Instagram <br />
                          Metrics and
                        </a>
                      </h4>
                      <span>January 15, 2021</span>
                    </div>
                  </div>
                  <div className="sidebar--widget__post mb-20">
                    <div className="sidebar__post--thumb">
                      <a href="blog-details.html">
                        <div
                          className="post__img"
                          data-background="assets/img/blog/b7.jpg"
                        ></div>
                      </a>
                    </div>
                    <div className="sidebar__post--text">
                      <h4 className="sidebar__post--title">
                        <a href="blog-details.html">
                          TikTok Influencer Marketing <br />
                          How to Work
                        </a>
                      </h4>
                      <span>January 15, 2021</span>
                    </div>
                  </div> */}
                </div>

                <div className="widget mb-40 wow fadeInUp" data-wow-delay=".7s">
                  <h3 className="sidebar__widget--title mb-25">Categories</h3>
                  <div className="sidebar--widget__cat mb-20">
                    <ul>
                      {categoriesData &&
                        categoriesData?.categoryList?.length > 0 &&
                        categoriesData?.categoryList?.map((el) => {
                          return (
                            <li key={el._id}>
                              <Link to="blog-details.html">{el.title}</Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                {/* <div className="widget mb-25 wow fadeInUp" data-wow-delay=".9s">
                  <h3 className="sidebar__widget--title mb-30">Tags</h3>
                  <div className="sidebar--widget__tag mb-20">
                    <a href="blog-details.html">Animation</a>
                    <a href="blog-details.html">Branding</a>
                    <a href="blog-details.html">Design</a>
                    <a href="blog-details.html">Ideas</a>
                    <a href="blog-details.html">Landing</a>
                    <a href="blog-details.html">Pix Saas Blog</a>
                    <a href="blog-details.html">The Saas</a>
                    <a href="blog-details.html">UI/UX</a>
                  </div>
                </div> */}
              </div>
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
