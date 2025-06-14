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
import { useGetJobByIdQuery, useUpdateJobMutation } from "../../../redux/services/job";

interface JobFormData {
  title: string;
  imageUrl: string;
  jobDetail: string;
  authorName: string;
}

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetJobByIdQuery(id);
  console.log("data: ", data);

  const [updatePost] = useUpdateJobMutation();
  const [imagePath, setImagePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const methods = useForm<JobFormData>({
    defaultValues: {
      title: "",
      imageUrl: "",
      jobDetail: "",
      authorName: "",
    },
  });

  const { reset, handleSubmit, setValue, getValues, formState: { errors }, register, control } = methods;

  useEffect(() => {
    if (data?.job) {
      reset({
        title: data.job.title || "", 
        imageUrl: data.job.imageUrl || "", 
        jobDetail: data.job.jobDetail || "",
        authorName: data.job.authorName || "",
      });
      setImagePath(data.job.imageUrl || "");
    }
  }, [data, reset, setValue]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post</p>;

  const handleEditorChange = (newContent) => {
    setValue("jobDetail", newContent);
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
      toast.success("Job updated successfully");
      navigate(`/dashboard/jobs`);
    } catch (error) {
      console.error("Update error: ", error);
      toast.error("Failed to update job");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Edit Job</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {/* Blog Title */}
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <TextField {...field} label="Job Title" fullWidth margin="normal" error={!!errors.title} helperText={errors.title?.message} />
              )}
            />

            {/* Image Upload */}
            <div>
              <input type="file" onChange={handleImageChange} className="w-full p-2 border" />
            </div>
            {isUploading ? <CircularProgress size={24} className="mt-4" /> : imagePath && <img src={imagePath} alt="Uploaded" className="w-full mt-2 mb-2" />}

            {/* Blog Content Editor */}
            <Editor
              apiKey="6rq58torrow1webfnxy8wn0e6zqtzjoemmprd735oh84809n"
              initialValue={getValues("jobDetail")}
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
            <Button type="submit" variant="contained" disabled={formSubmitting} className="w-full mt-4">
              {formSubmitting ? <CircularProgress size={24} /> : "Update Job"}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default EditJob;
