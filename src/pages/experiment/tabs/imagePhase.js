import { Box, Button } from "@mui/material";
import ImagePhaseCarousel from "../../../components/carousel/imagePhase";
import { images, videos } from "./constant";
import React, { useState } from "react";
const ImagePhase = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "3rem",
          marginTop: "1rem",
        }}
      >
        {Array(14)
          .fill(1)
          .map((value, idx) => {
            return (
              <Button
                key={idx}
                sx={{
                  textTransform: "none",
                  color: selectedDay === idx ? "#ffffff" : "#000000",
                  flexDirection: "column",
                  borderRadius: "0.5rem",
                  background: "#E6E7E9",
                  padding: 0,
                  marginRight: "2rem",
                  minWidth: "41px",
                  bgcolor: selectedDay === idx && "#1976D2",
                }}
                onClick={() => {
                  setSelectedDay(idx);
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
      <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <ImagePhaseCarousel sorce={selectedDay === 0 ? images : videos} />
      </Box>
    </Box>
  );
};

export default ImagePhase;
