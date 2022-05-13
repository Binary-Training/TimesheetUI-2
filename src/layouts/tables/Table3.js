import React from "react";
// @mui material components
// Material Dashboard 2 React components
import weeksTableData from "./data/weeksTableData";

import Tables from "./index";

function Table3() {
  const { columns, rows } = weeksTableData();
  return (
    <>
      <Tables columns={columns} rows={rows} />
    </>
  );
}

export default Table3;
