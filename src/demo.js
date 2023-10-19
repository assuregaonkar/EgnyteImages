import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import Plotly from "plotly.js"

const Graph = () => {
  const [csvData, setCsvData] = useState(null);

  useEffect(() => {
    // Load your CSV data here
    Papa.parse("./assets/Verapamil Calcium Trace 10s.csv", {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function (result) {
        setCsvData(result.data);
      },
    });
  }, []);

  useEffect(() => {
    if (csvData) {
      // Extract data from the parsed CSV and create the Plotly graph
      const x = csvData.map((row) => row['Unnamed: 0']);
      const y1 = csvData.map((row) => row['0.1% DMSO ']);
      const y2 = csvData.map((row) => row['1 uM Verapamil ']);

      const trace1 = {
        x: x,
        y: y1,
        mode: 'lines',
        name: '0.1% DMSO ',
        line: { color: 'black' },
        connectgaps: true,
        line_shape: 'linear',
        hoverinfo: 'x+y',
      };

      const trace2 = {
        x: x,
        y: y2,
        mode: 'lines',
        name: '1 μM Verapamil ',
        line: { color: '#007acc' },
        connectgaps: true,
        line_shape: 'linear',
        hoverinfo: 'x+y',
      };

      const data = [trace1, trace2];

      const layout = {
        xaxis: {
          title: 'Time (s)',
          showline: true,
          range: [0, 10],
          linecolor: 'black',
          linewidth: 2,
          dtick: 5,
        },
        yaxis: {
          title: 'Fluorescence (AU)',
          showline: true,
          range: [300, 600],
          linecolor: 'black',
          linewidth: 2,
          dtick: 100,
        },
        plot_bgcolor: 'white',
      };

      const fig = {
        data: data,
        layout: layout,
        width: 800,
        height: 600,
      };

      // Render the Plotly chart
      Plotly.newPlot('graph', fig);
    }
  }, [csvData]);

  return (
    <div>
      <div id="graph"></div>
    </div>
  );
};

export default Graph;