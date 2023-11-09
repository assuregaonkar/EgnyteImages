import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const ExperimentPage = ({ id, tabs }) => {
  const [value, setValue] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const experimentId = searchParams.get("id");
  const [experiment] = useSelector((state) =>
    state.activeExperiment.experiment.filter(
      (value) => value.exp_id === experimentId
    )
  );
  const [experimentDetails, setExperimentDetails] = useState({});
  useEffect(() => {
    const fetchExperiment = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/experiment_details/${experimentId}`
        );
        const data = await response.json();
        setExperimentDetails(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExperiment();
  }, []);
  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Title title={`My Experiments ${experimentId}`} size="large" />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleOnChange}
            aria-label="basic tabs example"
          >
            {tabs.map((value, idx) => {
              value = idx === 0 ? `${value} ${experimentId}` : value;
              return (
                <Tab
                  sx={{
                    fontSize: "0.875rem",
                    color: "#000000",
                    textTransform: "none",
                  }}
                  key={value}
                  label={value}
                />
              );
            })}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Experiment experimentDetails={experimentDetails} experimentId={experimentId} />
        </CustomTabPanel>
      </Container>
    </React.Fragment>
  );
};

ExperimentPage.defaultProps = {
  tabs: [
    "Experiment",
    "Tissue Summary",
    "Notes",
    "Linked Experiments",
    "Phase Images",
  ],
};
export default ExperimentPage;
