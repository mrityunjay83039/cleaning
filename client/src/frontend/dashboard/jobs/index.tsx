import React, { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {useDeletePostMutation, useGetAllBlogsQuery } from "../../../redux/services/blog";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem } from "@mui/material";

const Blog: React.FC = () => {
  const navigate = useNavigate();

  const { data: blogData, isLoading, isError, refetch } = useGetAllBlogsQuery();

  const [deleteBlog] = useDeletePostMutation();

  const handleDeleteClick = useCallback(async (id: string) => {
    try {
      const res = await deleteBlog(id);
      await refetch();
    } catch (error) {
      console.error("Delete blog error:", error);
    }
  }, [deleteBlog]);

  const handleDeleteConfirmation = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      handleDeleteClick(id);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
        size: 150,
      },
      {
        accessorKey: "categoryTitle",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "imageUrl",
        header: "Image",
        size: 150,
        Cell: ({ cell }) => {
          const imageUrl = cell.getValue();
          return imageUrl ? (
            <img
              src={imageUrl}
              alt="Category"
              style={{ width: 100, height: 100, objectFit: "cover", borderRadius: "5px" }}
            />
          ) : (
            <span style={{ color: "gray", fontStyle: "italic" }}>No Image Available</span>
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: blogData?.blogs || [],
    enableRowActions: true,
    positionActionsColumn: "last",
    renderTopToolbarCustomActions: () => (
      <button
        onClick={() => navigate("/dashboard/blog/add")}
        className="add-new-button"
      >
        + Add New Post
      </button>
    ),
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="edit" onClick={() => navigate(`/dashboard/edit-blog/${row.original._id}`)}>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => handleDeleteConfirmation(row.original._id)}>
        Delete
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default Blog;
