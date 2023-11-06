import React, { useEffect, useState } from "react";
import ReactPlotlyGraph from "../../../components/react-plotly/plotlyGraph";
import BohekGraph from "../../../components/react-plotly/bohekGraph/bohekGraph";
import Carousel from "../../../components/carousel";
import './index.css'
const GraphCarousel = () => {
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchPlotlyData = [
        fetch("http://localhost:5000/calcium_trace_10s"),
        fetch("http://localhost:5000/normalized_calcium_trace_1s"),
        fetch("http://localhost:5000/f0_calcium_trace_1"),
        fetch("http://localhost:5000/normalized_beat_frequency"),
        fetch("http://localhost:5000/beat_frequency"),
        fetch("http://localhost:5000/normalized_calcium_amplitude"),
      ];

      const fetchBohekData = [
        fetch("http://127.0.0.1:5000/verapamil_calcium_trace"),
        fetch("http://127.0.0.1:5000/verapamil_normalized"),
      ];
      try {
        const bohekResponse = await Promise.all(fetchBohekData);
        const bohekData = await Promise.all(
          bohekResponse.reduce((acc, response) => {
            if (response.status === 200) {
              acc.push(response.json());
            }
            return acc;
          }, [])
        );

        const plotlyResponse = await Promise.all(fetchPlotlyData);
        const plotlyData = await Promise.all(
          plotlyResponse.reduce((acc, response) => {
            if (response.status === 200) {
              acc.push(response.json());
            }
            return acc;
          }, [])
        );

        setGraphData([...bohekData, ...plotlyData]);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const carouselGraph = (plots, hasForm) => {
    const graphHeight = hasForm ? 400 : 220;
    const graphWidth = hasForm ? 400 : 220;
    if (plots?.doc?.roots) {
      return (
        <BohekGraph
          data={plots}
          hasForm={hasForm}
          width={graphWidth}
          height={graphHeight}
        />
      );
    } else if (plots) {
      return (
        <ReactPlotlyGraph
          data={plots}
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

  return (
    <React.Fragment>
      {graphData && <Carousel data={graphData} component={carouselGraph} />}
    </React.Fragment>
  );
};

export default GraphCarousel;
