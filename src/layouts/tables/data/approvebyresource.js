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
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function data() {
  const Author = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Resource Name", accessor: "Resource_Name", align: "center" },
      { Header: "Resource Country Name", accessor: "Resource_Country_Name", align: "center" },
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
        Resource_Name: <Author name="Feb4 User4" />,
        Resource_Country_Name: <Job title="LATAM2014" />,
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
            16.0
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
        Resource_Name: <Author name="Feb4 User2" />,
        Resource_Country_Name: <Job title="LATAM2014" />,
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
            0.0
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
      {
        Resource_Name: <Author name="Feb4 User3" />,
        Resource_Country_Name: <Job title="LATAM2014" />,
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
            0.0
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
      {
        Resource_Name: <Author name="Feb4 User4" />,
        Resource_Country_Name: <Job title="LATAM2014" />,
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
            0.0
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
      {
        Resource_Name: <Author name="Mar27 User" />,
        Resource_Country_Name: <Job title="LATAM2014" />,
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
            0.0
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
