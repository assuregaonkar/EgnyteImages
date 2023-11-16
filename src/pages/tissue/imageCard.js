import React from "react";
import { CardMedia, Box } from "@mui/material";

export const ImageCard = ({ image, title, type }) => {
  return (
    
    <CardMedia
      component={type}
      image={image}
      alt={title}
      controls
      style={{  borderRadius: "10px", width: "100%", height: "80%", objectFit: "cover" }}
    />
  );
};
