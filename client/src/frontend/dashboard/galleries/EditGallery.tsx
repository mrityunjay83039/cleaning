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
import { useGetGalleryByIdQuery, useUpdateGalleryMutation } from "../../../redux/services/gallery";

interface GalleryFormData {
  title: string;
  imageUrl: string;
  authorName: string;
}

const EditGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetGalleryByIdQuery(id);
  console.log("data: ", data);

  const [updateGallery] = useUpdateGalleryMutation();
  const [imagePath, setImagePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const methods = useForm<GalleryFormData>({
    defaultValues: {
      title: "",
      imageUrl: "",
      authorName: "",
    },
  });

  const { reset, handleSubmit, setValue, getValues, formState: { errors }, register, control } = methods;

  useEffect(() => {
    if (data?.gallery) {
      reset({
        title: data.gallery.title || "", 
        imageUrl: data.gallery.imageUrl || "", 
        jobDetail: data.gallery.jobDetail || "",
        authorName: data.gallery.authorName || "",
      });
      setImagePath(data.gallery.imageUrl || "");
    }
  }, [data, reset, setValue]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching gallery</p>;

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
      await updateGallery({ id, updatedData });
      await refetch();
      toast.success("Gallery updated successfully");
      navigate(`/dashboard/galleries`);
    } catch (error) {
      console.error("Update error: ", error);
      toast.error("Failed to update gallery");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Edit Gallery</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {/* Blog Title */}
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <TextField {...field} label="Gallery Title" fullWidth margin="normal" error={!!errors.title} helperText={errors.title?.message} />
              )}
            />

            {/* Image Upload */}
            <div>
              <input type="file" onChange={handleImageChange} className="w-full p-2 border" />
            </div>
            {isUploading ? <CircularProgress size={24} className="mt-4" /> : imagePath && <img src={imagePath} alt="Uploaded" className="w-full mt-2 mb-2" />}

            {/* Submit Button */}
            <div>
              <Button type="submit" variant="contained" disabled={formSubmitting} className="w-full mt-4">
                {formSubmitting ? <CircularProgress size={24} /> : "Update Gallery"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default EditGallery;
