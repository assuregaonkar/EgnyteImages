import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Select,
  MenuList,
  Input,
  Button,
  Grid,
} from "@mui/material";
import Title from "../../../components/title/title";
import RactTable from "../../../components/table";
import "./index.css";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { printColums, tissueColums, fixColumns } from "./constant";
import tableData from "../index.json";
import moment from "moment";
import GraphTabs from "./prints/graphs";
import ImagePhase from "./imagePhase";
import ImageTabs from "./prints/imagePhase";
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Experiment = ({ experimentDetails, experimentId }) => {
  const [prints, setPrints] = useState(experimentDetails.prints);
  const [printTableRows, setPrintTableRows] = useState([]);
  const [tissueTableRow, setTissueTableRow] = useState([]);
  const [fixTableRow, setFixTableRow] = useState([]);
  const [isPrintTableExpadned, setIsPrintTableExpanded] = useState(false);
  const [isTissueTableExpadned, setIsTissueTableExpanded] = useState(false);

  const Navigate = useNavigate()
  useEffect(() => {
    setPrints(experimentDetails.prints);
    // const tissueRow = getDefaultTissueRow();
    setTissueTableRow(tableData.tissue_row);
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
      printRow.date = experimentDetails.start_date;
      rows.push(printRow);
    }
    return rows;
  };
  // const getDefaultTissueRow = () => {
  //   const rows = [];
  //   const date = getTime(experimentDetails.start_date);
  //   const tissueRow = { ...tableData.tissue_row };
  //   tissueRow.id = `${date}T1P1`;
  //   tissueRow.date = experimentDetails.start_datedate;
  //   tissueRow.tissue_id = `${date}P1`;
  //   rows.push(tissueRow);
  //   return rows;
  // };
  return (
    <React.Fragment>
      <Container
        className="experience-tab-container"
        sx={{ marginTop: "1rem" }}
      >
        <div style={{ width: "68%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginBottom: "1rem" }}
          >
            <Grid item xs={2}>
              <Title
                justifyContent="flex-end"
                title="Experiment Title"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="experiment-information-small"
                value={experimentDetails.title}
                label="Initial State"
                onChange={() => {}}
                disabled={true}
                sx={{ borderRadius: "2px" }}
                disableUnderline={true}
              />
            </Grid>
            <Grid item xs={2}>
              <Title
                justifyContent="flex-end"
                title="Dev-Ops Link"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="experiment-information-small"
                value={experimentDetails.exp_link}
                label="Initial State"
                onChange={() => {}}
                disabled={true}
                sx={{ borderRadius: "2px" }}
                disableUnderline={true}
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginBottom: "1rem" }}
          >
            <Grid item xs={2}>
              <Title justifyContent="flex-end" title="Dyes" size="small" />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="experiment-information-small"
                value={experimentDetails.dye}
                label="Initial State"
                onChange={() => {}}
                disabled={true}
                sx={{ borderRadius: "2px" }}
                disableUnderline={true}
              />
            </Grid>
            <Grid item xs={2}>
              <Title justifyContent="flex-end" title="Date" size="small" />
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", gap: "0.5rem" }}>
              <Input
                id="experiment-information-small"
                value={experimentDetails.start_date}
                size="small"
                onChange={() => {}}
                type="date"
                className="sizeSmall"
                disableUnderline={true}
                disabled={true}
                sx={{ borderRadius: "2px" }}
              />
              <Input
                id="experiment-information-small"
                value={experimentDetails.end_date}
                size="small"
                // label="Initial State"
                onChange={() => {}}
                type="date"
                disableUnderline={true}
                disabled={true}
                sx={{ borderRadius: "2px" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginBottom: "1rem" }}
          >
            <Grid item xs={2}>
              <Title justifyContent="flex-end" title="Prints" size="small" />
            </Grid>
            <Grid item xs={4}>
              <Input
                type="text"
                value={prints}
                id="experiment-information-small"
                // onChange={(e) => setPrints(e.target.value)}
                disableUnderline={true}
                disabled={true}
              />
            </Grid>
          </Grid>
        </div>

        <Box>
          <Title title="The Graph" size="medium" />
          <GraphTabs />
        </Box>
        <Box>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <Title title="Prints" size="medium" />
              <Button
                variant="contained"
                sx={{textTransform:'none'}}
                onClick={() => {
                  Navigate(`../table-view?exp_id=${experimentDetails.exp_id}&query=print_table`);
                }}
              >
                Expand Table
              </Button>
            </Box>
            <RactTable
              colums={printColums}
              onRowAdd={handlePrintRow}
              rows={printTableRows}
              isExpandable={true}
              showAddMore={false}
            />
          </Box>
        </Box>
        <Box>
          
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <Title title="Tissue Summary" size="medium" />
              <Button
                variant="contained"
                sx={{textTransform:'none'}}
                onClick={() => {
                  Navigate(`../table-view?exp_id=${experimentDetails.exp_id}&query=tissue_table`);
                }}
              >
                Expand Table
              </Button>
            </Box>
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
          
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <Title title="Fix Table" size="medium" />
              <Button
                variant="contained"
                sx={{textTransform:'none'}}
                onClick={() => {
                  Navigate(`../table-view?exp_id=${experimentDetails.exp_id}&query=fix_table`);
                }}
              >
                Expand Table
              </Button>
            </Box>
            <RactTable
              colums={fixColumns}
              rows={fixTableRow}
              onRowAdd={handlerFixRow}
              isExpandable={true}
              showAddMore={false}
            />
          </Box>
        </Box>
        <Box>
          <Title title="Phase Images" size="medium" />
          <ImageTabs />
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
