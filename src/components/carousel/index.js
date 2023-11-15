import React, { useState, useEffect } from "react";
import { Button, Box, Paper, IconButton } from "@mui/material";
import {
  ArrowForwardIos,
  ArrowBackIos,
  FullscreenOutlined
} from "@mui/icons-material";
import "./index.css";
import Modal from "../modal";
const Carousel = ({ data, component }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalToggle, setModalToggle] = useState();
  const [numColumns, setNumColumns] = useState(4);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 600) {
        console.log("width-",windowWidth);
        setNumColumns(1);
      } else if (windowWidth <= 960) {
        console.log("width--",windowWidth);
        setNumColumns(2);
      } else if (windowWidth <= 1200) {
        console.log("width---",windowWidth);
        setNumColumns(3);
      } else {
        console.log("width----",windowWidth);
        setNumColumns(4);
      }
    }

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < data.length - numColumns) {
      setCurrentIndex(currentIndex + numColumns);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - numColumns);
    }
  };

  const handleModalOpen = (index) => {
    setModalToggle(index);
  };
  const handleModalClose = () => {
    setModalToggle(undefined); // Reset modalToggle to undefined
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
      <Box sx={{ display: "grid", gridTemplateColumns: `repeat(${numColumns}, 1fr)`, gap: "2rem" }} className="carousel-container">
        {data?.length ? (
          data.slice(currentIndex, currentIndex + numColumns).map((graphData, idx) => {
            return (
              <Paper
                key={idx}
                sx={{
                  height: 220,
                  width: 300,
                  position: "relative",
                  boxShadow: "0px 4px 4px 0px #26262633",
                  display:'flex',
                  justifyContent:'center'
                }}
              >
                <IconButton
                  onClick={() => handleModalOpen(idx)}
                  onClose={handleModalClose}
                  className="carusel-full-screen-button"
                >
                  <FullscreenOutlined />
                </IconButton>
                {modalToggle >= 0 ? (
                  <Modal
                    isOpen={modalToggle === idx}
                    onClose={handleModalClose}
                  >
                    {component(graphData, 600, 600)}
                  </Modal>
                ) : null}
                {component(graphData, 200, 200)}
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
