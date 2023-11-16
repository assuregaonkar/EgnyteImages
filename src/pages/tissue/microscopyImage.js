import React from "react";
import {
  Card,
  Box,
  Typography,
  Dialog,
  IconButton,
  CardMedia,
} from "@mui/material";
import { ImageCard } from "./imageCard";
import CloseIcon from "@mui/icons-material/Close";

const MicroscopyImagesContent = ({ images }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImageDialog = (image) => {
    setSelectedImage(image);
  };

  const closeImageDialog = () => {
    setSelectedImage(null);
  };
  const isVideo = (src) => {
    if (src.indexOf("mp4") >= 0) {
      return true;
    } else {
      return false;
    }
  };

  const modifyTitles = (images) => {
    const titleCount = {};
    return images.map((img) => {
      const title = img.title;
      const count = titleCount[title] || 0;
      

      // Only append count if there's more than one item for a day
      const modifiedTitle =
        count > 0 ? `${title}_${count + 1}` : count === 0 ? title : title;

      titleCount[title] = count + 1;
      console.log("count",title, titleCount[title])
      return {
        ...img,
        title: modifiedTitle,
      };
    });
  };

  const modifiedImages = modifyTitles(images);
  const showScrollbar = modifiedImages.length > 15;

  return (
    <>
      <Card
        sx={{
          backgroundColor: "rgba(217, 217, 217, 0.50)",
          my: 2,
          maxHeight: showScrollbar ? "80vh" : "auto",
          overflowY: showScrollbar ? "auto" : "visible",
        }}
      >
        <Box display={"flex"} gap={"1rem"} paddingLeft={"1rem"} sx={{ my: 1 }}>
          <Typography
            sx={{ fontWeight: "600", color: "#000000", fontSize: "14px" }}
          >
            Experiment ID: XXXXX
          </Typography>
          <Typography
            sx={{ fontWeight: "600", color: "#000000", fontSize: "14px" }}
          >
            Tissue ID: XXXXX
          </Typography>
        </Box>
        {modifiedImages.map((image, index) =>
          index % 5 === 0 ? (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {modifiedImages.slice(index, index + 5).map((img, idx) => (
                <Box
                  key={idx}
                  onClick={() => openImageDialog(img.url)}
                  width="calc(20% - 16px)"
                  m={1}
                >
                  {isVideo(img.url) ? (
                    <ImageCard
                      image={img.url}
                      title={img.title}
                      type={"video"}
                    />
                  ) : (
                    <ImageCard image={img.url} title={img.title} type={"img"} />
                  )}
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    align="center"
                    sx={{ fontWeight: "400", color: "#000" }}
                  >
                    {img.title}
                  </Typography>
                </Box>
              ))}
            </div>
          ) : null
        )}
      </Card>

      <Dialog
        open={selectedImage !== null}
        onClose={closeImageDialog}
        maxWidth={false}
        PaperProps={{
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {selectedImage && isVideo(selectedImage) ? (
          <CardMedia
            component="video"
            image={selectedImage}
            alt="video"
            controls
            style={{ height: "80vh", width: "80vw" }}
          />
        ) : (
          <CardMedia
            component="img"
            image={selectedImage}
            alt="image"
            style={{ height: "80vh", width: "80vw" }}
          />
        )}
      </Dialog>

      {selectedImage && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
        >
          <IconButton aria-label="close" onClick={closeImageDialog}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default MicroscopyImagesContent;
