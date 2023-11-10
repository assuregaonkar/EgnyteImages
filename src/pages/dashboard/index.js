import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../components/title/title";
import RactTable from "../../components/table";
import Header from "../../components/header";
// import NewExperiment from "../newExperiment";
import "./index.css";
import { activeExperiment } from "../../reducer/action";
import { Link } from "react-router-dom";

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
    key: "dye_info",
  },
  {
    label: "Start Date",
    type: "label",
    key: "start_date",
  },
  {
    label: "Print Date",
    type: "label",
    key: "print_date",
  },
  {
    label: "End Date",
    type: "label",
    key: "end_date",
  },
  {
    label: "Collabarators",
    type: "label",
    key: "collabarators",
  },
  {
    label: "Print",
    type: "label",
    key: "prints",
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
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1112",
    title: "dasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1113",
    title: "casd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1114",
    title: "rasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1115",
    title: "isd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1116",
    title: "odasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1111",
    title: "pdasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1117",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1118",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "1119",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
  },
  {
    exp_id: "1110",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
    isEditable: true,
  },
  {
    exp_id: "11",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
  },
  {
    exp_id: "12",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
  },
  {
    exp_id: "13",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
  },
  {
    exp_id: "114",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
  },
  {
    exp_id: "15",
    title: "aadasd",
    dye: "xyz",
    start_date: "2013-01-08",
    print_date: "2013-01-08",
    end_date: "2013-01-18",
    collabarators: "joe",
    prints: 2,
    exp_link: "link",
  },
];
const Dashboard = () => {
  const [tableRows, setTableRows] = useState(rows);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchExperiment = async()=>{
      const response = await fetch('http://127.0.0.1:5000/experiment_details');
      const data = await response.json()
      dispatch(activeExperiment(data));
    }
    fetchExperiment()
    
  }, []);

  const experiment = useSelector((state) => state.activeExperiment.experiment);

  // const handleSave = (data) => {
  //   const tableRow = [...experiment];
  //   tableRow.unshift(data);
  //   dispatch(activeExperiment(tableRow));
  //   // setTableRows(tableRow);
  // };
  return (
    <Container>
      <Header />
      <Box>
        <Title
          title="Dashboard"
          hasTooltip={true}
          subHeading="Last update 3hrs ago"
          size='large'
        />
      </Box>
      <hr />
      <Box>
        <div className="dashboard-heading">
          <Title title="Experiments" size='large'/>
          <Link to='/add-new-experiment' >Add New Experiment</Link>
        </div>
        <Box>
          <RactTable rows={experiment} colums={colums} />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
