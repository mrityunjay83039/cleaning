import React, { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem } from "@mui/material";
import { useDeleteJobMutation, useGetAllJobsQuery } from "../../../redux/services/job";

const Job: React.FC = () => {
  const navigate = useNavigate();

  const { data: JobData, isLoading, isError, refetch } = useGetAllJobsQuery();

  console.log("JobData: ", JobData);
  
  const [deleteJob] = useDeleteJobMutation();

  const handleDeleteClick = useCallback(async (id: string) => {
    try {
      const res = await deleteJob(id);
      await refetch();
    } catch (error) {
      console.error("Delete blog error:", error);
    }
  }, [deleteJob]);

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
    data: JobData?.jobs || [],
    enableRowActions: true,
    positionActionsColumn: "last",
    renderTopToolbarCustomActions: () => (
      <button
        onClick={() => navigate("/dashboard/job/add")}
        className="add-new-button"
      >
        + Add New Job
      </button>
    ),
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="edit" onClick={() => navigate(`/dashboard/edit-job/${row.original._id}`)}>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => handleDeleteConfirmation(row.original._id)}>
        Delete
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default Job;
