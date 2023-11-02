import React, { useState } from "react";
import { Button, TextField, Box, InputAdornment } from "@mui/material";
import Modal from "../../components/modal";

const getDate = () => {
  let date = new Date();
  let month = date.getMonth() + 1;
  if (month.toString().length == 1) {
    month = `0${month}`;
  }

  return `${date.getFullYear()}-${month}-0${date.getDate()}`;
};
const newRow = {
  exp_id: "",
  title: "",
  startDate: getDate(),
  endDate: "-",
  collabarators: "-",
  print: "-",
  exp_link: "-",
  isEditable: true,
};
const NewExperiment = ({ handleSave }) => {
  const [modalToggle, setModalToggle] = useState(false);
  const [expDetails, setExpDetails] = useState(newRow);

  const handleOnChange = (e) => {
    const tableRow = { ...expDetails };
    tableRow[e.target.name] = e.target.value;
    setExpDetails(tableRow);
  };

  const onSaveExperiment = () => {
    if (expDetails.exp_id && expDetails.startDate && expDetails.title) {
      handleSave(expDetails);
      setExpDetails(newRow);
      setModalToggle(false);
    }
  };
  return (
    <Box>
      <Button variant="contained" onClick={() => setModalToggle(true)}>
        Create New Experiment
      </Button>
      <Modal isOpen={modalToggle} onClose={() => setModalToggle(false)}>
        <Box className="new-experiment-form">
          <TextField
            label="Experiment Id"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Exp_</InputAdornment>
              ),
            }}
            name="exp_id"
            onChange={(e) => handleOnChange(e)}
          />
          <TextField
            label="Experiment Title"
            size="small"
            name="title"
            onChange={(e) => handleOnChange(e)}
          />
          <TextField
            label="Start Date"
            type="date"
            value={expDetails.startDate}
            defaultValue={getDate()}
            size="small"
            name="startDate"
            onChange={(e) => handleOnChange(e)}
          />
          <TextField
            label="Experiment Link"
            size="small"
            name="exp_link"
            onChange={(e) => handleOnChange(e)}
          />

          <Button onClick={() => onSaveExperiment()}>Save</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default NewExperiment;
