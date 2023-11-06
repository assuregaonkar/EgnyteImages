import React, { useState } from "react";
import { Button, Box, Container, Paper, IconButton } from "@mui/material";
import {
  ArrowForwardIos,
  ArrowBackIos,
  FullscreenExitOutlined,
} from "@mui/icons-material";
import "./index.css";
import Modal from "../modal";
const Carousel = ({ data, component }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalToggle, setModalToggle] = useState();
  const handleNext = () => {
    if (currentIndex < data.length - 4) {
      setCurrentIndex(currentIndex + 4);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const handleModalOpen = (index) => {
    setModalToggle(index);
  };
  return (
    <Box
      p={1}
      sx={{
        bgcolor: "#ECECEC",
        borderRadius: "8px",
        margin: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{ justifyContent: "flex-start" }}
        onClick={handlePrevious}
        className="carousel-next-button"
      >
        <ArrowBackIos
          sx={{ width: "24px", height: "40px", color: "#000000" }}
        />
      </Button>
      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        {data?.length ? (
          data.slice(currentIndex, currentIndex + 4).map((graphData, idx) => {
            return (
              <Paper
                key={idx}
                sx={{
                  height: "220px",
                  width: "220px",
                  position: "relative",
                  boxShadow: "0px 4px 4px 0px #26262633",
                }}
              >
                <IconButton
                  onClick={() => handleModalOpen(idx)}
                  onClose={() => setModalToggle()}
                  className="carusel-full-screen-button"
                >
                  <FullscreenExitOutlined />
                </IconButton>
                {modalToggle >= 0 ? (
                  <Modal
                    isOpen={modalToggle === idx}
                    onClose={() => setModalToggle()}
                  >
                    {component(graphData, true)}
                  </Modal>
                ) : (
                  component(graphData, false)
                )}
              </Paper>
            );
          })
        ) : (
          <div>Loading ...</div>
        )}
      </Box>
      <Button
        sx={{ justifyContent: "flex-end" }}
        className="carousel-previous-button"
        onClick={handleNext}
      >
        <ArrowForwardIos
          sx={{ width: "24px", height: "40px", color: "#000000" }}
        />
      </Button>
    </Box>
    // </Container>
  );
};

Carousel.defaultProps = {
  data: [],
};

export default Carousel;
