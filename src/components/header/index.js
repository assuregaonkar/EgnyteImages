import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import "./index.css";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: "0px 1px 0px 0px #C9C9C9" }}>
        <Toolbar variant="dense" sx={{ backgroundColor: "#ffffff" }}>
          <Box>
            <img className="x360-navigarion-logo" src="logo192.png"></img>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                boxShadow: "1px 0px 0px 0px #00000040 inset",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <SettingsOutlinedIcon sx={{ color: "#000000" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: {
                // xs: "none",
                // md: "flex",
                boxShadow: "1px 0px 0px 0px #00000040 inset",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsOutlinedIcon sx={{ color: "#000000" }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
