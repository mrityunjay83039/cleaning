import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem } from "@mui/material";
import { 
  useGetAllCategoriesMutation, 
  useDeleteCategoryMutation 
} from "../../../redux/services/categories";

const Categories: React.FC = () => {

  const navigate = useNavigate();

  const [allCategories, setAllCategories] = useState([]);

  const [categories] = useGetAllCategoriesMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [selectedCategory, setSelectedCategory] = useState({ id: "", title: "" });

  const getAllCategories = async () => {
    try {
      const response = await categories({});
      console.log("categories: ", response?.data?.categoryList);
      if (response?.data?.categoryList) {
        setAllCategories(response?.data?.categoryList);
      }
    } catch (error) {
      console.log("Get categories error: ", error);
    }
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteCategory(id).unwrap(); 
      getAllCategories();
    } catch (error) {
      console.error("Delete category error: ", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'title', 
        header: 'Category',
        size: 150,
      }
    ],
    [],
  );
  
  const table = useMaterialReactTable({
    columns,
    data:allCategories, 
    enableRowActions:true,
    positionActionsColumn: 'last',
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="edit" onClick={() => navigate(`/dashboard/edit-category/${row.original._id}`)}>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => handleDeleteClick(row.original._id)}>
        Delete
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default Categories;
