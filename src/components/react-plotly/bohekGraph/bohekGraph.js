import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
// import axios from "axios";
import Plots from "react-plotly.js";
import FilterGraph from "../../coordinateForm";
// import { lineSkeleton, plots } from "./constants/plots";

const BohekGraph = ({ height, width, legend, margin, data, hasForm }) => {
  const [graphPlots, setGraphPlots] = useState([]);
  const [ticktext, setTickText] = useState([]);
  const [tickvals, setTickVals] = useState([]);
  const [yAxisMinRange, setYAxisMinRange] = useState();
  const [yAxisMaxRange, setYAxisMaxRange] = useState();
  const [xAxisMinRange, setXAxisMinRange] = useState();
  const [xAxisMaxRange, setXAxisMaxRange] = useState();
  // const [layout, setLayout] = useState({})
  useEffect(() => {
    const middleLineLimit = 0.1;
    try {
      // const response = await axios.get(url);
      if (data) {
        const plots = [
          {
            x: [],
            y: [],
            text: [],
            opacity: 0.8,
            mode: "markers",
            type: "scatter",
            hoverinfo: "text",
            name: "Baseline",
            marker: {
              size: 5,
              color: "black",
              symbol: "circle",
            },
          },
          {
            x: [
              // 1.01,
              // 1.0,
              // 1.0,
              // 1.02,
              // 1.2,
              // 1.0,
              // 1.4
            ],
            y: [],
            text: [],
            mode: "markers",
            type: "scatter",
            hoverinfo: "text",
            marker: {
              size: 5,
              color: "#74bff9",
              symbol: "square",
            },
            name: "1um",
          },
        ];
        const lineSkeleton = {
          x: [],
          y: [],
          mode: "line",
          marker: {
            size: 0.1,
            color: "black",
            symbol: "square",
          },
          showlegend: false,
          line: {
            width: 2,
          },
          text: [],
          hoverinfo: "text",
        };
        const [xaxis, yaxis, categories] =
          data?.doc?.roots[0]?.attributes?.renderers[0]?.attributes?.data_source
            ?.attributes?.data?.entries;
        const attributes = data?.doc?.roots[0]?.attributes?.renderers;
        const [xMin, xMax] = data?.xaxis_range;
        const [yMin, yMax] = data?.yaxis_range;
        setYAxisMinRange(yMin);
        setYAxisMaxRange(yMax);
        setXAxisMinRange(xMin);
        setXAxisMaxRange(xMax);
        const middleLineData = [];

        let error_lineData = attributes?.reduce((acc, value) => {
          const errorPlotData = { ...lineSkeleton };
          const { x0, x1, y0, y1 } = value?.attributes?.glyph?.attributes;
          const [x, y, tick] =
            value?.attributes?.data_source?.attributes?.data?.entries || [];
          if (y?.[0] === "mean_y") {
            setTickText([...tick[1]]);
            setTickVals(x[1].map((value) => value));
            const baselineX = x[1][0];
            const baselineY = y[1][0];
            const umX = x[1][1];
            const umY = y[1][1];

            const baselineX1 = [
              baselineX - middleLineLimit,
              baselineX + middleLineLimit,
            ];
            const umX1 = [umX - middleLineLimit, umX + middleLineLimit];
            const baselineMiddle = Object.assign(
              {},
              { ...lineSkeleton },
              { x: baselineX1, y: [baselineY, baselineY] }
            );
            const umMiddle = Object.assign(
              {},
              { ...lineSkeleton },
              { x: umX1, y: [umY, umY] }
            );
            middleLineData.push(baselineMiddle);
            middleLineData.push(umMiddle);
          }
          if (
            x0?.type === "value" &&
            x1?.type === "value" &&
            y1?.type === "value" &&
            y0?.type === "value"
          ) {
            errorPlotData.x = [x0?.value, x1?.value];
            errorPlotData.y = [y0?.value, y1?.value];
          }
          if (errorPlotData.x.length) {
            acc.push(errorPlotData);
          }
          return acc;
        }, []);

        let baselineData = categories[1].reduce((acc, value, idx) => {
          if (value === "Baseline") {
            acc[0]?.x?.push(xaxis[1][idx]);
            acc[0]?.y?.push(yaxis[1][idx]);
            acc[0]?.text?.push(`${value}: ${yaxis[1][idx]}`);
          } else {
            acc[1]?.x.push(xaxis[1][idx]);
            acc[1]?.y.push(yaxis[1][idx]);
            acc[1]?.text.push(`${value}: ${yaxis[1][idx]}`);
          }
          return acc;
        }, plots);

        const linePlots = error_lineData?.reduce((acc, value, idx) => {
          let linePlotsData = { ...lineSkeleton };
          if (idx % 2 === 0) {
            const middleValue = (value?.x[0] + value?.x[1]) / 2;
            linePlotsData.x = [middleValue, middleValue];
            linePlotsData.y = [value?.y[0], error_lineData[idx + 1]?.y[0]];
            acc.push(linePlotsData);
          }
          return acc;
        }, []);
        setGraphPlots([
          ...baselineData,
          ...error_lineData,
          ...linePlots,
          ...middleLineData,
        ]);
      }
    } catch (error) {
      console.error("Error fetching Bokeh plot data:", error);
    }
  }, [data]);

  const baselineLayout = {
    xaxis: {
      tickvals: tickvals,
      ticktext: ticktext,
      showticklabels: true,
      range: [xAxisMinRange, xAxisMaxRange],
    },
    yaxis: {
      rangemode: "tozero",
      range: [yAxisMinRange, yAxisMaxRange],
    },
    hovermode: "closest",
    hoverinfo: "text",
    height: height,
    width: width,
    legend: legend,
    margin: margin,
  };
  const config = {
    displayModeBar: false,
  };

  const onChangeBaselineColor = (color) => {
    const baselinePlots = [...graphPlots];
    baselinePlots[0].marker.color = color;
    setGraphPlots(baselinePlots);
  };
  const onChangeμMColorColor = (color) => {
    const umPlots = [...graphPlots];
    umPlots[1].marker.color = color;
    setGraphPlots(umPlots);
  };
  return (
    <Box sx={{ display: "flex" }}>
      {hasForm ? (
        <FilterGraph
          step="0.5"
          yAxisMinRange={yAxisMinRange}
          setYAxisMinRange={setYAxisMinRange}
          yAxisMaxRange={yAxisMaxRange}
          setYAxisMaxRange={setYAxisMaxRange}
          xAxisMinRange={xAxisMinRange}
          setXAxisMinRange={setXAxisMinRange}
          xAxisMaxRange={xAxisMaxRange}
          setXAxisMaxRange={setXAxisMaxRange}
          onChangeBaselineColor={onChangeBaselineColor}
          onChangeμMColorColor={onChangeμMColorColor}
          title="Conduction Velocity"
        />
      ) : null}
      {graphPlots ? (
        <Plots data={graphPlots} layout={baselineLayout} config={config} />
      ) : (
        <div>Loading....</div>
      )}
    </Box>
  );
};

BohekGraph.defaultProps = {
  height: 220,
  width: 220,
  legend: {
    x: 0,
    y: 1.05,
    xanchor: "left",
    yanchor: "bottom",
  },
  margin: {
    l: 40,
    r: 40,
    t: 10,
  },
  hasForm: false,
};

export default BohekGraph;
