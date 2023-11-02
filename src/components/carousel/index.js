import React, { useState } from "react";
import { Button, Box, Container, Paper, IconButton } from "@mui/material";
import {
  ArrowForwardIos,
  ArrowBackIos,
  FullscreenExitOutlined,
} from "@mui/icons-material";
import "./index.css";
import BohekGraph from "../react-plotly/bohekGraph/bohekGraph";
import ReactPlotlyGraph from "../react-plotly/plotlyGraph";
import Modal from "../modal";
const Carousel = ({ data }) => {
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

  const carouselGraph = (graphData, hasForm) => {
    const bohekGraphSize = hasForm ? 400 : 220;
    const plotlyGraphSize = !hasForm && 220;
    if (graphData?.doc?.roots) {
      return (
        <BohekGraph
          data={graphData}
          hasForm={hasForm}
          width={bohekGraphSize}
          height={bohekGraphSize}
        />
      );
    } else if (graphData) {
      return (
        <ReactPlotlyGraph
          data={graphData}
          width={plotlyGraphSize}
          height={plotlyGraphSize}
          legend={{
            x: 0,
            y: 1.05,
            xanchor: "left",
            yanchor: "bottom",
          }}
          config={{
            displayModeBar: false,
          }}
          margin={{
            l: 40,
            r: 40,
            t: 10,
          }}
          hasForm={hasForm}
        />
      );
    }
  };
  const carouselGraph1 = (graphData, hasForm) => {
    const graphHeight = hasForm ? 400 : 220;
    const graphWidth = hasForm ? 400 : 220;
    if (graphData?.doc?.roots) {
      return (
        <BohekGraph
          data={graphData}
          hasForm={hasForm}
          width={graphWidth}
          height={graphHeight}
        />
      );
    } else if (graphData) {
      return (
        <ReactPlotlyGraph
          data={graphData}
          width={graphWidth}
          height={graphHeight}
          legend={{
            x: 0,
            y: 1.05,
            xanchor: "left",
            yanchor: "bottom",
          }}
          config={{
            displayModeBar: false,
          }}
          margin={{
            l: 40,
            r: 40,
            t: 10,
          }}
          hasForm={hasForm}
        />
      );
    }
  };

  const handleModalOpen = (index) => {
    setModalToggle(index);
  };
  return (
    // <Container>
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
                    {carouselGraph1(graphData, true)}
                  </Modal>
                ) : (
                  carouselGraph(graphData, false)
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
