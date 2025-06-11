import React from "react";
import { useGetAllCategoriesQuery } from "../../redux/services/categories";
import { Link } from "react-router-dom";

const BlogSideBar = () => {
  const { data: categoriesData } = useGetAllCategoriesQuery();
  return (
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
                    <Link to={`/blogs/category/${el.slug}`}>{el.title}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
