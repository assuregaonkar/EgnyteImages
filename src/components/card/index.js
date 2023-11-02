import { Card as MUICard, CardContent, Box, Button } from "@mui/material";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import "./index.css";
const Card = ({ isShowExpand, width, height, children, title }) => {
  return (
    <Box sx={{ boxShadow: "0px 4px 4px 0px #26262633" }}>
      <MUICard sx={{ width: width, height: height }}>
        <Box p={0}>
          <CardContent>
            {isShowExpand && (
              <Box sx={{ position: "relative" }}>
                {title}
                <Button
                  sx={{ position: "absolute", zIndex: "modal", right: 0 }}
                  className="fullscreen-expand"
                >
                  <FullscreenExitIcon sx={{ color: "#000000" }} />
                </Button>
              </Box>
            )}
            {children}
          </CardContent>
        </Box>
      </MUICard>
    </Box>
  );
};

Card.defaultProps = {
  isShowExpand: true,
  width: 250,
  height: 230,
};
export default Card;
