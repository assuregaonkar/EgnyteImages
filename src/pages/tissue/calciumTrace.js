import { Typography, Box, IconButton, CardMedia } from "@mui/material";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import {
  images,
  GraphImageCarousel } from "../../components/carousel/graphImageCarousel";
import Carousel from "../../components/carousel/index";
import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";

const videoData = [
  {
    url: "calciumvideos/Aquarium.mp4",
  },
  {
    url: "calciumvideos/flowers.mp4",
  },
  {
    url: "calciumvideos/honey.mp4",
  },
  {
    url: "calciumvideos/Aquarium.mp4",
  },
  {
    url: "calciumvideos/flowers.mp4",
  },
  {
    url: "calciumvideos/honey.mp4",
  },
  {
    url: "calciumvideos/Aquarium.mp4",
  },
  {
    url: "calciumvideos/flowers.mp4",
  },
  {
    url: "calciumvideos/honey.mp4",
  },
  {
    url: "calciumvideos/Aquarium.mp4",
  },
  {
    url: "calciumvideos/flowers.mp4",
  },
  {
    url: "calciumvideos/honey.mp4",
  },
  {
    url: "calciumvideos/Aquarium.mp4",
  },
];

export const CalciumTrace = () => {
  const [showScrollBars, setShowScrollBars] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const handleVideoPlay = (index) => {
    setShowScrollBars(true);
    setSelectedVideoIndex(index);
  };

  const getPreviousVideoIndex = () => {
    return selectedVideoIndex !== null && selectedVideoIndex > 0
      ? selectedVideoIndex - 1
      : null;
  };

  const getNextVideoIndex = () => {
    if (
      selectedVideoIndex !== null &&
      selectedVideoIndex < videoData.length - 1
    ) {
      return selectedVideoIndex + 1;
    }
  };

  const handleNavigation = (direction) => {
    if (selectedVideoIndex !== null) {
      const newIndex =
        direction === "previous"
          ? getPreviousVideoIndex()
          : getNextVideoIndex();
      if (newIndex !== null) {
        setSelectedVideoIndex(newIndex);
      }
    }
  };

  const handleExit = () => {
    setSelectedVideoIndex(null);
    setShowScrollBars(false);
  };
  const showScrollbar = videoData.length > 12;
  return (
    <>
      <Box display={"flex"} gap={"1rem"} paddingLeft={"1rem"} sx={{ my: 2 }}>
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
        <VideoLibraryOutlinedIcon />
      </Box>
      {selectedVideoIndex !== null && (
        <Box
          sx={{
            position: "absolute",
            right: 10,
            zIndex: 1,
          }}
        >
          <IconButton aria-label="close" onClick={handleExit}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      {selectedVideoIndex !== null && (
        <Box display="flex" justifyContent="space-around" alignContent="center">
          <IconButton
            onClick={() => handleNavigation("previous")}
            disabled={selectedVideoIndex === 0}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <CardMedia
            component="video"
            image={videoData[selectedVideoIndex].url}
            title="title"
            controls
            onPlay={() => handleVideoPlay(selectedVideoIndex)}
            sx={{ width: "50%" }}
          />
          <IconButton
            onClick={() => handleNavigation("next")}
            disabled={selectedVideoIndex === videoData.length - 1}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      )}

      {selectedVideoIndex === null && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxHeight: showScrollbar ? "80vh" : "auto",
            overflowY: showScrollbar ? "auto" : "visible",
          }}
        >
          {videoData.map((video, index) => (
            <Box key={index} m={1} width="calc(25% - 16px)">
              <CardMedia
                component="video"
                image={video.url}
                title="title"
                controls
                onPlay={() => handleVideoPlay(index)}
                sx={{ width: "100%" }}
              />
            </Box>
          ))}
        </div>
      )}

      <div
        style={{
          maxHeight: showScrollBars ? "300px" : null,
          overflowY: showScrollBars ? "auto" : "hidden",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            color: "#000000",
            fontSize: "14px",
            my: "2",
            paddingLeft: "1rem",
          }}
        >
          Absolute Units
        </Typography>
        <Carousel data={images} component={GraphImageCarousel} />
        <Typography
          sx={{
            fontWeight: "600",
            color: "#000000",
            fontSize: "14px",
            my: "2",
            paddingLeft: "1rem",
          }}
        >
          Normalized Units
        </Typography>
        <Carousel data={images} component={GraphImageCarousel} />
      </div>
    </>
  );
};
