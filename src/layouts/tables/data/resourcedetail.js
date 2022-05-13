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

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Images

export default function data() {
  const Project = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Resource Name", accessor: "Resource_Name", align: "center" },
      { Header: "Projects Name", accessor: "Project_Name", align: "center" },
      { Header: "Project Manager Name", accessor: "Project_Manager_Name", align: "center" },
      { Header: "Project Description", accessor: "Project_Description", align: "center" },
      { Header: "Approved Hour(s)", accessor: "Approved_Hour", align: "center" },
      { Header: "Rejected Hour(s)", accessor: "Rejected_Hour", align: "center" },
      { Header: "Regular Submitted Hour(s)", accessor: "Regular_Submitted_Hour", align: "center" },
      {
        Header: "Overtime Submitted Hour(s)",
        accessor: "Overtime_Submitted_Hour",
        align: "center",
      },
      { Header: "Not Submitted Hour(s)", accessor: "Not_Submitted_Hour", align: "center" },
      { Header: "Approve All", accessor: "Approve_All", align: "center" },
      { Header: "Reject All", accessor: "Reject_All", align: "center" },
    ],

    rows: [
      {
        Resource_Name: <Project name="Feb4 User5" />,
        Project_Name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            3MRCR
          </MDTypography>
        ),
        Project_Manager_Name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Feb5 Pm1
          </MDTypography>
        ),
        Project_Description: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Sep02Proj13
          </MDTypography>
        ),
        Approved_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        Rejected_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        Regular_Submitted_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            8.0
          </MDTypography>
        ),
        Overtime_Submitted_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            8.0
          </MDTypography>
        ),
        Not_Submitted_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        Approve_All: <Checkbox {...label} size="small" />,
        Reject_All: <Checkbox {...label} size="small" />,
      },
      {
        Resource_Name: <Project name="Feb4 User5" />,
        Project_Name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            5MRCR
          </MDTypography>
        ),
        Project_Manager_Name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Feb5 Pm1
          </MDTypography>
        ),
        Project_Description: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Sep01Proj13
          </MDTypography>
        ),
        Approved_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        Rejected_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        Regular_Submitted_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            8.0
          </MDTypography>
        ),
        Overtime_Submitted_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        Not_Submitted_Hour: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
        Approve_All: <Checkbox {...label} size="small" />,
        Reject_All: <Checkbox {...label} size="small" />,
      },
    ],
  };
}