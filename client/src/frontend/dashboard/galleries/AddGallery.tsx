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
import { useAddGalleryMutation } from "../../../redux/services/gallery";

interface GalleryFormData {
  title: string;
  imageUrl: string;
  authorName: string;
}

const AddGallery = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const [addGallery] = useAddGalleryMutation();

  const methods = useForm<GalleryFormData>({
    defaultValues: {
      title: "",
      imageUrl: "",
      authorName: "",
    },
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = methods;

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

  const onSubmitHandler = async (values: GalleryFormData) => {
    try {
      const res = await addGallery(values);

      if (res && res.data) {
        toast.success("Gallery added successfully");
        navigate("/dashboard/galleries");
      }
    } catch (error) {
      console.error("Add gallery error:", error);
      toast.error("Failed to add gallery. Please try again.");
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Add New Gallery</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {/* Title Field */}
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <TextField {...field} label="Gallery Title" fullWidth margin="normal" error={!!errors.title} helperText={errors.title?.message} />
              )}
            />

            {/* Image Upload */}
            <div className="mb-4">
              <input type="file" onChange={handleImageChange} className="w-full p-2 border mt-4" />
            </div>
            {isUploading ? <CircularProgress size={24} className="mt-4" /> : imagePath && <img src={imagePath} alt="Uploaded" className="w-full mt-2 mb-2" />}

            {/* Submit Button */}
            <div>
              <Button type="submit" variant="contained" className="w-full mt-4">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default AddGallery;
