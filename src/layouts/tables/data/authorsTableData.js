/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDInput from "components/MDInput";
import { Checkbox } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
// import { Icon } from "@mui/material";
// import MDPagination from "components/MDPagination";
// import checkbox from "assets/theme-dark/components/form/checkbox";
// Images

export default function data() {
  const Author = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Resource Name", accessor: "author", align: "center" },
      { Header: "Timesheet period", accessor: "function", align: "center" },
      { Header: "Regular Hours", accessor: "status", align: "center" },
      { Header: "Overtime Hours", accessor: "employed", align: "center" },
      { Header: "Approved All", accessor: "action", align: "center" },
      { Header: "Reject All", accessor: "defeat", align: "center" },
    ],

    rows: [
      {
        author: <Author name="Feb4 User2" />,
        function: <Job description="01/05/2022-07/05/2022" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            15.00
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        action: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
        defeat: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
      },
      {
        author: <Author name="Feb4 User2" />,
        function: <Job description="06/03/2022-12/03/2022" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8.00
          </MDTypography>
        ),
        action: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
        defeat: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
      },
      {
        author: <Author name="Feb4 User3" />,
        function: <Job description="01/05/2022-07/05/2022" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10.00
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        action: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
        defeat: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
      },
      {
        author: <Author name="Feb4 User3" />,
        function: <Job description="06/03/2022-12/03/2022" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23.00
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        action: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
        defeat: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
      },
      {
        author: <Author name="Feb4 User4" />,
        function: <Job description="27/02/2022-05/03/2022" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23.00
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        action: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
        defeat: (
          <MDBox mb={2}>
            <Checkbox {...label} size="small" />
            <br />
            <MDInput type="text" label="Add Comment" size="small" fullWidth />
          </MDBox>
        ),
      },
    ],
  };
}
