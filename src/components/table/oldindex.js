import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Paper,
  IconButton,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  TableFooter,
  TablePagination,
  Select,
  MenuItem,
  FormControl,
  Input,
  Container,
} from "@mui/material";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  UnfoldMoreOutlined,
  AddOutlined,
  SettingsEthernetOutlined,
} from "@mui/icons-material";
// import rows from "./constant";
import "./index.css";
import Lable from "../chip";
import { Link } from "react-router-dom";
import Modal from "../modal";
import ExpandedTable from "./expandedTable";
// import { editableTable, colums } from "./constant";

function TablePaginationActions(props, setPage) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const pageCount = Math.ceil(count / rowsPerPage);

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const jumpToPage = (page) => {
    setPage(page - 1);
  };

  // const getPagesOption = () => {
  //   const menuItem = []
  //   for(let i = 0; i< pageCount; i++){
  //     menuItem.push(<MenuItem key={page} value={idx+1}>{idx+1}</MenuItem>)
  //   }
  //   return menuItem
  // }
  const color = (status) => {
    color = {
      completed: "success",
      initiat: "primary",
      inprogress: "warning",
      failed: "error",
    };
    return color[status];
  };
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, mr: 2.5, display: "flex" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControl size="small">
          <Select
            value={page + 1}
            label={page + 1}
            onChange={(e) => jumpToPage(e.target.value)}
            id="demo-select-small"
            sx={{
              boxShadow: "none",
              border: "1px solid #B1B4BB",
              borderRadius: "1px",
              paddingTop: "0",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
            }}
          >
            {Array.from(Array(pageCount)).map((page, idx) => {
              return (
                <MenuItem key={idx + 1} value={idx + 1}>
                  {idx + 1}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <p style={{ marginLeft: "1rem" }}>of {pageCount} page</p>
      </Box>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const RactTable = ({ colums, showAddMore, rows, onRowAdd, isExpandable }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tableRows, setTableRows] = useState([]);
  const [modalToggle, setModalToggle] = useState();
  useEffect(() => {
    setTableRows([...rows]);
  }, [rows]);
  //   const emptyRows =
  //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortById = () => {
    const sortRow = [...tableRows];
    setTableRows(sortRow.sort((a, b) => a.id - b.id));
  };

  const sortByTitle = () => {
    const sortRow = [...tableRows];
    sortRow.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    setTableRows(sortRow);
  };

  const color = (status) => {
    const color = {
      completed: "success",
      initiat: "primary",
      inprogress: "warning",
    };
    return color[status] || color.initiat;
  };

  const handleChangeInput = (e, id, rowKey) => {
    const tableData = [...tableRows];
    tableData[id][rowKey] = e.target.value;
    setTableRows(tableData);
  };
  const CustomTableCell = (colum, value, id, rowKey, row, prefix) => {
    const {type,option} = colum
    if (type === "text" || type === "date") {
      return (
        <Input
          type={type}
          value={value}
          onChange={(e) => handleChangeInput(e, id, rowKey, row)}
          // sx={{ border: "1px solid black" }}
          disableUnderline={true}
          size="small"
          className="sizeSmall"
          id="table-row-input-fuild"
          sx={{minWidth:'70px'}}
        />
      );
    } else if (type === "label") {
      return (
        <span>
          {prefix}
          {value}
        </span>
      );
    } else if (type === "chips") {
      return <Lable color={color(value)} text={value} variant="outlined" />;
    } else if (type === "link") {
      return (
        <Link to={`experiment/${value}?id=${value}`}>
          {prefix}
          {value}
        </Link>
      );
    } else if (type === "select") {
      return (
        <FormControl sx={{ minWidth: 120 }} size="small" variant="standard">
          <Select
            id="table-row-input-fuild"
            value={value}
            fontSize="small"
            onChange={(e) => handleChangeInput(e, id, rowKey, row)}
            disableUnderline
            sx={{
              paddingTop: "0",
              textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "pre",
              minWidth:'120px',
              maxWidth: '120px'
            }}
          >
            {
              option.map((({value, label}) =>(
                <MenuItem value={value}>{label}</MenuItem>
              )))
            }
            {/* <MenuItem value={"Initial State1"}>Initial State1</MenuItem>
            <MenuItem value={"Initial State2"}>Initial State2</MenuItem>
            <MenuItem value={"Initial State3"}>Initial State3</MenuItem> */}
          </Select>
        </FormControl>
      );
      // <Input
      //     type={type}
      //     value={value}
      //     onChange={(e) => handleChangeInput(e, id, rowKey, row)}
      //     sx={{ border: "1px solid black" }}
      //     disableUnderline={true}
      //     size="small"
      //     className="sizeSmall"
      //     id='table-row-input-fuild'
      //   />
    }
  };
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table  >
          <TableHead className="table-head">
            <TableRow className="table-head-row">
              {colums.map((colum, idx) => {
                return (
                  <TableCell
                    key={colum.label.split(" ").join("_")}
                    className="table-head-cell"
                  >
                    <b>{colum.label}</b>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {(rowsPerPage > 0 && tableRows.length
              ? tableRows?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : rows
            ).map((row, rowidx) => {
              const headerKeys = Object.keys(row);
              return (
                <TableRow key={rowidx} className="table-row">
                  {colums.map((colum, columId) => {
                    return (
                      <React.Fragment key={columId + rowidx}>
                        {modalToggle >= 0 ? (
                          <Modal
                            isOpen={modalToggle === rowidx}
                            onClose={() => setModalToggle()}
                          >
                            <ExpandedTable
                            colums={colums}
                            // row
                            // colum={colum}
                            value={row[colum.key]}
                            rowidx={rowidx}
                            columnKey={colum.key}
                            row= {row}
                            prefix={colum.prefix}
                            CustomTableCell={CustomTableCell}
                              // colums={colums}
                              // row={ row[colum.key]}
                              // columKey={colum.key}
                              // CustomCell={CustomTableCell}
                              // rowidx={rowidx}
                            />
                            {/* {CustomTableCell(
                            colum.type,
                            row[headerKeys[columId]],
                            rowidx,
                            headerKeys[columId],
                            row
                          )} */}
                          </Modal>
                        ) : null}

                        <TableCell
                          key={`${columId}-${rowidx}-1`}
                          className="table-body-cell"
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            {columId === 0 && isExpandable && (
                              <IconButton
                                size="small"
                                onClick={() => setModalToggle(rowidx)}
                              >
                                <SettingsEthernetOutlined
                                  fontSize="small"
                                  sx={{ width: "14px" }}
                                />
                              </IconButton>
                            )}
                            {CustomTableCell(
                              colum,
                              row[colum.key],
                              rowidx,
                              colum.key,
                              row,
                              colum.prefix
                            )}
                          </Box>
                        </TableCell>
                      </React.Fragment>
                    );
                  })}
                </TableRow>
              );
            })}
            {/* {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
          {tableRows.length > 5 && (
            <TableFooter>
              <TableRow>
                <TablePagination
                  sx={{ backgroundColor: "#ffffff" }}
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "items per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={(props) =>
                    TablePaginationActions(props, setPage)
                  }
                  labelRowsPerPage="Items per page"
                />
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
      {showAddMore ? (
        <Box className="add-new-row-button-wrapper">
          <IconButton className="add-new-row-button" onClick={onRowAdd}>
            <AddOutlined fontSize="small" />
          </IconButton>
        </Box>
      ) : null}
    </Box>
  );
};

RactTable.defaultProps = {
  showPager: true,
  showAddMore: false,
};

export default RactTable;
