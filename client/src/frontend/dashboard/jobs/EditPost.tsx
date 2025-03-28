import {   
  Button,
  Card,
  CardContent,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { useGetBlogByIdQuery, useUpdatePostMutation } from "../../../redux/services/blog";
import { useGetAllCategoriesQuery } from "../../../redux/services/categories";

interface PostFormData {
  title: string;
  imageUrl: string;
  categoryTitle: string;
  categoryId: string;
  blogDetail: string;
  authorName: string;
}

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetBlogByIdQuery(id);
  console.log("data: ", data);
  
  const { data: categories, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery();
  const categoryList = categories?.categoryList || [];

  const [updatePost] = useUpdatePostMutation();
  const [imagePath, setImagePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const methods = useForm<PostFormData>({
    defaultValues: {
      title: "",
      imageUrl: "",
      categoryTitle: "",
      categoryId: "",
      blogDetail: "",
      authorName: "",
    },
  });

  const { reset, handleSubmit, setValue, getValues, formState: { errors }, register, control } = methods;

  useEffect(() => {
    if (data?.blog) {
      reset({
        title: data.blog.title || "", 
        imageUrl: data.blog.imageUrl || "",
        categoryTitle: data.blog.categoryTitle || "",
        categoryId: data.blog.categoryId || "", 
        blogDetail: data.blog.blogDetail || "",
        authorName: data.blog.authorName || "",
      });
      setImagePath(data.blog.imageUrl || "");
    }
  }, [data, reset, setValue]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post</p>;

  const handleEditorChange = (newContent) => {
    setValue("blogDetail", newContent);
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const cloudName = import.meta.env.VITE_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("cloud_name", cloudName);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const fileObj = await res.json();
      if (fileObj && fileObj.secure_url) {
        setImagePath(fileObj.secure_url);
        setValue("imageUrl", fileObj.secure_url);
      } else {
        throw new Error("Upload response invalid");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmitHandler = async (value) => {
    setFormSubmitting(true);
    const updatedData = { ...value, imageUrl: imagePath || getValues("imageUrl") };
    try {
      await updatePost({ id, updatedData });
      await refetch();
      toast.success("Post updated successfully");
      navigate(`/dashboard/blogs`);
    } catch (error) {
      console.error("Update error: ", error);
      toast.error("Failed to update post");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Edit Blog Post</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {/* Blog Title */}
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <TextField {...field} label="Blog Title" fullWidth margin="normal" error={!!errors.title} helperText={errors.title?.message} />
              )}
            />

            {/* Image Upload */}
            <div>
              <input type="file" onChange={handleImageChange} className="w-full p-2 border" />
            </div>
            {isUploading ? <CircularProgress size={24} className="mt-4" /> : imagePath && <img src={imagePath} alt="Uploaded" className="w-full mt-2" />}

            {/* Category Selection */}
            <Controller
              name="categoryId"
              control={control}
              defaultValue=""
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                  displayEmpty
                  value={field.value || ""} // Ensure it's controlled
                  onChange={(event) => {
                    const selectedCategory = categoryList.find(cat => cat._id === event.target.value);
                    setValue("categoryTitle", selectedCategory?.title || ""); 
                    setValue("categoryId", event.target.value); // Set correct categoryId
                  }}
                  className="mt-4 mb-4"
                >
                  <MenuItem value="" disabled>Select a Category</MenuItem>
                  {isCategoriesLoading ? (
                    <MenuItem disabled>Loading...</MenuItem>
                  ) : categoryList.length > 0 ? (
                    categoryList.map((category) => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No categories available</MenuItem>
                  )}
                </Select>
              )}
            />
            {errors.categoryTitle && <div className="text-red-500">{errors.categoryTitle.message}</div>}

            {/* Blog Content Editor */}
            <Editor
              apiKey="6rq58torrow1webfnxy8wn0e6zqtzjoemmprd735oh84809n"
              initialValue={getValues("blogDetail")}
              init={{
                height: 400,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={handleEditorChange}
            />

            {/* Submit Button */}
            <Button type="submit" variant="contained" disabled={formSubmitting} className="w-full">
              {formSubmitting ? <CircularProgress size={24} /> : "Update Post"}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default EditPost;
