import React, { useEffect, useState } from "react";
import { Container, Box, Select, MenuList, Input, Paper } from "@mui/material";
import Title from "../../../components/title/title";
import RactTable from "../../../components/table";
import "./index.css";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { colums } from "./constant";
import Carousel from "../../../components/carousel";

const Experiment = ({ experimentStates }) => {
  const [prints, setPrints] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [printRow, setPrintRow] = useState([
    {
      id: "#",
      date: "2013-01-08",
      geomentry: "Initial State",
      fixture: "Initial State",
      cm_name: "Initial State",
      cf_name: "Initial State",
    },
  ]);
  const [tissueRow, setTissueRow] = useState([
    {
      id: "#",
      date: "2013-01-08",
      geomentry: "Initial State",
      fixture: "Initial State",
      cm_name: "Initial State",
      cf_name: "Initial State",
    },
  ]);
  const [fixRow, setFixRow] = useState([
    {
      id: "#",
      date: "2013-01-08",
      geomentry: "Initial State",
      fixture: "Initial State",
      cm_name: "Initial State",
      cf_name: "Initial State",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchPlotlyData = [
        fetch("http://localhost:5000/calcium_trace_10s"),
        fetch("http://localhost:5000/normalized_calcium_trace_1s"),
        fetch("http://localhost:5000/f0_calcium_trace_1"),
        fetch("http://localhost:5000/normalized_beat_frequency"),
        fetch("http://localhost:5000/beat_frequency"),
        fetch("http://localhost:5000/normalized_calcium_amplitude"),
      ];

      const fetchBohekData = [
        fetch("http://127.0.0.1:5000/verapamil_calcium_trace"),
        fetch("http://127.0.0.1:5000/verapamil_normalized"),
      ];
      try {
        const bohekResponse = await Promise.all(fetchBohekData);
        const bohekData = await Promise.all(
          bohekResponse.reduce((acc, response) => {
            if (response.status === 200) {
              acc.push(response.json());
            }
            return acc;
          }, [])
        );

        const plotlyResponse = await Promise.all(fetchPlotlyData);
        const plotlyData = await Promise.all(
          plotlyResponse.reduce((acc, response) => {
            if (response.status === 200) {
              acc.push(response.json());
            }
            return acc;
          }, [])
        );

        setGraphData([...bohekData, ...plotlyData]);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handlePrintRow = () => {
    const row = [...printRow];
    const copyOfLastRow = row[row.length - 1];
    setPrintRow([...row, { ...copyOfLastRow }]);
  };

  const handleTissueRow = () => {
    const row = [...tissueRow];
    const copyOfLastRow = row[row.length - 1];
    setTissueRow([...row, { ...copyOfLastRow }]);
  };
  const handlerFixRow = () => {
    const row = [...fixRow];
    const copyOfLastRow = row[row.length - 1];
    setFixRow([...row, { ...copyOfLastRow }]);
  };
  return (
    <React.Fragment>
      <Container className="experience-tab-container" sx={{ paddingLeft: 0 }}>
        <Box className="experience-details">
          <Title title="Experiment Link" />
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value="initial_state"
            label="Initial State"
            onChange={() => {}}
            sx={{ border: "1px solid #757A87", borderRadius: "2px" }}
          >
            {experimentStates.map(({ label, value }) => (
              <MenuList value={label}>{value}</MenuList>
            ))}
          </Select>
        </Box>
        <Box className="experience-details">
          <Title title="Prints" />
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Input
              type="text"
              value={prints}
              onChange={(e) => setPrints(e.target.value)}
              sx={{
                border: "1px solid black",
                borderRadius: "2px",
                padding: "4px",
                width: "55px",
                height: "32px",
                padding: "14px 12px 14px 16px",
                borderRadius: "2px",
                border: "1px solid #757A87",
                gap: "8px",
              }}
              disableUnderline={true}
            />
            <SaveOutlinedIcon sx={{ fontSize: 35 }} />
          </Box>
        </Box>
        <Box>
          <Title title="Graph" />
          <Box>
            <div className="graph-container">
              <Carousel data={graphData} />
            </div>
          </Box>
        </Box>
        <Box>
          <Title title="Prints" />
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <RactTable
              colums={colums}
              showPager={false}
              onRowAdd={handlePrintRow}
              rows={printRow}
              isExpandable={true}
            />
          </Box>
        </Box>
        <Box>
          <Title title="Tissue Summary" />
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <RactTable
              colums={colums}
              showPager={false}
              rows={tissueRow}
              onRowAdd={handleTissueRow}
              isExpandable={true}
            />
          </Box>
        </Box>
        <Box>
          <Title title="Fix Table" />
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <RactTable
              colums={colums}
              showPager={false}
              rows={fixRow}
              onRowAdd={handlerFixRow}
              isExpandable={true}
            />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

Experiment.defaultProps = {
  experimentStates: [
    {
      value: "Initial State",
      label: "initial_state",
    },
    {
      value: "Completed State",
      label: "completed_state",
    },
    {
      value: "In Progress State",
      label: "in_progress_state",
    },
  ],
};
export default Experiment;
