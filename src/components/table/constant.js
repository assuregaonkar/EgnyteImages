const rows = [
  {
    id: 1111,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 1112,
    title: "dasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 1113,
    title: "casd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "initiat",
    isEditable: true,
  },
  {
    id: 1114,
    title: "rasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 1115,
    title: "isd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 1116,
    title: "odasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "initiat",
    isEditable: true,
  },
  {
    id: 1111,
    title: "pdasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 1117,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 1118,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 1119,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
  },
  {
    id: 1110,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
    isEditable: true,
  },
  {
    id: 11,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
  },
  {
    id: 12,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
  },
  {
    id: 13,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
  },
  {
    id: 114,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
  },
  {
    id: 15,
    title: "aadasd",
    startDate: "2013-01-08",
    endDate: "2013-01-18",
    collabarators: "joe",
    print: 2,
    status: "completed",
  },
];

const printTable = [
  "Print_ID",
  "Print_Date",
  "Print_Number",
  "Ticket",
  "Link_to_devOps",
  "Geometry",
  "Fixture",
  "CM_Name",
  "Included_in_Merck1_Manuscript",
  "Print_batch_fail",
  "CM_Percent",
  "CM_Diff",
  "CM_Diff_Purity",
  "CM_Flasks_Used",
  "CM_Countess_C_1",
  "CM_Countess_V_1",
  "CM_Used",
  "CF_Name",
  "CF_Percent",
  "CF_Batch",
  "CF_Vials_Used",
  "CF_Countess_C_1",
  "CF_Countess_V_1",
  "E_Name",
  "E_Percent",
  "E_Batch",
  "E_Flasks_Used",
  "E_Countess_C_1",
  "E_Countess_V_1",
  "O_Name",
  "O_Percent",
  "O_Batch",
  "O_Flasks_Used",
  "O_Countess_Concentration",
  "O_Countess_Viability",
  "Technician",
  "Comments",
  "Tissue_Table_ID",
  "CM_mL",
  "CM_Total_Cells",
  "CF_Countess_C_Avg",
  "E_Countess_C_Avg",
  "E_Total_Cells",
  "CF_mL_needed",
  "E_mL_needed",
  "Calculated_Calcium_Image_Date",
  "Desired_Image_Date",
  "Tissues_Printed",
  "cell_ink_actual_uL",
  "cell_ink_expected_uL",
  "Syringes_Needed",
  "LS_Lot_Number",
  "LS_Incubation_time",
  "LS_Non_Incubation_time",
  "cell_ink_viability",
  "Batch_Culture_Media",
  "Create_Date",
  "Last_Modified_Date",
  "Modified_B",
];

const editableTable = [
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
  [
    {
      value: 1111,
      type: "text",
      isEditable: true,
    },
    {
      value: "aadasd",
      type: "text",
      isEditable: true,
    },
    {
      value: "1/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "10/1/2023",
      type: "date",
      isEditable: true,
    },
    {
      value: "joe",
      type: "text",
      isEditable: true,
    },
    {
      value: "completed",
      type: "title",
    },
    {
      value: true,
      type: "title",
    },
  ],
];

const colums = [
  {
    label: "Experiment Id",
    type: "label",
    key: "id",
  },
  {
    label: "Experiment Title",
    type: "text",
    key: "title",
  },
  {
    label: "Start Date",
    type: "date",
    key: "startDate",
  },
  {
    label: "End Date",
    type: "date",
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
    label: "Status",
    type: "chips",
    key: "status",
  },
];
export default rows;

export { printTable, editableTable, colums };
