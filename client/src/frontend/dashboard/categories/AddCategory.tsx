import { Button, Card, CardContent, Input } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useAddPostMutation } from "../../../redux/services/blog";
import CloudinaryUploadWidget from "../../../common/form-components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

const AddPosts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState("");

  const [addPost] = useAddPostMutation();

  const defaultValue = {
    title: "",
    imageUrl: "",
    categoryTitle: "",
    // categoryId: "",
    blogDetail: "",
  };

  const methods = useForm({
    defaultValues: defaultValue,
    // resolver: zodResolver(loginFormSchema),
  });

  const {
    reset,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    register,
  } = methods;

  const handleEditorChange = (newContent) => {
    setContent(newContent);
    setValue("blogDetail", newContent);
  };

  const onSubmitHandler = async (value: any) => {
    try {
      const res = await addPost(value);
      console.log("add post response:", res); // Log the response

      if (res && res.data) {
        // const token = res.data.token;

        toast.success("Post added successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("addpost:", error); // Log the error
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

  // Upload Widget Configuration
  // const uwConfig = {
  //   cloudName,
  //   uploadPreset,
  //   // Uncomment and modify as needed:
  //   // cropping: true,
  //   // showAdvancedOptions: true,
  //   // sources: ['local', 'url'],
  //   // multiple: false,
  //   // folder: 'user_images',
  //   // tags: ['users', 'profile'],
  //   // context: { alt: 'user_uploaded' },
  //   // clientAllowedFormats: ['images'],
  //   // maxImageFileSize: 2000000,
  //   // maxImageWidth: 2000,
  //   // theme: 'purple',
  // };
  console.log("imageUrl: ", getValues("imageUrl"));
  console.log("blogDetail: ", getValues("blogDetail"));
  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Add New Blog Post</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="">
              <div className="row custom-mar-20">
                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-20">
                    <input
                      type="text"
                      {...register("title", { required: true })}
                      placeholder="Blog Title"
                    />
                    {errors?.title && (
                      <div className="text-danger">Title is required</div>
                    )}
                  </div>
                </div>
                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-20">
                    <input
                      type="file"
                      placeholder="Image"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <img src={imagePath} style={{ width: "100%" }} />

                    {/* {errors?.imageUrl && (
                      <div className="text-danger">Image is required</div>
                    )} */}
                  </div>
                </div>

                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-20">
                    <input
                      type="text"
                      {...register("categoryTitle", { required: true })}
                      placeholder="Category"
                    />
                    {errors?.categoryTitle && (
                      <div className="text-danger">Category is required</div>
                    )}
                  </div>
                </div>

                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-20">
                    <Editor
                      apiKey="6rq58torrow1webfnxy8wn0e6zqtzjoemmprd735oh84809n" // Replace with your API Key or remove for self-hosted
                      initialValue="<p>Start typing here...</p>"
                      init={{
                        height: 400,
                        menubar: true,
                        plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste code help wordcount",
                        ],
                        toolbar:
                          "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
                      }}
                      onEditorChange={handleEditorChange}
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

export default AddPosts;
