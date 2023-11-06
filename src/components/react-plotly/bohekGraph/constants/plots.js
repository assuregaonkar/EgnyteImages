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

export { lineSkeleton, plots };
