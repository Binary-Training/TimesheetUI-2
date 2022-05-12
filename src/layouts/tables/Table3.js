import React from "react";
// @mui material components
// Material Dashboard 2 React components
import restroTableData from "./data/restroTableData";

import Tables from "./index";

function Table3() {
    const { columns, rows } = restroTableData();
    return (
        <>
            <Tables
                columns={columns}
                rows={rows}
            />
        </>
    );
}

export default Table3;