import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import { Box } from "@mui/material";
import FilterGraph from "../../coordinateForm";

function ReactPlotlyGraph({
  hasForm,
  data,
  height,
  width,
  legend,
  config,
  margin,
}) {
  const [graphData, setGraphData] = useState({ data: [], layout: {} });
  const [lineColors, setLineColors] = useState(["red", "#007acc"]); // default colors
  const [maxX, setMaxX] = useState("");
  const [maxY, setMaxY] = useState("");
  const [minX, setMinX] = useState("");
  const [minY, setMinY] = useState("");
  let updatedData = [];
  let updatedLayout = [];
  if (data.data.length > 0) {
    updatedData = data.data.map((trace, index) => {
      return {
        ...trace,
        line: { ...trace.line, color: lineColors[index] },
      };
    });

    updatedLayout = { ...data.layout };

    // If minX,maxX,minY  or maxY are specified, update the layout with these values. Otherwise, revert to the original range.
    if (maxX !== "") {
      updatedLayout.xaxis = {
        ...updatedLayout.xaxis,
        range: [updatedLayout.xaxis.range[0], maxX],
      };
    }
    if (maxY !== "") {
      updatedLayout.yaxis = {
        ...updatedLayout.yaxis,
        range: [updatedLayout.yaxis.range[0], maxY],
      };
    }
    if (minX !== "") {
      updatedLayout.xaxis = {
        ...updatedLayout.xaxis,
        range: [minX, updatedLayout.xaxis.range[1]],
      };
    }
    if (minY !== "") {
      updatedLayout.yaxis = {
        ...updatedLayout.yaxis,
        range: [minY, updatedLayout.yaxis.range[1]],
      };
    }
    if (height) {
      updatedLayout.height = height;
    }
    if (width) {
      updatedLayout.width = width;
    }
    if (legend) {
      updatedLayout.legend = legend;
    }
    if (!hasForm) {
      updatedLayout.xaxis.title = null;
      updatedLayout.yaxis.title = null;
    }
    if (margin) {
      updatedLayout.margin = margin;
    }
  }

  const onChangeBaselineColor = (color) => {
    const linecolor = [...lineColors];
    linecolor[0] = color;
    setLineColors(linecolor);
  };
  const onChangeμMColorColor = (color) => {
    const linecolor = [...lineColors];
    linecolor[1] = color;
    setLineColors(linecolor);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {hasForm ? (
        <FilterGraph
          step="0.5"
          yAxisMinRange={minY}
          setYAxisMinRange={setMinY}
          yAxisMaxRange={maxY}
          setYAxisMaxRange={setMaxY}
          xAxisMinRange={minX}
          setXAxisMinRange={setMinX}
          xAxisMaxRange={maxX}
          setXAxisMaxRange={setMaxX}
          onChangeBaselineColor={onChangeBaselineColor}
          onChangeμMColorColor={onChangeμMColorColor}
          title="Conduction Velocity"
        />
      ) : null}
      <Plot data={updatedData} layout={updatedLayout} config={config} />
    </Box>
  );
}

ReactPlotlyGraph.defaultProps = {
  hasForm: false,
};
export default ReactPlotlyGraph;
