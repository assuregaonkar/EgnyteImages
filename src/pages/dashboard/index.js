import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../components/title/title";
import RactTable from "../../components/table";
import Header from "../../components/header";
import NewExperiment from "./newExperimentModal";
import "./index.css";
import { activeExperiment } from "../../reducer/action";

const colums = [
  {
    label: "Experiment Id",
    type: "link",
    key: "exp_id",
    prefix: "Exp_",
  },
  {
    label: "Experiment Title",
    type: "label",
    key: "title",
  },
  {
    label: "DYE",
    type: "label",
    key: "dye",
  },
  {
    label: "Start Date",
    type: "label",
    key: "startDate",
  },
  {
    label: "End Date",
    type: "label",
    key: "endDate",
  },
  {
    label: "Collabarators",
    type: "label",
    key: "collabarators",
  },
  {
    label: "Print",
    type: "label",
    key: "print",
  },
  {
    label: "Experiment Link",
    type: "label",
    key: "exp_link",
  },
];
const rows = [
  {
    exp_id: "1111",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1112",
    title: "dasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1113",
    title: "casd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1114",
    title: "rasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1115",
    title: "isd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1116",
    title: "odasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1111",
    title: "pdasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1117",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1118",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1119",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
  },
  {
    exp_id: "1110",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "11",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
  },
  {
    exp_id: "12",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
  },
  {
    exp_id: "13",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
  },
  {
    exp_id: "114",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
  },
  {
    exp_id: "15",
    title: "aadasd",
    dye: "xyz",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    exp_link: "link",
  },
];
const Dashboard = () => {
  const [tableRows, setTableRows] = useState(rows);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeExperiment(rows));
  }, []);

  const experiment = useSelector((state) => state.activeExperiment.experiment);

  const handleSave = (data) => {
    const tableRow = [...experiment];
    tableRow.unshift(data);
    dispatch(activeExperiment(tableRow));
    // setTableRows(tableRow);
  };
  return (
    <Container>
      <Header />
      <Box>
        <Title
          title="Dashboard"
          hasTooltip={true}
          subHeading="Last update 3hrs ago"
        />
      </Box>
      <hr />
      <Box>
        <div className="dashboard-heading">
          <Title title="Experiments" />
          <NewExperiment handleSave={handleSave} />
        </div>
        <Box>
          <RactTable rows={experiment} colums={colums} />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
