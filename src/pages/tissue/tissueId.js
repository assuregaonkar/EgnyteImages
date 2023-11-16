import * as React from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import { CalciumTrace } from "./calciumTrace";
import Header from "../../components/header";
import MicroscopyImagesContent from "./microscopyImage";
import CustomTabs from "../../components/Tabs1/tabs";
import BreadcrumbsWithSeparator from "../../components/Breadcrumbs/Breadcrumbs";

const StyledTypography = styled(Typography)`
  text-decoration: underline;
`;

const TissueId = () => {
  const [value, setValue] = useState("one");

  const images = [
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 1",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/1a34/ab91/68a74c3802ac91ec3a2a710d46554b10?Expires=1700438400&Signature=B777GiW2HBZBSScYzQwBam3o9dNaNZsalEY8Sfud82W1Op-Y6EahTYEihIiCfkn0x2Iy5fE9LoabDd3lbcpKOmZsepRcZIWdjbNcyk6HuRlQDBXygwwoUv0BAlSEPdCtvriadrq~fSHNa6AUgyZjpywVPX5eibReDfOuxJBmZ2JoJWAW4lc2aelZd38K6yTBjEuZKNeu6Js6So2UpI-c2y6HBXaf2~tWq7LVIs3C7E9fG-kqinPGL4gbt--2hEQsiM8~NVEwMWN6QDXKfK41PCN465z4bR-mB7Y3XcwKkdpU9w15WWA92SwJ3wzqP~WsWZ56Gkr9YA-2LfKbxGqHPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 2",
    },
    {
      url: "calciumvideos/honey.mp4",
      title: "Day 2",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 3",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/1a34/ab91/68a74c3802ac91ec3a2a710d46554b10?Expires=1700438400&Signature=B777GiW2HBZBSScYzQwBam3o9dNaNZsalEY8Sfud82W1Op-Y6EahTYEihIiCfkn0x2Iy5fE9LoabDd3lbcpKOmZsepRcZIWdjbNcyk6HuRlQDBXygwwoUv0BAlSEPdCtvriadrq~fSHNa6AUgyZjpywVPX5eibReDfOuxJBmZ2JoJWAW4lc2aelZd38K6yTBjEuZKNeu6Js6So2UpI-c2y6HBXaf2~tWq7LVIs3C7E9fG-kqinPGL4gbt--2hEQsiM8~NVEwMWN6QDXKfK41PCN465z4bR-mB7Y3XcwKkdpU9w15WWA92SwJ3wzqP~WsWZ56Gkr9YA-2LfKbxGqHPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 4",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 5",
    },

    {
      url: "calciumvideos/Aquarium.mp4",
      title: "Day 6",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/1a34/ab91/68a74c3802ac91ec3a2a710d46554b10?Expires=1700438400&Signature=B777GiW2HBZBSScYzQwBam3o9dNaNZsalEY8Sfud82W1Op-Y6EahTYEihIiCfkn0x2Iy5fE9LoabDd3lbcpKOmZsepRcZIWdjbNcyk6HuRlQDBXygwwoUv0BAlSEPdCtvriadrq~fSHNa6AUgyZjpywVPX5eibReDfOuxJBmZ2JoJWAW4lc2aelZd38K6yTBjEuZKNeu6Js6So2UpI-c2y6HBXaf2~tWq7LVIs3C7E9fG-kqinPGL4gbt--2hEQsiM8~NVEwMWN6QDXKfK41PCN465z4bR-mB7Y3XcwKkdpU9w15WWA92SwJ3wzqP~WsWZ56Gkr9YA-2LfKbxGqHPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 6",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 7",
    },

    {
      url: "calciumvideos/flowers.mp4",
      title: "Day 7",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/1a34/ab91/68a74c3802ac91ec3a2a710d46554b10?Expires=1700438400&Signature=B777GiW2HBZBSScYzQwBam3o9dNaNZsalEY8Sfud82W1Op-Y6EahTYEihIiCfkn0x2Iy5fE9LoabDd3lbcpKOmZsepRcZIWdjbNcyk6HuRlQDBXygwwoUv0BAlSEPdCtvriadrq~fSHNa6AUgyZjpywVPX5eibReDfOuxJBmZ2JoJWAW4lc2aelZd38K6yTBjEuZKNeu6Js6So2UpI-c2y6HBXaf2~tWq7LVIs3C7E9fG-kqinPGL4gbt--2hEQsiM8~NVEwMWN6QDXKfK41PCN465z4bR-mB7Y3XcwKkdpU9w15WWA92SwJ3wzqP~WsWZ56Gkr9YA-2LfKbxGqHPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 8",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 9",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 10",
    },
    {
      url: "calciumvideos/flowers.mp4",
      title: "Day 10",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 10",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/968e/ba85/0f5d24ac7e6fd7b9758c5946916b6d4d?Expires=1700438400&Signature=LaK1vBI0N4RJIhBZl0Fw4ryXFxLHRenOAo4-u0mie-L3zeMA8Ub2qvjn3VbKwzoso54t974zNzpYpbmAGqMmmxNQpwwZYsSOVQpu4p1sM1auAMenfsDKIgteBOU-5OxRKkethRipCW1d8QlrKlV-IZs0UcGQHnxomoHK-PLj7S7Vsm-wXhGp4ksuYxBEuMzQNtmfy9Ke2b5hZWNwi2GeNNsHslQ07lGhl5y3Gn8TxSS6tNiNyc9JMQ01axRkBOJ2B-QIJb2d-vrNEu8BB5BQLCFO-ciTx3MuVahz9wde5lF47LJocO8yHSNUzkl6G8SnXwDHVoNM-j8FEUnkrQ3wEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Day 11",
    },
  ];
  const breadcrumbsItems = [
    { link: "/experiment/1111?id=1111", label: "Experiment 24512" },
    { link: "/experiment/230907P1T4", label: "230907P1T4" },
  ];
  const tabs = [
    { label: "Microscopy Images", value: "one" },
    { label: "Calcium Trace", value: "two" },
  ];
  return (
    <>
      <Container maxWidth={"xl"}>
        <Header />
        <BreadcrumbsWithSeparator items={breadcrumbsItems} />
        <Divider sx={{ my: 1 }} />
        <StyledTypography sx={{ my: 1 }}>230907P1T4</StyledTypography>
        <Grid
          container
          spacing={2}
          display={"flex"}
          gap={"4rem"}
          sx={{ my: 1 }}
          alignItems={"flex-start"}
        >
          <Grid
            item
            display="flex"
            flexDirection="row"
            gap={"4rem"}
            alignItems={"flex-start"}
          >
            <Grid item display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Status
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Finish date
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Post-Post Distance
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Treatment
              </Typography>
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                In Culture
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                NA
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                In Culture
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                NA
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="row"
            gap={"4rem"}
            alignItems={"flex-start"}
          >
            <Grid item display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Failure mode
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Days in culture
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Geometry
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Comments
              </Typography>
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"} gap={"1.6rem"}>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                NA
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                5
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Thick
              </Typography>
              <TextField size="small" multiline />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button
                variant="outlined"
                style={{
                  color: "#1976D2",
                  borderColor: "black",
                  backgroundColor: "#FFFFFF",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "#1976D2",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CustomTabs tabs={tabs} defaultTab={value} onTabChange={setValue} />
        </Box>
        {value === "one" && <MicroscopyImagesContent images={images} />}
        {value === "two" && <CalciumTrace />}
      </Container>
    </>
  );
};

export default TissueId;
