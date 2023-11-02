import { Chip } from "@mui/material";

const Lable = ({ text, color, variant }) => {
  return <Chip label={text} color={color} variant={variant} />;
};

Lable.defaultProps = {
  text: "success",
  color: "primary",
  variant: "outlined",
};
export default Lable;
