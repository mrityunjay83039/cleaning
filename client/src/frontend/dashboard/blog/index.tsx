import React, { useEffect, useMemo, useState } from "react";
import { useGetAllBlogsMutation } from "../../../redux/services/blog";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem } from "@mui/material";

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const [allBlogs] = useGetAllBlogsMutation();

  const getAllBlogPost = async () => {
    try {
      const response = await allBlogs({});
      console.log("allposts: ", response?.data?.blogs);
      if (response) {
        setBlogPosts(response?.data?.blogs);
      }
    } catch (error) {
      console.log("get blog post: ", error);
    }
  };

  useEffect(() => {
    getAllBlogPost();
  }, []);


  const columns = useMemo(
    () => [
      {
        accessorKey: 'title', //access nested data with dot notation
        header: 'Title',
        size: 150,
      },
      {
        accessorKey: 'categoryTitle',
        header: 'Category',
        size: 150,
      },
     
    ],
    [],
  );
  // const data = [
  //   {
  //     name: {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //     },
  //     address: '261 Erdman Ford',
  //     city: 'East Daphne',
  //     state: 'Kentucky',
  //   },
  //   {
  //     name: {
  //       firstName: 'Jane',
  //       lastName: 'Doe',
  //     },
  //     address: '769 Dominic Grove',
  //     city: 'Columbus',
  //     state: 'Ohio',
  //   },
  //   {
  //     name: {
  //       firstName: 'Joe',
  //       lastName: 'Doe',
  //     },
  //     address: '566 Brakus Inlet',
  //     city: 'South Linda',
  //     state: 'West Virginia',
  //   },
  //   {
  //     name: {
  //       firstName: 'Kevin',
  //       lastName: 'Vandy',
  //     },
  //     address: '722 Emie Stream',
  //     city: 'Lincoln',
  //     state: 'Nebraska',
  //   },
  //   {
  //     name: {
  //       firstName: 'Joshua',
  //       lastName: 'Rolluffs',
  //     },
  //     address: '32188 Larkin Turnpike',
  //     city: 'Omaha',
  //     state: 'Nebraska',
  //   },
  // ];
  
  const table = useMaterialReactTable({
    columns,
    data:blogPosts, 
    enableRowActions:true,
    positionActionsColumn: 'last',
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="edit" onClick={() => console.info('Edit')}>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => console.info('Delete')}>
        Delete
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
  // return <div>Blog</div>; 
};

export default Blog;
