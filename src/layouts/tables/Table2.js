import React from "react";
// @mui material components
// Material Dashboard 2 React components
import projectsTableData from "./data/projectsTableData";

import Tables from "./index";

function Table2() {
  const { columns, rows } = projectsTableData();
  return (
    <>
      <Tables columns={columns} rows={rows} />
    </>
  );
}

export default Table2;
