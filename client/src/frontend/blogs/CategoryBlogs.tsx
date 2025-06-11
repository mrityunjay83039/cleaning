import BreadCrumb from "../../common/BreadCrumb";
import BlogSideBar from "./BlogSideBar";
import BlogList from "../../common/BlogList";
import { useParams } from "react-router-dom";
import { useGetBlogByCategorySlugQuery } from "../../redux/services/blog";

const CategoryBlogs = () => {
    const { categoryslug } = useParams();
    const { data: blogData } = useGetBlogByCategorySlugQuery(categoryslug);
    
  return (
    <>
    <BreadCrumb breadCrumTitle="Blog Posts" pageName="Blog" />
    <section className="blog-sidebar-area pt-120 pb-90">
      <div className="container">
        <div className="tp-custom-container-box">
          <div className="row">
            <div className="col-lg-9">
              <div className="ablog__sidebar--wrapper mr-50">
                <BlogList noOfPost="All"/>
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

export default CategoryBlogs;
