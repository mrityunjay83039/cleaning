import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
} from "@mui/material";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { useAddJobMutation } from "../../../redux/services/job";

interface JobFormData {
  title: string;
  imageUrl?: string;
  jobDetail: string;
  authorName: string;
}

const AddJob = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [addJob] = useAddJobMutation();

  const methods = useForm<JobFormData>({
    defaultValues: {
      title: "",
      imageUrl: "",
      jobDetail: "",
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
    setValue("jobDetail", newContent);
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

  const onSubmitHandler = async (values: JobFormData) => {
    // if (!values.imageUrl) {
    //   toast.error("Please upload an image.");
    //   return;
    // }

    if (!values.jobDetail || values.jobDetail.trim() === "" || values.jobDetail.trim() === "<p>Start typing here...</p>") {
      toast.error("Please provide job details.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await addJob(values);
      if (res && res.data) {
        toast.success("Job added successfully");
        navigate("/dashboard/jobs");
      }
    } catch (error) {
      console.error("Add job error:", error);
      toast.error("Failed to add job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Add New Job</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>

            {/* Title */}
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Job Title"
                  fullWidth
                  margin="normal"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />

            {/* Image Upload */}
            <div className="mb-4 mt-4">
              <label className="block">
                <span className="text-gray-700">Upload Image</span>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 mt-2"
                />
              </label>
              {isUploading && <CircularProgress size={24} className="mt-4" />}
              {imagePath && !isUploading && (
                <img src={imagePath} alt="Uploaded" className="w-full mt-4 rounded" />
              )}
            </div>

            {/* TinyMCE Editor */}
            <div className="mt-6">
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
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              className="w-full mt-6"
              disabled={isUploading || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : isUploading ? "Uploading Image..." : "Submit"}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default AddJob;
