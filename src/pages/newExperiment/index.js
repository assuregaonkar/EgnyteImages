import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  InputAdornment,
  Grid,
  createFilterOptions,
  Autocomplete,
} from "@mui/material";
import Title from "../../components/title/title";
import "./index.css";
import moment from "moment";

const getDate = () => {
  let date = new Date();
  let month = date.getMonth() + 1;
  if (month.toString().length == 1) {
    month = `0${month}`;
  }

  return `${date.getFullYear()}-${month}-0${date.getDate()}`;
};

const getTime = (date) => {
  const time = new Date(date);
  return moment(time.getTime()).format("YYMMDD");
};

const newRow = {
  exp_id: "",
  title: "",
  start_date: getDate(),
  end_date: "",
  collabarators: "",
  prints: "",
  exp_link: "",
  isEditable: true,
  printDetails: [],
  print_start_date: getDate(),
};
const NewExperiment = () => {
  const [expDetails, setExpDetails] = useState(newRow);
  const filter = createFilterOptions();
  const drugsOption = [
    { label: "None", value: "none" },
    { label: "Drug1", value: "drug1" },
    { label: "Drug2", value: "drug2" },
  ];
  const handleOnChange = (e) => {
    const newExperimentDetails = { ...expDetails };
    newExperimentDetails[e.target.name] = e.target.value;
    setExpDetails(newExperimentDetails);
  };

  const handlePrints = (e) => {
    const newExperimentDetails = { ...expDetails };
    const { printDetails } = newExperimentDetails;
    newExperimentDetails[e.target.name] = parseInt(e.target.value);
    if (printDetails && printDetails.length > e.target.value) {
      newExperimentDetails.printDetails = printDetails.slice(0, e.target.value);
      setExpDetails(newExperimentDetails);
    } else {
      getPrintDetails(newExperimentDetails);
    }
  };
  const getDefaultTissueData = (count, idx) => {
    const tissue = [];
    const printId = expDetails.printDetails[idx].printId;
    for (let i = 0; i < count; i++) {
      tissue.push(`${printId}T${i + 1}`);
    }
    return tissue;
  };
  const handleTissue = (e, printIndex) => {
    let newExperimentDetails = structuredClone(expDetails);
    newExperimentDetails.printDetails[printIndex][e.target.name] =
      e.target.value;
    const tissue = {
      tissueIds: getDefaultTissueData(e.target.value, printIndex),
    };
    Object.assign(newExperimentDetails.printDetails[printIndex], tissue);
    setExpDetails(newExperimentDetails);
  };
  const onSaveExperiment = () => {
    if (expDetails.exp_id && expDetails.start_date && expDetails.title) {
      alert(JSON.stringify(expDetails));
    }
  };

  const getPrintDetails = (data) => {
    const date = data.print_start_date || getDate();
    const formatedDate = getTime(date);
    const length = data.printDetails.length || 0;
    const printDetails = [...data.printDetails];
    for (let i = length; i < data.prints; i++) {
      const printId = `${formatedDate}P${i + 1}`;
      printDetails.push({
        printId: printId,
        print_start_date: getDate(),
      });
    }
    data.printDetails = printDetails;
    setExpDetails(data);
  };
  const handlePrintsDate = (e, printIndex, printDetail) => {
    const newExperimentDetails = { ...expDetails };
    newExperimentDetails.printDetails[printIndex].print_start_date =
      e?.target?.value;
    const date = printDetail.print_start_date;
    const formatedDate = getTime(date);
    let printDetailsUpdate = [];
    const printDetails = { ...printDetail };
    const printId = `${formatedDate}P${printIndex + 1}`;
    printDetails["printId"] = printId;
    printDetailsUpdate.push(printDetails);
    Object.assign(
      newExperimentDetails.printDetails[printIndex],
      ...printDetailsUpdate
    );
    setExpDetails(newExperimentDetails);
  };

  const handleDrugsDetails = (e, newValue, printIndex, name) => {
    let value = "";
    if (typeof newValue === "string") {
      value = newValue;
    } else if (newValue && newValue.inputValue) {
      value = newValue.inputValue;
    } else {
      value = newValue?.value;
    }
    const newExperiment = { ...expDetails };
    newExperiment.printDetails[printIndex][name] = value;
    setExpDetails(newExperiment);
  };

  const getOptionLabel = (option) => {
    if (typeof option === "string") {
      return option;
    }
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.label;
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    const isExisting = options.some((option) => inputValue === option.value);
    if (inputValue !== "" && !isExisting) {
      filtered.push({
        value: inputValue.toLowerCase(),
        label: inputValue,
      });
    }
    return filtered;
  };

  const renderInput = (params) => {
    return (
      <TextField
        inputProps={{ style: { textTransform: "uppercase" } }}
        name="drugs"
        sx={{width: '150px', marginLeft: '0.5rem'}}
        {...params}
      />
    );
  };
  return (
    <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Title title="Experiment Id:" justifyContent="flex-end" />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className="add-experiment-input-fuild"
            sx={{ marginLeft: "0.5rem" }}
            size="small"
            value={expDetails.exp_id}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Exp_</InputAdornment>
              ),
            }}
            name="exp_id"
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Title title="Experiment Title:" justifyContent="flex-end" />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className="add-experiment-input-fuild"
            sx={{ marginLeft: "0.5rem" }}
            size="small"
            name="title"
            value={expDetails.title}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Title title="Dev-Ops Link:" justifyContent="flex-end" />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className="add-experiment-input-fuild"
            sx={{ marginLeft: "0.5rem" }}
            size="small"
            name="exp_link"
            value={expDetails.exp_link}
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Title title="Start Date:" justifyContent="flex-end" />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className="add-experiment-input-fuild"
            sx={{ margin: "0 0.5rem" }}
            type="date"
            value={expDetails.start_date}
            size="small"
            name="start_date"
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Title title="End Date:" justifyContent="flex-end" />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className="add-experiment-input-fuild"
            sx={{ marginLeft: "0.5rem" }}
            type="date"
            value={expDetails.end_date}
            size="small"
            name="end_date"
            onChange={(e) => handleOnChange(e)}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Title title="Prints:" justifyContent="flex-end" />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className="add-experiment-input-fuild"
            sx={{ marginLeft: "0.5rem" }}
            size="small"
            name="prints"
            type="number"
            value={expDetails.prints}
            InputProps={{ inputProps: { min: 0 } }}
            onChange={(e) => handlePrints(e)}
          />
        </Grid>
      </Grid>
      {expDetails.printDetails.map((printDetail, printIndex) => {
        return (
          <React.Fragment>
            <Grid
              key={printIndex}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                <Title
                  title={`Print ${printIndex + 1} Start Date:`}
                  justifyContent="flex-end"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="add-experiment-input-fuild"
                  sx={{ margin: "0 0.5rem" }}
                  type="date"
                  value={printDetail.print_start_date}
                  defaultValue={getDate()}
                  size="small"
                  name="print_start_date"
                  onChange={(e) => handlePrintsDate(e, printIndex, printDetail)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                <Title title="Print Id:" justifyContent="flex-end" />
              </Grid>
              <Grid item xs={4}>
                <Title title={printDetail.printId} />
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                <Title title="Tissue:" justifyContent="flex-end" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="add-experiment-input-fuild"
                  sx={{ marginLeft: "0.5rem" }}
                  size="small"
                  type="number"
                  name="tissueCount"
                  value={printDetail?.tissueCount}
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={(e) => handleTissue(e, printIndex, printDetail)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                <Title title="Select Dye:" justifyContent='flex-end'/>
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  size="small"
                  // value={printDetail.drugs}
                  onChange={(e, newValue) => {
                    handleDrugsDetails(e, newValue, printIndex, "dye");
                  }}
                  filterOptions={(options, params) =>
                    filterOptions(options, params)
                  }
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  options={drugsOption}
                  name="dye"
                  getOptionLabel={(option) => getOptionLabel(option)}
                  renderOption={(props, option) => (
                    <li {...props}>{option.label}</li>
                  )}
                  renderInput={(params) => renderInput(params)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                <Title title="Select Drugs:" justifyContent='flex-end'/>
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  size="small"
                  // value={printDetail.drugs}
                  onChange={(e, newValue) => {
                    handleDrugsDetails(e, newValue, printIndex, "drugs");
                  }}
                  filterOptions={(options, params) =>
                    filterOptions(options, params)
                  }
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  options={drugsOption}
                  name="drugs"
                  getOptionLabel={(option) => getOptionLabel(option)}
                  renderOption={(props, option) => (
                    <li {...props}>{option.label}</li>
                  )}
                  renderInput={(params) => renderInput(params)}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="contained" onClick={() => onSaveExperiment()}>Save</Button>
      </Box>
    </Grid>
  );
};

export default NewExperiment;
