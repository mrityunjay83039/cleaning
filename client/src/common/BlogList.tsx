import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../redux/services/blog";

const BlogList = ({noOfPost}) => {
  const { data: blogData } = useGetAllBlogsQuery();
  return (
    <>
      {blogData &&
        blogData?.blogs.length > 0 &&
        (noOfPost != 'All' ? blogData.blogs.slice(0, noOfPost) : blogData.blogs).map((el) => {
          return (
            <div
              className="ablog ablog-4 mb-55 wow fadeInUp"
              data-wow-delay=".4s"
              key={el._id}
              style={{flex: 1}}
            >
              <div className="ablog__img">
                <img src={el.imageUrl} className="img-fluid" alt={el.title} />
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
                  <Link to={`./${el.slug}`}>{el.title}</Link>
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: el.blogDetail.slice(0, 200) + "...",
                  }}
                />

                <div className="ablog__btn4">
                  <Link to={`/blogs/${el.slug}`} className="theme-btn">
                    <i className="flaticon-enter"></i> Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BlogList;
