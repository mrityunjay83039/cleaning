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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { useAddPostMutation } from "../../../redux/services/blog";
import { useGetAllCategoriesQuery } from "../../../redux/services/categories";

interface PostFormData {
  title: string;
  imageUrl: string;
  categoryTitle: string;
  categoryId: string;
  blogDetail: string;
  authorName: string;
}

const AddPosts = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  const categoryList = categories?.categoryList || [];

  const [addPost] = useAddPostMutation();

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

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = methods;

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    setValue("blogDetail", newContent);
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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

  const onSubmitHandler = async (values: PostFormData) => {
    try {
      const res = await addPost(values);

      if (res && res.data) {
        toast.success("Post added successfully");
        navigate("/dashboard/blogs");
      }
    } catch (error) {
      console.error("Add post error:", error);
      toast.error("Failed to add post. Please try again.");
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Add New Blog Post</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {/* Title Field */}
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
              <input type="file" onChange={handleImageChange} className="w-full p-2 border mt-4" />
            </div>
            {isUploading ? <CircularProgress size={24} className="mt-4" /> : imagePath && <img src={imagePath} alt="Uploaded" className="w-full mt-2" />}

            {/* Category Selection */}
            <Controller
              name="categoryId"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                  onChange={(event) => {
                    const selectedCategory = categoryList.find(cat => cat._id === event.target.value);
                    field.onChange(selectedCategory?._id || "");
                    setValue("categoryTitle", selectedCategory?.title || "");
                  }}
                  displayEmpty
                  className="mt-4 mb-4"
                >
                  <MenuItem value="" disabled>Select a Category</MenuItem>
                  {isLoading ? (
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
            {errors.categoryId && <div className="text-red-500 mt-1">{errors.categoryId.message}</div>}

            {/* Blog Content Editor */}
            <Editor
              apiKey="6rq58torrow1webfnxy8wn0e6zqtzjoemmprd735oh84809n"
              initialValue="<p>Start typing here...</p>"
              init={{
                height: 400,
                menubar: "file edit view insert format tools table help",
                plugins: [
                  "advlist", "autolink", "lists", "link", "image", "charmap", "print", "preview", "anchor",
                  "searchreplace", "visualblocks", "code", "fullscreen",
                  "insertdatetime", "media", "table", "paste", "code", "help", "wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline strikethrough backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | link image media table | " +
                  "code preview fullscreen | removeformat help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={handleEditorChange}
            />
            {/* Submit Button */}
            <Button type="submit" variant="contained" className="w-full mt-4">Submit</Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default AddPosts;
