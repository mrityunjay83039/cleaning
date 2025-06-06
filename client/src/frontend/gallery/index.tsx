import React, { useState } from "react";
import { useGetAllGalleriesQuery } from "../../redux/services/gallery";
import {
  Dialog,
  DialogContent,
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import BreadCrumb from "../../common/BreadCrumb";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const ImageGallery: React.FC = () => {
  const {
    data: GalleryData,
    isLoading,
    isError,
    refetch,
  } = useGetAllGalleriesQuery();

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <BreadCrumb breadCrumTitle="Image Gallery" pageName="Gallery" />
      <section className="pt-90 pb-90 mx-auto" style={{ width: "90%" }}>
        <ImageList
          sx={{ width: "100%" }}
          cols={3}
          //   rowHeight={164}
        >
          {GalleryData &&
            GalleryData?.galleries?.length > 0 &&
            GalleryData?.galleries?.map((item) => (
              <ImageListItem
                key={item.imageUrl}
                onClick={() => handleClickOpen(item.imageUrl)}
                style={{ cursor: "pointer" }}
              >
                <img
                  srcSet={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList>

        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent sx={{ p: 0 }}>
            {selectedImage && (
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Full View"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default ImageGallery;
