import React, { useState, useEffect } from "react";
import RactTable from "../../../../components/table";
import tableData from "./constant.json";
import {useSearchParams} from 'react-router-dom'

const PrintTable = ({isHidable}) => {
  const [printTableRows, setPrintTableRows] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const exp_id = searchParams.get('exp_id')
  const catergory = searchParams.get('query')
  useEffect(() => {
    // const printRows = getDefaultPrintRow();
    setPrintTableRows([...tableData[catergory].row]);
  }, []);

  const handlePrintRow = () => {
    const row = [...printTableRows];
    const copyOfLastRow = row[row.length - 1];
    setPrintTableRows([...row, { ...copyOfLastRow }]);
  };
  const onSaveData = (data) =>{
    console.log(data)
  }
  return (
    <React.Fragment>
      <RactTable
        colums={tableData[catergory].colums}
        onRowAdd={handlePrintRow}
        rows={printTableRows}
        isExpandable={true}
        showAddMore={false}
        isHidable={isHidable}
        onSaveData={onSaveData}
      />
    </React.Fragment>
  );
};

export default PrintTable;
