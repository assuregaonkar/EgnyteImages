import React from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import styled from "styled-components";
import backGroundimage from "../login/lab.jpeg";
import logo from "../login/applogo.jpg";
import { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledGrid = styled(Grid)`
  height: 100vh;
  display: flex;
`;

const LeftContainer = styled.div`
  position: relative;
  flex: 1;
  background-image: url(${backGroundimage});
  background-position: 50% 50%;
  background-size: cover;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BlueText = styled.span`
  color: #008ae5;
  font-family: Stardos Stencil;
  font-style: normal;
  font-size: 60px;
`;

const BlackText = styled.span`
  color: black;
  font-family: Ruda;
  font-size: 60px;
`;
const WhiteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(237, 237, 237, 0.9);
`;
const NewImage = styled.img`
  width: 80px; /* Adjust the width as needed */
  height: auto;
`;

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loginButtonEnabled, setLoginButtonEnabled] = useState(false);

  useEffect(() => {
    if (emailid.trim() !== "" && password.trim() !== "") {
      setLoginButtonEnabled(true);
    } else {
      setLoginButtonEnabled(false);
    }
  }, [emailid, password]);

  const navigate = useNavigate();
  // const handleLogin = async () => {
  //   const response = await fetch("http://127.0.0.1:5000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ emailid, password }),
  //   });
  //   console.log("response", response);
  //   if (response.status === 200) {
  //     setMessage("Logged in");
  //   } else {
  //     setMessage("Login failed");
  //   }
  // };
  const handleLogin = () => {
    navigate("/dashboard")
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <StyledGrid container spacing={0}>
      <LeftContainer>
        <WhiteOverlay>
          <CenteredBox>
            <Box display={"flex"}>
              <NewImage src={logo} />
              <Typography variant="h4">
                <BlueText>X</BlueText>
                <BlackText>360</BlackText>
              </Typography>
            </Box>
          </CenteredBox>
        </WhiteOverlay>
      </LeftContainer>
      <RightContainer>
        <Typography
          variant="h5"
          fontFamily={"sans-serif"}
          style={{ marginBottom: "20px", fontWeight:'500' }}
        >
          Log in
        </Typography>
        <Grid container direction={"column"} alignItems={"center"}>
          <Grid display={"flex"} alignItems={"center"} sx={{ width: "60%" }}>
            <Typography variant="subtitle2" color="#666666">
              Your email
            </Typography>
          </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
            sx={{ width: "60%" }}
          />

          <Grid
            display={"flex"}
            alignItems={"center"}
            gap={"57%"}
            sx={{ width: "60%" }}
          >
            <Typography variant="subtitle2" color="#666666">
              Your password
            </Typography>
            <Grid display={"flex"} alignItems={"center"}>
              <Button
                onClick={togglePasswordVisibility}
                style={{ color: "#666666" }}
              >
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </Button>
              <Typography variant="subtitle2" color="#666666">
                {passwordVisible ? "Hide" : "Show"}
              </Typography>
            </Grid>
          </Grid>
          <TextField
            type={passwordVisible ? "text" : "password"}
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "60%" }}
          />
          <Button
            variant="contained"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "40px",
              width: "60%",
              opacity: loginButtonEnabled ? null : "0.25",
              background: loginButtonEnabled ? "#111" : "#111",
              color: loginButtonEnabled ? "white" : "#666666",
              textTransform: "none",
            }}
            onClick={handleLogin}
            disabled={!loginButtonEnabled}
          >
            Login
          </Button>

          {message}
        </Grid>
      </RightContainer>
    </StyledGrid>
  );
};

export default LoginForm;
