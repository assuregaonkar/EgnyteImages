const printColums = [
  {
    label: "Print Id",
    type: "text",
    key: "id",
  },
  {
    label: "Print Date",
    type: "date",
    key: "date",
  },
  {
    label: "Geomentry",
    type: "text",
    key: "geomentry",
  },
  {
    label: "Fixture",
    type: "text",
    key: "fixture",
  },
  {
    label: "CM Name",
    type: "text",
    key: "cm_name",
  },
  {
    label: "CF Name",
    type: "text",
    key: "cf_name",
  },
];

const tissueColums = [
  {
    label: "Tissue Id",
    type: "text",
    key: "id",
  },
  {
    label: "Tissue Failure Mode",
    type: "select",
    key: "tissue_fail",
    option:[
      {
        value: 'none',
        label: 'None'
      },
      {
        value: 'snapped',
        label: 'Snapped'
      },
      {
        value: 'bad quality',
        label: 'Bad Quality'
      },
      {
        value: 'tissue disassembled',
        label: 'Tissue Disassembled'
      },
      {
        value: 'print fail',
        label: 'Print Fail'
      },
      {
        value: 'float',
        label: 'Float'
      },
      {
        value: 'human error',
        label: 'human error'
      },
      {
        value: 'contaminated',
        label: 'Contaminated'
      },
      {
        value: 'snapped during transfer',
        label: 'Snapped During Transfer'
      },
      {
        value: 'insufficient ink',
        label: 'Insufficient Ink'
      },
      {
        value: 'no contraction',
        label: 'No Contraction'
      }
    ]
  },
  {
    label: "Tissue Finish",
    type: "date",
    key: "tissue_finish",
  },
  {
    label: "Tissue Days",
    type: "text",
    key: "tissue_days",
  },
  {
    label: "Post",
    type: "text",
    key: "post",
  },
  {
    label: "Print Id",
    type: "text",
    key: "print_id",
  },
  {
    label: "Dyes",
    type: "text",
    key: "dyes",
  },
  {
    label: "Tissue Geometry",
    type: "text",
    key: "tissue_geo",
  },
  {
    label: "Treatment",
    type: "text",
    key: "trintment",
  },
];

const fixColumns = [
  {
    label: "Fix Id",
    type: "text",
    key: "id",
  },
  {
    label: "Fix Date",
    type: "date",
    key: "date",
  },
  {
    label: "Drug",
    type: "text",
    key: "drug",
  },
  {
    label: "Tissue Table",
    type: "text",
    key: "tissue_table",
  },
  {
    label: "Fix Number",
    type: "text",
    key: "fix_number",
  },
  {
    label: "Start Time",
    type: "text",
    key: "start_time",
  },
  {
    label: "End Time",
    type: "text",
    key: "end_time",
  },
  {
    label: "Status",
    type: "text",
    key: "status",
  },
];

const images = [
  {
    url: "../images/t1.png",
    name: "T1",
  },
  {
    url: "../images/t2.png",
    name: "T2",
  },
  {
    url: "../images/t3.png",
    name: "T3",
  },
  {
    url: "../images/t4.png",
    name: "T4",
  },
  {
    url: "../images/t5.png",
    name: "T5",
  },
  {
    url: "../images/t6.png",
    name: "T6",
  },
  {
    url: "../images/t7.png",
    name: "T7",
  },
  {
    url: "../images/t8.png",
    name: "T8",
  },
  {
    url: "../images/t9.png",
    name: "T9",
  },
  {
    url: "../images/t10.png",
    name: "T10",
  },
  {
    url: "../images/t11.png",
    name: "T11",
  },
  {
    url: "../images/t12.png",
    name: "T12",
  },
];

const videos = [
  { 
    url: "../videos/1.mp4", 
    name: "T1",
    thumbail: '../images/t1.png'
  },
  { 
    url: "../videos/2.mp4", 
    name: "T2",
    thumbail: '../images/t11.png'
  },
  { 
    url: "../videos/3.mp4", 
    name: "T3",
    thumbail: '../images/t12.png'
  },
  { 
    url: "../videos/4.mp4", 
    name: "T4",
    thumbail: '../images/t4.png'
  },
  { 
    url: "../videos/5.mp4", 
    name: "T5",
    thumbail: '../images/t5.png'
  },
  { 
    url: "../videos/1.mp4", 
    name: "T6",
    thumbail: '../images/t1.png'
  },
  { 
    url: "../videos/2.mp4", 
    name: "T7",
    thumbail: '../images/t2.png'
  },
  { 
    url: "../videos/3.mp4", 
    name: "T8",
    thumbail: '../images/t3.png'
  },
  { 
    url: "../videos/4.mp4", 
    name: "T9",
    thumbail: '../images/t9.png'
  },
  { 
    url: "../videos/5.mp4", 
    name: "T10",
    thumbail: '../images/t8.png'
  }
];
export { printColums, tissueColums, fixColumns, images, videos };
