import { Box, Container, Grid } from "@mui/material";
import "./index.css";
const ExpandedTable = ({
  colums,
  value,
  rowidx,
  columnKey,
  row,
  prefix,
  CustomTableCell,
}) => {
  return (
    <Container sx={{ bgcolor: "#ffffff" }} className="table-form">
      {colums.map((colum, idx) => {
        return (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginBottom: "1rem" }}
          >
          <Grid item xs={6} sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>     
            <b>{`${colum.label} : `}</b>
            </Grid>
            <Grid item xs={6}> 
            {CustomTableCell(
              colum,
              row[colum.key],
              rowidx,
              colum.key,
              row,
              prefix
            )}
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
};

export default ExpandedTable;
