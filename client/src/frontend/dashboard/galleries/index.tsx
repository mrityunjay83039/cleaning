import React, { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem } from "@mui/material";
import { useDeleteGalleryMutation, useGetAllGalleriesQuery } from "../../../redux/services/gallery";

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const { data: GalleryData, isLoading, isError, refetch } = useGetAllGalleriesQuery();

  console.log("galleryData: ", GalleryData);
  
  const [deleteGallery] = useDeleteGalleryMutation();

  const handleDeleteClick = useCallback(async (id: string) => {
    try {
      const res = await deleteGallery(id);
      await refetch();
    } catch (error) {
      console.error("Delete blog error:", error);
    }
  }, [deleteGallery]);

  const handleDeleteConfirmation = (id: string) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
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
        accessorKey: "imageUrl",
        header: "Image",
        size: 150,
        Cell: ({ cell }) => {
          const imageUrl = cell.getValue();
          return imageUrl ? (
            <img
              src={imageUrl}
              alt="Job"
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
    data: GalleryData?.galleries || [],
    enableRowActions: true,
    positionActionsColumn: "last",
    renderTopToolbarCustomActions: () => (
      <button
        onClick={() => navigate("/dashboard/gallery/add")}
        className="add-new-button"
      >
        + Add New Gallery
      </button>
    ),
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="edit" onClick={() => navigate(`/dashboard/edit-gallery/${row.original._id}`)}>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => handleDeleteConfirmation(row.original._id)}>
        Delete
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default Gallery;
