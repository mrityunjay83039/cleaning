import { Button, Card, CardContent, Input } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAddCategoryMutation } from "../../../redux/services/categories";

const AddCategory = () => {
  const [imagePath, setImagePath] = useState("");
  const [addCategory] = useAddCategoryMutation();

  const defaultValue = {
    title: "",
    imageUrl: ""
  };

  const methods = useForm({
    defaultValues: defaultValue
  });

  const {
    reset,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    register,
  } = methods;

  const onSubmitHandler = async (value: any) => {
    try {
      const res = await addCategory(value);
      console.log("Add Category Response:", res);
      if (res && res.data) {
        toast.success("Category added successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Add new category error:", error); 
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const cloudName = import.meta.env.VITE_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const fileObj = await res.json();
    console.log("image: ", fileObj?.url);
    setImagePath(fileObj.url);
    setValue("imageUrl", fileObj.url);
  };

  console.log("imageUrl: ", getValues("imageUrl"));

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl mb-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Add New Category</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="">
              <div className="row custom-mar-20">
                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-20">
                    <input
                      type="text"
                      {...register("title", { required: true })}
                      placeholder="* Category Title"
                    />
                    {errors?.title && (
                      <div className="text-danger">Title is required</div>
                    )}
                  </div>
                </div>
                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-4">
                    <label htmlFor="category-image" className="custom-file-upload">
                      {imagePath ? (
                        <img src={imagePath} alt="Selected Image" style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
                      ) : (
                        <span>Select Category Image</span>
                      )}
                    </label>
                    <input
                      type="file"
                      id="category-image"
                      onChange={(e) => handleImageChange(e)}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>

                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field">
                    <Button
                      className="theme-btn"
                      type="submit"
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default AddCategory;
