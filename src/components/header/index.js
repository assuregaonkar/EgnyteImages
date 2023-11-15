import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import KeyboardarrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./index.css";
import logo from "../../assets/OBJECTS 1.jpg";
import { Typography } from "@mui/material";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const BlueText = styled.span`
  color: #008ae5;
  font-family: Stardos Stencil;
  font-style: normal;
  font-size: 30px;
`;

const BlackText = styled.span`
  color: black;
  font-family: Ruda;
  font-size: 30px;
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const history = useHistory(); // Get the history object from react-router-dom

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // const handleLogout = () => {
  //   // Perform logout action (clear authentication, reset user state, etc.)
  //   // For example, you can use localStorage.clear() to clear authentication tokens.

  //   // Navigate to the login component
  //   history.push('/login');
  // };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: "0px 1px 0px 0px #C9C9C9" }}>
        <Toolbar variant="dense" sx={{ backgroundColor: "#ffffff" }}>
          <Box display={"flex"}>
            <Link to={"/dashboard"}>
              <img className="x360-navigarion-logo" src={logo}></img>
            </Link>
            <Typography variant="h4">
              <Link to={"/dashboard"}>
                <BlueText>X</BlueText>
                <BlackText>360</BlackText>
              </Link>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Box
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
          </Box> */}
          <Box>
            <IconButton size="large" onClick={handleClick}>
              <AccountCircleOutlinedIcon />
              <KeyboardarrowDownIcon  />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Paper>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <Link to={"/"}>
                    <MenuItem>Logout</MenuItem>
                  </Link>
                </MenuList>
              </Paper>
            </Popper>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
