import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Box,
  Container,
  IconButton,
  Grid,
  Typography,
  Icon,
  CardMedia,
} from "@mui/material";
import {
  ArrowForwardIos,
  ArrowBackIos,
  FullscreenExitOutlined,
} from "@mui/icons-material";
import "./index.css";
import Modal from "../../modal";
import CarouselView from "./carouselView";
import ModalView from "./modalView";
const ImagePhaseCarousel = ({ sorce }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalToggle, setModalToggle] = useState();

  const handlePrevious = () => {
    const index = currentIndex !== 0 ? currentIndex - 1 : sorce.length - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex !== sorce.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  };
  const handleModalOpen = (index) => {
    setModalToggle(index);
  };

  const isVideo = (src) => {
    if (src.indexOf('mp4') >= 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <IconButton
          onClick={handlePrevious}
          sx={{ justifyContent: "flex-start", borderRadius:0 }}
        >
          <ArrowBackIos
            sx={{ width: "24px", height: "40px", color: "#000000" }}
          />
        </IconButton>
        <Grid
          container
          direction="row"
          flexWrap="wrap"
          spacing={1}
          alignItems="flex-end"
          justifyContent='center'

        >
          {sorce.map((image, index) => {
            return (
              <Grid key={index} sx={{ position: "relative" }}>
                <IconButton
                  onClick={() => handleModalOpen(index)}
                  sx={{
                    position: "absolute",
                    color: "#ffffff",
                    right: 0,
                    cursor: "pointer",
                    zIndex: 1,
                    display:
                    index === currentIndex ? "block" : "none",
                  }}
                >
                  <FullscreenExitOutlined />
                </IconButton>
                <ModalView 
                  modalToggle={modalToggle}
                  image={image}
                  index={index}
                  currentIndex={currentIndex}
                  onClose={setModalToggle}
                  isVideo={isVideo}
                />
                <CarouselView
                  image={image}
                  index={index}
                  currentIndex={currentIndex}
                  isVideo={isVideo}
                  totalImages = {sorce}
                />
                {/* <Typography
                  display="flex"
                  justifyContent="center"
                  fontSize="small"
                  weight={400}
                >
                  {image.name}
                </Typography> */}
              </Grid>
            );
          })}
        </Grid>
        <IconButton sx={{ justifyContent: "flex-start", borderRadius:0 }} onClick={handleNext}>
          <ArrowForwardIos
            sx={{ width: "24px", height: "40px", color: "#000000" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImagePhaseCarousel;
