import React from "react";
import { useParams } from "react-router-dom";
import { useGetBlogBySlugQuery } from "../../redux/services/blog";
import BreadCrumb from "../../common/BreadCrumb";
import { isEmptyObject } from "../../utils/commonFunction";
import BlogSideBar from "./BlogSideBar";

const BlogDetails = () => {
  const { slug } = useParams();
  const { data: blogDetail } = useGetBlogBySlugQuery(slug);
  console.log("blogDetail: ", blogDetail?.blog);
  return (
    <>
      <BreadCrumb breadCrumTitle="Blog Posts" pageName="Blog" />
      <section className="pt-120 pb-90">
        <div className="container">
          <div className="tp-custom-container-box">
            <div className="row">
              <div className="col-lg-9">
                {blogDetail?.blog && (
                  <>
                    <div className="blog__details--wrapper">
                      <div className="ablog ablog-4 mb-55">
                        <div className="ablog__img wow fadeInUp">
                          <img
                            src={blogDetail.blog.imageUrl}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                        <div className="ablog__text p-4">
                          <div className="ablognew__meta">
                            <ul>
                              {/* <li>
                                <a href="blog-details.html">
                                  <i className="far fa-calendar-check"></i>{" "}
                                  January 15, 2021{" "}
                                </a>
                              </li> */}
                              <li>
                                  <i className="far fa-user"></i> {blogDetail?.blog?.authorName}
                              </li>
                              <li>
                                <a href={`/blogs/category/${blogDetail?.blog?.categoryId?.slug}`}>
                                  {blogDetail?.blog?.categoryTitle}
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <h3 className="ablog__text--title4 mb-20">
                            {blogDetail?.blog?.title}
                          </h3> */}
                          <div className="service_title">
                            <h3 className="mb-20">
                                {blogDetail?.blog?.title}
                            </h3>
                          </div>
                          <div className="tp-service-three-text">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: blogDetail?.blog?.blogDetail,
                              }}
                            />
                          </div>
                          {/* <div className="blog__deatails--tag wow fadeInUp">
                            <span>Post Tags : </span>
                            <a href="#">Landing</a>
                            <a href="#">Pix Saas Blog</a>
                            <a href="#">The Saas</a>
                          </div> */}
                        </div>
                      </div>

                      {/* <div className="blog__author mb-95 d-sm-flex wow fadeInUp">
                        <div className="blog__author-img mr-30">
                          <img
                            src="assets/img/blog/b10.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                        <div className="blog__author-content">
                          <h5>Sophie Ianiro</h5>
                          <span>Author</span>
                          <p>
                            I said cracking goal down the pub blag cheeky bugger
                            at public school A bit of how's your father boot.!
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </>
                )}
              </div>
              <div className="col-lg-3">
                <BlogSideBar/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
