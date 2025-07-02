import React from "react";
import { useGetAllCategoriesQuery } from "../../redux/services/categories";
import { Link } from "react-router-dom";

const BlogSideBar = () => {
  const { data: categoriesData } = useGetAllCategoriesQuery();
  return (
    <div className="ablog__sidebar">
      <h3 className="sidebar__widget--title mb-25">Categories</h3>
      <div className="sidebar--widget__cat">
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
  );
};

export default BlogSideBar;
