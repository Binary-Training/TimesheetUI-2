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
import { Icon } from "@mui/material";
import MDPagination from "components/MDPagination";
// Images

export default function data() {
  const Week = ({ name }) => (
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
      { Header: "Project", accessor: "Week", width: "15%", align: "center" },
      { Header: "Project Description", accessor: "Timesheet", align: "center" },
      { Header: "Effort Type", accessor: "Regular", align: "center" },
      { Header: "Sun/Mar/27", accessor: "Overtime", align: "center" },
      { Header: "Mon/Mar/28", accessor: "Approved", align: "center" },
      { Header: "Tue/Mar/29", accessor: "Reject", align: "center" },
      { Header: "Wed/Mar/30", accessor: "levi", align: "center" },
      { Header: "Thu/Mar/31", accessor: "sevi", align: "center" },
      { Header: "Fri/Apr/01", accessor: "Revi", align: "center" },
      { Header: "Sat/Apr/02", accessor: "devi", align: "center" },
      { Header: "Approver", accessor: "pevi", align: "center" },
      { Header: "Status", accessor: "kevi", align: "center" },
      { Header: "Total", accessor: "mevi", align: "center" },
      { Header: "Action", accessor: "nevi", align: "center" },
    ],

    rows: [
      {
        Week: <Week name="" />,
        Timesheet: <Job description="" />,
        Regular: <Job description="" />,
        Overtime: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Approved: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Reject: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        levi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        sevi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Revi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        devi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        pevi: <Job description="" />,
        kevi: <Job description="" />,
        mevi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        nevi: (
          <MDPagination item>
            <Icon color="primary">restore_from_trash</Icon>
          </MDPagination>
        ),
      },
      {
        Week: <Week name="+Add Row" />,
        Timesheet: <Job description="" />,
        Regular: <Job description="" />,
        Overtime: <Job description="" />,
        Approved: <Job description="" />,
        Reject: <Job description="" />,
        levi: <Job description="" />,
        sevi: <Job description="" />,
        Revi: <Job description="" />,
        devi: <Job description="" />,
        pevi: <Job description="" />,
        kevi: <Job description="" />,
        mevi: <Job description="" />,
        nevi: <Job description="" />,
      },
      {
        Week: <Week name="Regular Hours" />,
        Timesheet: <Job description="" />,
        Regular: <Job description="" />,
        Overtime: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Approved: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Reject: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        levi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        sevi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Revi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        devi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        pevi: <Job description="" />,
        kevi: <Job description="" />,
        mevi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        nevi: <Job description="" />,
      },
      {
        Week: <Week name="Overtime Hours" />,
        Timesheet: <Job description="" />,
        Regular: <Job description="" />,
        Overtime: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Approved: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Reject: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        levi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        sevi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        Revi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        devi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        pevi: <Job description="" />,
        kevi: <Job description="" />,
        mevi: (
          <MDBox mb={2}>
            <MDInput type="text" size="small" fullWidth />
          </MDBox>
        ),
        nevi: <Job description="" />,
      },
    ],
  };
}
