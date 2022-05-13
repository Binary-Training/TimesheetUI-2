import React from "react";
// @mui material components
// Material Dashboard 2 React components
import authorsTableData from "./data/authorsTableData";

import Tables from "./index";

function Table1() {
    const { columns, rows } = authorsTableData();
  return (
    <>
     <Tables  
        columns={columns}
        rows={rows}
     />
    </>
  );
}

export default Table1;
