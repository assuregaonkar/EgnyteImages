import React from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Tabs, Tab, Container, Typography } from "@mui/material";
import Title from "../../components/title/title";
import { useState } from "react";
import Experiment from "./tabs/experiment";
import "./index.css";
import Header from "../../components/header";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, pl: 0 }}>{children}</Box>}
    </div>
  );
}

const ExperimentPage = ({ id, tabs }) => {
  const [value, setValue] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const experimentId = searchParams.get("id");

  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Header />
      <Title title={`My Experiments ${experimentId}`} weight={600} />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleOnChange}
          aria-label="basic tabs example"
        >
          {tabs.map((value, idx) => {
            value = idx === 0 ? `${value} ${experimentId}` : value;
            return <Tab key={value} label={value} />;
          })}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Experiment />
      </CustomTabPanel>
    </Container>
  );
};

ExperimentPage.defaultProps = {
  id: "2624",
  tabs: [
    "Experiment",
    "Tissue Summary",
    "Notes",
    "Linked Experiments",
    "Phase Images",
  ],
};
export default ExperimentPage;
