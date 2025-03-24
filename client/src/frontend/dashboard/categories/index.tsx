import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem } from "@mui/material";
import { useGetAllCategoriesMutation } from "../../../redux/services/categories";

const Categories: React.FC = () => {
  const [allCategories, setAllCategories] = useState([]);

  const [categories] = useGetAllCategoriesMutation();

  const getAllCategories = async () => {
    try {
      const response = await categories({});
      console.log("categories: ", response?.data?.categoryList);
      if (response) {
        setAllCategories(response?.data?.categoryList);
      }
    } catch (error) {
      console.log("Get categories error: ", error);
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
      <MenuItem key="edit" onClick={() => console.info('Edit')}>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => console.info('Delete')}>
        Delete
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default Categories;
