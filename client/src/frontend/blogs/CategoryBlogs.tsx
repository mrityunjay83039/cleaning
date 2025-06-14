import BreadCrumb from "../../common/BreadCrumb";
import BlogSideBar from "./BlogSideBar";
import BlogList from "../../common/BlogList";
import { useParams } from "react-router-dom";
import {
  useGetAllBlogsQuery,
  useGetBlogByCategorySlugQuery,
} from "../../redux/services/blog";

const CategoryBlog = () => {
  const { categoryslug } = useParams();
  console.log("categoryslug: ", categoryslug);
  const { data: blogData } = useGetBlogByCategorySlugQuery( categoryslug );
  
  return (
    <>
      <BreadCrumb breadCrumTitle="Blog Posts" pageName="Blog" />
      <section className="blog-sidebar-area pt-120 pb-90">
        <div className="container">
          <div className="tp-custom-container-box">
            <div className="row">
              <div className="col-lg-9">
                <div className="ablog__sidebar--wrapper mr-50">
                  <BlogList noOfPost="1" blogData={blogData} />
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

export default CategoryBlog;
