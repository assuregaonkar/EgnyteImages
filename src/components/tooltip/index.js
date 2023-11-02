import React from "react";
import * as MuiIcons from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
const ToolTip = ({ title, placement, icon, size }) => {
  const Icon = MuiIcons[icon];
  return (
    <Tooltip title={title} placement={placement} arrow sx={{ fontSize: size }}>
      <Icon />
    </Tooltip>
  );
};

ToolTip.defaultProps = {
  title: "tooltip information",
  placement: "right-start",
  size: 15,
  icon: "InfoOutlined",
};
export default ToolTip;
