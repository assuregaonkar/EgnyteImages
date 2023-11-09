import React, { useEffect, useState } from "react";
import { Container, Box, Select, MenuList, Input, Button } from "@mui/material";
import Title from "../../../components/title/title";
import RactTable from "../../../components/table";
import "./index.css";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {
  printColums,
  tissueColums,
  fixColumns,
  images,
  videos,
} from "./constant";
import tableData from "../index.json";
import GraphCarousel from "./graphCarousel";
import ImagePhaseCarousel from "../../../components/carousel/imagePhase";
import moment from "moment";

const Experiment = ({ experimentDetails, experimentId }) => {
  const [prints, setPrints] = useState(experimentDetails.prints);
  const [printTableRows, setPrintTableRows] = useState([]);
  const [tissueTableRow, setTissueTableRow] = useState([]);
  const [fixTableRow, setFixTableRow] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);
  useEffect(() => {
    setPrints(experimentDetails.prints)
    const tissueRow = getDefaultTissueRow();
    setTissueTableRow(tissueRow);
  }, [experimentDetails]);

  useEffect(() => {
    const printRows = getDefaultPrintRow();
    setPrintTableRows([...printRows]);
  }, [prints]);

  const handlePrintRow = () => {
    const row = [...printTableRows];
    const copyOfLastRow = row[row.length - 1];
    setPrintTableRows([...row, { ...copyOfLastRow }]);
  };

  const handleTissueRow = () => {
    const row = [...tissueTableRow];
    const copyOfLastRow = row[row.length - 1];
    setTissueTableRow([...row, { ...copyOfLastRow }]);
  };
  const handlerFixRow = () => {
    const row = [...fixTableRow];
    const copyOfLastRow = row[row.length - 1];
    setFixTableRow([...row, { ...copyOfLastRow }]);
  };

  const getTime = (date) => {
    const time = new Date(date);
    return moment(time.getTime()).format("YYMMDD");
  };
  const getDefaultPrintRow = () => {
    const rows = [];
    const date = getTime(experimentDetails?.start_date);
    for (let i = 1; i <= prints; i++) {
      const printRow = { ...tableData.print_row };
      printRow.id = `${date}P${i}`;
      printRow.date =experimentDetails.start_date;
      rows.push(printRow);
    }
    return rows;
  };
  const getDefaultTissueRow = () => {
    const rows = [];
    const date = getTime(experimentDetails.start_date);
    const tissueRow = { ...tableData.tissue_row };
    tissueRow.id = `${date}T1P1`;
    tissueRow.date = experimentDetails.start_datedate;
    tissueRow.tissue_id = `${date}P1`;
    rows.push(tissueRow);
    return rows;
  };
  return (
    <React.Fragment>
      <Container className="experience-tab-container" sx={{ paddingLeft: 0 }}>
        <Box className="experience-details">
          <Title title="Experiment Link" size="small" />
          <Input
            id="demo-select-small"
            value={experimentDetails.exp_link}
            label="Initial State"
            onChange={() => {}}
            disabled={true}
            sx={{ border: "1px solid #757A87", borderRadius: "2px" }}
          />
        </Box>
        <Box className="experience-details">
          <Title title="Prints" size="small" />
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
          <Title title="Graph" size="medium" />
          <Box>
            <div className="graph-container">
              {/* <GraphCarousel /> */}
            </div>
          </Box>
        </Box>
        <Box>
          <Title title="Prints" size="medium" />
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <RactTable
              colums={printColums}
              onRowAdd={handlePrintRow}
              rows={printTableRows}
              isExpandable={true}
              showAddMore={true}
            />
          </Box>
        </Box>
        <Box>
          <Title title="Tissue Summary" size="medium" />
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <RactTable
              colums={tissueColums}
              rows={tissueTableRow}
              onRowAdd={handleTissueRow}
              isExpandable={true}
              showAddMore={true}
            />
          </Box>
        </Box>
        <Box>
          <Title title="Fix Table" size="medium" />
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <RactTable
              colums={fixColumns}
              rows={fixTableRow}
              onRowAdd={handlerFixRow}
              isExpandable={true}
              showAddMore={true}
            />
          </Box>
        </Box>
        <Box>
          <Title title="Phase Images" size="medium" />
          <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          {Array(14)
            .fill(1)
            .map((value, idx) => {
              return (
                <Button
                  key={idx}
                  sx={{
                    textTransform: "none",
                    color: selectedDay === idx ? "#ffffff" : "#000000",
                    flexDirection: "column",
                    borderRadius: "0.5rem",
                    background: "#E6E7E9",
                    padding: 0,
                    marginRight: "2rem",
                    minWidth: "41px",
                    bgcolor: selectedDay === idx && "#1976D2",
                  }}
                  onClick={() => {
                    setSelectedDay(idx);
                  }}
                  variant="contained"
                  disableRipple={true}
                >
                  <span>Day </span>
                  <span>{idx + 1}</span>
                </Button>
              );
            })}
        </Box>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <ImagePhaseCarousel sorce={selectedDay === 0 ? images : videos} />
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
