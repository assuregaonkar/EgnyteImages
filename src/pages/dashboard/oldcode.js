import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  InputAdornment,
  Select,
  MenuItem,
  IconButton,
  Autocomplete,
  createFilterOptions,
} from "@mui/material";
import { AddOutlined, BorderAll, Label } from "@mui/icons-material";
import Title from "../../components/title/title";
import "./newExperiment.css";
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
  const [values, setValues] = useState(null);
  const filter = createFilterOptions();
  // const [printDetails, setPrintsDetails] = useState([]);
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

    // setExpDetails(newExperimentDetails);
  };
  const getDefaultTissueData = (count, idx) => {
    const tissue = [];
    // const printDetails = [...data.printDetails]
    const printId = expDetails.printDetails[idx].printId;
    for (let i = 0; i < count; i++) {
      const tissueDetail = {
        dye: 'none',
        drugs: "none",
      };
      tissueDetail.tissueId = `${printId}T${i + 1}`;
      tissue.push(tissueDetail);
    }
    return tissue;
  };
  const handleTissue = (e, printIndex, tissueIndex) => {
    let newExperimentDetails = structuredClone(expDetails);
    newExperimentDetails.printDetails[printIndex][e.target.name] =
      e.target.value;
    const tissue = {
      tissueDetails: getDefaultTissueData(e.target.value, printIndex),
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
    newExperimentDetails.printDetails[printIndex].print_start_date = e?.target?.value;
    // const date = newExperimentDetails.printDetails[printIndex].print_start_date || getDate();
    const date = printDetail.print_start_date;
    const formatedDate = getTime(date);
    let printDetailsUpdate = [];
    const printDetails = { ...printDetail };
    const printId = `${formatedDate}P${printIndex + 1}`;
    printDetails["printId"] = printId;
    printDetailsUpdate.push(printDetails);
    // for (let i = 0; i < expDetails.prints; i++) {
    //   const printDetails = { ...newExperimentDetails.printDetails[i] };
    //   const printId = `${formatedDate}P${i + 1}`;
    //   printDetails["printId"] = printId;
    //   printDetailsUpdate.push(printDetails);
    // }
    Object.assign(
      newExperimentDetails.printDetails[printIndex],
      ...printDetailsUpdate
    );
    setExpDetails(newExperimentDetails);
  };

  const createDuplicate = (printIndex, tissueIndex, tissueValue) => {
    const newExperimentDetails = { ...expDetails };
    newExperimentDetails.printDetails[printIndex].tissueDetails.splice(
      tissueIndex + 1,
      0,
      { ...tissueValue }
    );
    setExpDetails(newExperimentDetails);
  };

  const handleTissueDetails = (e, newValue, printIndex, tissueIndex, name) => {
    let value = "";
    if (typeof newValue === "string") {
      value = newValue;
    } else if (newValue && newValue.inputValue) {
      value = newValue.inputValue;
    } else {
      value = newValue?.value;
    }
    const newExperiment = { ...expDetails };
    newExperiment.printDetails[printIndex].tissueDetails[tissueIndex][name] = value;
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
      className="ljsdjflsjdfljsd"
        inputProps={{ style: {textTransform: "uppercase" } }}
        name="drugs"
        {...params}
      />
    );
  };
  return (
    <Box>
      <Box className="new-experiment-form">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Title title="Experiment Id:" />
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
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Title title="Experiment Title:" />
          <TextField
            className="add-experiment-input-fuild"
            sx={{ marginLeft: "0.5rem" }}
            size="small"
            name="title"
            value={expDetails.title}
            onChange={(e) => handleOnChange(e)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Title title="Dev-Ops Link:" />
          <TextField
            className="add-experiment-input-fuild"
            sx={{ marginLeft: "0.5rem" }}
            size="small"
            name="exp_link"
            value={expDetails.exp_link}
            onChange={(e) => handleOnChange(e)}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Title title="Start Date:" />
            <TextField
              className="add-experiment-input-fuild"
              sx={{ margin: "0 0.5rem" }}
              type="date"
              value={expDetails.start_date}
              // defaultValue={getDate()}
              size="small"
              name="start_date"
              onChange={(e) => handleOnChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Title title="End Date:" />
            <TextField
              className="add-experiment-input-fuild"
              sx={{ marginLeft: "0.5rem" }}
              type="date"
              value={expDetails.end_date}
              // defaultValue={getDate()}
              size="small"
              name="end_date"
              onChange={(e) => handleOnChange(e)}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Title title="Prints:" />
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
        </Box>
        {/* {expDetails?.prints && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Title title="Print Start Date:" />
            <TextField
              className="add-experiment-input-fuild"
              sx={{ margin: "0 0.5rem" }}
              type="date"
              value={expDetails.print_start_date}
              defaultValue={getDate()}
              size="small"
              name="print_start_date"
              onChange={(e) => handlePrintsDate(e)}
            />
          </Box>
        )} */}
        <Box>
          {expDetails.printDetails.map((printDetail, printIndex) => {
            return (
              <Box key={printIndex} sx={{}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Title title={`Print ${printIndex + 1} Start Date:`} />
                  <TextField
                    className="add-experiment-input-fuild"
                    sx={{ margin: "0 0.5rem" }}
                    type="date"
                    value={printDetail.print_start_date}
                    defaultValue={getDate()}
                    size="small"
                    name="print_start_date"
                    onChange={(e) =>
                      handlePrintsDate(e, printIndex, printDetail)
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "0.5rem",
                  }}
                >
                  <Title title={printDetail.printId} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "0.5rem",
                  }}
                >
                  <Title title="Tissue:" />
                  <TextField
                    className="add-experiment-input-fuild"
                    sx={{ marginLeft: "0.5rem" }}
                    size="small"
                    type="number"
                    name="tissueCount"
                    value={printDetail?.[printIndex]?.tissueCount}
                    InputProps={{ inputProps: { min: 0 } }}
                    onChange={(e) => handleTissue(e, printIndex, printDetail)}
                  />
                </Box>
                <Box
                  sx={{
                    marginRight: "0.5rem",
                  }}
                >
                  {printDetail?.tissueDetails &&
                    printDetail?.tissueDetails.map(
                      (tissueDetail, tissueIndex) => {
                        return (
                          <Box
                            key={`${tissueIndex}-${printIndex}`}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              marginRight: "0.5rem",
                            }}
                          >
                            <div style={{ marginRight: "0.5rem" }}>
                              <Title title={tissueDetail.tissueId} />
                            </div>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "0.5rem",
                              }}
                            >
                              <Title title="Select Drugs:" />
                              <Autocomplete
                                size= 'small'
                                value={tissueDetail?.drugs}
                                onChange={(e, newValue) => {
                                  handleTissueDetails(
                                    e,
                                    newValue,
                                    printIndex,
                                    tissueIndex,
                                    "drugs"
                                  );
                                }}
                                filterOptions={(options, params) =>
                                  filterOptions(options, params)
                                }
                                options={drugsOption}
                                getOptionLabel={(option) =>
                                  getOptionLabel(option)
                                }
                                renderOption={(props, option) => (
                                  <li {...props}>{option.label}</li>
                                )}
                                renderInput={(params) => renderInput(params)}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "0.5rem",
                              }}
                            >
                              <Title title="Select Dye:" />
                              <Autocomplete
                              className="asdfasdf"
                              size= 'small'
                                value={tissueDetail?.Dye}
                                onChange={(e, newValue) => {
                                  handleTissueDetails(
                                    e,
                                    newValue,
                                    printIndex,
                                    tissueIndex,
                                    "dye"
                                  );
                                }}
                                filterOptions={(options, params) =>
                                  filterOptions(options, params)
                                }
                                selectOnFocus
                                clearOnBlur
                                handleHomeEndKeys
                                options={drugsOption}
                                name="drugs"
                                getOptionLabel={(option) =>
                                  getOptionLabel(option)
                                }
                                renderOption={(props, option) => (
                                  <li {...props}>{option.label}</li>
                                )}
                                renderInput={(params) => renderInput(params)}
                              />
                              <IconButton
                                onClick={() =>
                                  createDuplicate(
                                    printIndex,
                                    tissueIndex,
                                    tissueDetail
                                  )
                                }
                              >
                                <AddOutlined />
                              </IconButton>
                            </Box>
                            {/* <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "0 0.5rem",
                              }}
                            >
                              <Title title="Select Drugs:" />
                              <Select
                                value={tissueDetail.drugs}
                                disableUnderline
                                sx={{ margin: "0.5rem" }}
                                size="small"
                                type="number"
                                name="drugs"
                                onChange={(e) =>handleTissueDetails(e,printIndex,
                                    tissueIndex
                                  )
                                }
                              >
                                <MenuItem value="none">None</MenuItem>
                                <MenuItem value="drug1">Drug1</MenuItem>
                                <MenuItem value="drug2">Drug2</MenuItem>
                              </Select>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "0.5rem",
                              }}
                            >
                              <Title title="Dye:" />
                              <Select
                                className="add-experiment-input-fuild"
                                sx={{ margin: "0 0.5rem" }}
                                size="small"
                                value={tissueDetail.dye}
                                name="dye"
                                onChange={(e) =>
                                  handleTissueDetails(
                                    e,
                                    printIndex,
                                    tissueIndex
                                  )
                                }
                              >
                                <MenuItem value="none">None</MenuItem>
                                <MenuItem value="dye1">Dye1</MenuItem>
                                <MenuItem value="dye2">Dye2</MenuItem>
                              </Select>
                            </Box> */}
                          </Box>
                        );
                      }
                    )}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Button onClick={() => onSaveExperiment()}>Save</Button>
      </Box>
    </Box>
  );
};

export default NewExperiment;
