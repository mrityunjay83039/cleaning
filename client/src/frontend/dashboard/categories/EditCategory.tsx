import { Button, Card, CardContent, CircularProgress, Input } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateCategoryMutation, useGetCategoryByIdQuery } from "../../../redux/services/categories";

const EditCategory = () => {
  const { id } = useParams();
  const { data, error, isLoading, refetch } = useGetCategoryByIdQuery(id);
  console.log("Category data:", data);
  const navigate = useNavigate();
  const [imagePath, setImagePath] = useState("");
  const [updateCategory] = useUpdateCategoryMutation();
  const [imageLoading, setImageLoading] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const methods = useForm({
    defaultValues: {
      title: "",
      imageUrl: ""
    }
  });

  const {
    reset,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    register,
  } = methods;

  useEffect(() => {
    if (data?.category) {
      reset({
        title: data.category.title || "",
        imageUrl: data.category.imageUrl || "",
      });
      setImagePath(data.category.imageUrl || "");
    }
  }, [data, reset]);
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching category</p>;

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageLoading(true); // Start Loader

    const cloudName = import.meta.env.VITE_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const fileObj = await res.json();
      console.log("Uploaded Image URL:", fileObj.secure_url);

      setImagePath(fileObj.secure_url);
      setValue("imageUrl", fileObj.secure_url);
    } catch (error) {
      console.error("Image upload failed", error);
      toast.error("Image upload failed");
    } finally {
      setImageLoading(false); // Stop Loader
    }
  };

  const onSubmitHandler = async (value) => {
    setFormSubmitting(true); 

    const updatedData = { 
      ...value, 
      imageUrl: imagePath || getValues("imageUrl"),
    };

    console.log("Submitting Updated Data:", updatedData); 

    try {
      await updateCategory({ id, updatedData });
      await refetch();
      toast.success("Category updated successfully", { position: "top-center" });
      navigate(`/dashboard/edit-category/${id}`);
    } catch (error) {
      console.error("Update error: ", error);
      toast.error("Failed to update category");
    } finally {
      setFormSubmitting(false); // Stop Loader
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl mb-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Edit Category</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="">
            <div className="row custom-mar-20">
              <div className="col-md-12 custom-pad-20">
                <div className="tp-contact-form-field mb-4">
                  <input
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Category Title"
                  />
                  {errors?.title && <div className="text-danger">Title is required</div>}
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
                </div>
              </div>
              <div className="col-md-12 custom-pad-20">
                <div className="tp-contact-form-field mb-4">
                <input type="file" onChange={handleImageChange} disabled={imageLoading} />
                {imageLoading && <CircularProgress size={20} style={{ marginLeft: "10px" }} />}
                </div>
              </div>
              <div className="col-md-12 custom-pad-20">
                <div className="tp-contact-form-field">
                  <Button type="submit" variant="contained" disabled={formSubmitting}>
                    {formSubmitting ? <CircularProgress size={24} /> : "Update"}
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

export default EditCategory;
