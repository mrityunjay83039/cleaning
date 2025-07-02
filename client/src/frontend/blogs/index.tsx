import BreadCrumb from "../../common/BreadCrumb";
import BlogSideBar from "./BlogSideBar";
import BlogList from "../../common/BlogList";
import {
  useGetAllBlogsQuery,
} from "../../redux/services/blog";

const Blogs = () => {

  const { data: blogData } = useGetAllBlogsQuery();

  return (
    <>
      <BreadCrumb breadCrumTitle="Blog Posts" pageName="Blog" />
      <section className="blog-sidebar-area pt-120 pb-90">
        <div className="container">
          <div className="tp-custom-container-box">
            <div className="row">
              <div className="col-lg-9">
                <div className="ablog__sidebar--wrapper">
                  <BlogList noOfPost="10" blogData={blogData} />
                </div>
              </div>
              <div className="col-lg-3">
                <BlogSideBar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
