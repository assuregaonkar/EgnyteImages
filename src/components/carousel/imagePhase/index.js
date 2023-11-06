import React, { useEffect, useState } from "react";
import { Button, Box, Container, IconButton, Grid } from "@mui/material";
import {
  ArrowForwardIos,
  ArrowBackIos,
  FullscreenExitOutlined,
} from "@mui/icons-material";

const ImagePhaseCarousel = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxImages, setMaxImages] = useState([0, 7]);

  useEffect(()=>{
    console.log(currentIndex)
    if(currentIndex === 0){
      setMaxImages([0, 7])
    } else if(currentIndex % 7 === 0 && currentIndex+7 <= images.length){
      setMaxImages([currentIndex, currentIndex + 7]);
    }else if (currentIndex === images.length-1 ||currentIndex % 7 === 0 && currentIndex+7 >= images.length) {
      setMaxImages([images.length - 7, images.length]);
    } 
    // if (currentIndex + 7 > images.length) {
    //   setMaxImages([images.length - 7, images.length]);
    // } else {
    //   setMaxImages([currentIndex, currentIndex + 7]);
    // }
  },[currentIndex])
  const images = [
    "images/t1.png",
    "images/t2.png",
    "images/t3.png",
    "images/t4.png",
    "images/t5.png",
    "images/t6.png",
    "images/t7.png",
    "images/t8.png",
    "images/t9.png",
    "images/t10.png",
    "images/t11.png",
    "images/t12.png",
  ];

  const handlePrevious = () => {
    const index = currentIndex !== 0 ? currentIndex-1 : images.length-1
    setCurrentIndex(index)
    if(currentIndex === 0 || currentIndex % 7 === 0 && currentIndex-7 <= images.length){
      setMaxImages([0, 7])
    } else if(currentIndex % 7 === 0 && currentIndex-7 <= images.length){
      setMaxImages([currentIndex, currentIndex + 7]);
    }else if (currentIndex === images.length-1) {
      setMaxImages([images.length - 7, images.length]);
    } 

    // setCurrentIndex((prev) => {
    //   if (prev !== 0) {
    //     return prev - 1;
    //   } else {
    //     return images.length-1;
    //   }
    // });
  };

  const handleNext = () => {
    const index = currentIndex !== images.length - 1 ? currentIndex+1 : 0
    setCurrentIndex(index)
    if(currentIndex === 0){
      setMaxImages([0, 7])
    } else if(currentIndex % 7 === 0 && currentIndex+7 <= images.length){
      setMaxImages([currentIndex, currentIndex + 7]);
    }else if (currentIndex === images.length-1 ||currentIndex % 7 === 0 && currentIndex+7 >= images.length) {
      setMaxImages([images.length - 7, images.length]);
    } 
    // setCurrentIndex((prev) => {
    //   if(prev !== images.length - 1 ){
    //     return prev + 1
    //   } else { 
    //     return 0
    //   }
    // });
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "3rem",
        }}
      >
        {Array(14)
          .fill(1)
          .map((value, idx) => {
            return (
              <Button
                sx={{
                  textTransform: "none",
                  color: selectedDay === idx + 1 ? "#ffffff" : "#000000",
                  flexDirection: "column",
                  borderRadius: "0.5rem",
                  background: "#E6E7E9",
                  padding: 0,
                  marginRight: "2rem",
                  minWidth: "41px",
                  bgcolor: selectedDay === idx + 1 && "#1976D2",
                }}
                onClick={() => {
                  setSelectedDay(idx + 1);
                }}
                variant="contained"
                disableRipple={true}
              >
                <span>Day </span>
                <span>{idx + 1}</span>
              </Button>
            );
          })}
      </Box>

      <Box display="flex" justifyContent="space-between">
          <IconButton onClick={handlePrevious} sx={{ justifyContent: "flex-start" }}>
            <ArrowBackIos
              sx={{ width: "24px", height: "40px", color: "#000000" }}
            />
          </IconButton>
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          gap={1}
          spacing={1}
          alignItems="flex-end"
        >
          {images.slice(...maxImages).map((image, index) => {
            return (
              <Grid>
                <img
                  src={image}
                  style={{
                    width: index+maxImages[0] === currentIndex ? "180px" : "150px",
                    height: index+maxImages[0] === currentIndex ? "129px" : "107px",
                    transition: "width 0.5s",
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        <IconButton sx={{ justifyContent: "flex-start" }} onClick={handleNext}>
          <ArrowForwardIos
            sx={{ width: "24px", height: "40px", color: "#000000" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImagePhaseCarousel;
