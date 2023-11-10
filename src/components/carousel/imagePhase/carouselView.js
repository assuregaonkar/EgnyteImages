import React from "react";
import { Typography, Box } from "@mui/material";
const CarouselView = ({ image, index, currentIndex, isVideo,totalImages }) => {
  const isVisible = (currentIndex) => {
    const range = 7;
    const halfRange = Math.floor(range/2)
    const startIndex = Math.max(0,currentIndex-halfRange)
    const endIndex = Math.min(totalImages.length, startIndex+range);
    if(endIndex -startIndex <range){
      return totalImages.slice(startIndex).concat(totalImages.slice(0, range - (endIndex-startIndex)))
    }
    return totalImages.slice(startIndex,endIndex)
  
  };

  return (
    <Box
      sx={{
        // display: isVisible(index, currentIndex)[index]?.name == image.name ? "block" : "none",
        display: isVisible(currentIndex).some(value => value.name === image.name) ? "block" : 'none'
      }}
    >
      {
        <img
          src={isVideo(image.url) ? image.thumbail : image.url}
          alt={image.name}
          style={{
            width: index === currentIndex ? "170px" : "140px",
            height: index === currentIndex ? "139px" : "107px",
            // transition: "width 0.5s",
            
          }}
          className="carousel-image-phase"
        />
      }
      <Typography
        display="flex"
        justifyContent="center"
        fontSize="small"
        weight={400}
      >
        {image.name}
      </Typography>
    </Box>
  );
};

export default React.memo(CarouselView);
