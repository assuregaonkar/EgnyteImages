import React from "react";
import { Box, Typography } from "@mui/material";
import ToolTip from "../tooltip";
const Title = ({ size, title, hasTooltip, weight, subHeading }) => {
  return (
    <Box
      sx={{
        fontSize: size,
        fontWeight: weight,
        marginTop: "1rem",
        display: "flex",
        alignItems: "baseline",
      }}
      level="h1"
    >
      <Typography mb={1} variant="button">
        {title}
      </Typography>
      {subHeading && (
        <Typography ml={1} variant="caption">
          {subHeading}
        </Typography>
      )}
      {hasTooltip && <ToolTip />}
    </Box>
  );
};

Title.defaultProps = {
  title: "Experiment",
  size: 15,
  hasTooltip: false,
  weight: 500,
  // subHeading: "Last update 3hrs ago",
};
export default Title;
