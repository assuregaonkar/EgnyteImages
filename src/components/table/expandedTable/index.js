import { Box, Container } from "@mui/material";
import "./index.css";
const ExpandedTable = ({ colums, row, keys, CustomCell, rowidx }) => {
  return (
    <Container sx={{ bgcolor: "#ffffff" }} className="table-form">
      {colums.map((colum, idx) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              justifyContent: "space-between",
            }}
          >
            <b>{`${colum.label} : `}</b>
            {CustomCell(colum.type, row[keys[idx]], rowidx, keys[idx], row)}
          </Box>
        );
      })}
    </Container>
  );
};

export default ExpandedTable;
