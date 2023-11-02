import React from "react";
import "./index.css";
const FilterGraph = ({
  minX,
  maxX,
  minY,
  maxY,
  step,
  yAxisMinRange,
  setYAxisMinRange,
  yAxisMaxRange,
  setYAxisMaxRange,
  xAxisMinRange,
  setXAxisMinRange,
  xAxisMaxRange,
  setXAxisMaxRange,
  onChangeBaselineColor,
  onChangeμMColorColor,
  title,
  ...props
}) => {
  return (
    <div className="aside-container">
      <h5>{title}</h5>
      <div className="color-container">
        <div>
          <div className="graph-category">Select first category</div>
          <label>Color</label>
          <input
            className="input-container"
            type="color"
            onChange={(e) => onChangeBaselineColor(e.target.value)}
          />
        </div>
        <div>
          <div className="graph-category">Select second category</div>
          <label>Color</label>
          <input
            className="input-container"
            type="color"
            onChange={(e) => onChangeμMColorColor(e.target.value)}
          />
        </div>
      </div>
      <div className="axis-container">
        {minY && (
          <div>
            <label>Y-axis min:</label>
            <input
              className="input-container"
              type="number"
              step={step}
              value={yAxisMinRange}
              onChange={(e) => setYAxisMinRange(e.target.value)}
            />
          </div>
        )}
        {maxY && (
          <div>
            <label>Y-axis max:</label>
            <input
              className="input-container"
              type="number"
              step={step}
              value={yAxisMaxRange}
              onChange={(e) => setYAxisMaxRange(e.target.value)}
            />
          </div>
        )}
        {minX && (
          <div>
            <label>X-axis min:</label>
            <input
              className="input-container"
              type="number"
              step={step}
              value={xAxisMinRange}
              onChange={(e) => setXAxisMinRange(e.target.value)}
            />
          </div>
        )}
        {maxX && (
          <div>
            <label>X-axis max:</label>
            <input
              className="input-container"
              type="number"
              step={step}
              value={xAxisMaxRange}
              onChange={(e) => setXAxisMaxRange(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

FilterGraph.defaultProps = {
  minY: true,
  maxY: true,
  minX: true,
  maxX: true,
  step: "0.5",
};

export default FilterGraph;
