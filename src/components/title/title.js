import React from "react";
import { Box, Typography } from "@mui/material";
import ToolTip from "../tooltip";
const Title = ({ size, title, hasTooltip, weight, subHeading, justifyContent }) => {
  return (
    <Box
      sx={{
        fontSize: size,
        fontWeight: weight,
        // marginTop: "1rem",
        display: "flex",
        alignItems: "baseline",
        justifyContent: {justifyContent}
      }}
      level="h1"
    >
      <Typography textTransform='none' fontWeight={weight} fontSize={size} mb={1} variant="button">
        {title}
      </Typography>
      {subHeading && (
        <Typography fontSize='small' ml={1} variant="caption">
          {subHeading}
        </Typography>
      )}
      {hasTooltip && <ToolTip />}
    </Box>
  );
};

Title.defaultProps = {
  title: "Experiment",
  size: 'small',
  hasTooltip: false,
  weight: 600,
  justifyContent: 'flex-start'
  // subHeading: "Last update 3hrs ago",
};
export default Title;
