import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function BreadcrumbsWithSeparator({ separator, items }) {
  return (
    <Breadcrumbs separator={separator} sx={{my:1}}>
      {items.map((item, index) => (
        <Link
          key={index}
          underline="hover"
          color={index === items.length - 1 ? "textPrimary" : "inherit"}
          to={item.link}
        >
          {item.label}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

BreadcrumbsWithSeparator.propTypes = {
  separator: PropTypes.node, // Node that can be a React element
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

BreadcrumbsWithSeparator.defaultProps = {
  separator: <NavigateNextIcon fontSize="small" />,
};

export default BreadcrumbsWithSeparator;
