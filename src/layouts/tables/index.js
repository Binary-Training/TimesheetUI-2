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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Icon } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDPagination from "components/MDPagination";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import weeksTableData from "layouts/tables/data/weeksTableData";
// import restroTableData from "layouts/tables/data/restroTableData";
// import TabPanel from "examples/Tab";
import MaterialUIPickers from "examples/Date";
import SelectTextFields from "examples/Select";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables(props) {
  const page = [
    {
      value: "0",
      label: "0",
    },
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
  ];

  // const { columns, rows } = authorsTableData();
  // const { columns: wColumns, rows: wRows } = weeksTableData();
  // const { columns: rColumns, rows: rRows } = restroTableData();
  // const { columns: lColumns, rows: lRows } = ApproveByReject();
  // const { columns: mColumns, rows: mRows } = RegisterTimesheet();
  // const { columns: nColumns, rows: nRows } = TimesheetDetail();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Approve By Reject
                </MDTypography>
              </MDBox>
              <MDBox
                py={1}
                mx={2}
                display="flex"
                flexDirection={{ xs: "row", lg: "row" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <MDBox
                  py={1}
                  mx={2}
                  display="flex"
                  flexDirection={{ xs: "row", lg: "row" }}
                  justifyContent="start"
                  alignItems="center"
                >
                  <MDButton variant="contained" color="success" size="small">
                    My Approvals
                  </MDButton>
                  &nbsp;
                  <MDButton variant="contained" color="success" size="small">
                    Delegated Approvlas
                  </MDButton>
                </MDBox>
                <MDBox
                  py={1}
                  mx={2}
                  display="flex"
                  flexDirection={{ xs: "row", lg: "row" }}
                  justifyContent="end"
                  alignItems="center"
                >
                  <MaterialUIPickers />
                </MDBox>
              </MDBox>
              <MDBox
                py={1}
                mx={2}
                display="flex"
                flexDirection={{ xs: "row", lg: "row" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography display="flex" justifyContent="space-between">
                  <SelectTextFields data={page} />
                  <MDTypography style={{ fontSize: 13 }} pt={1} mx={1}>enteries per page</MDTypography>
                </MDTypography>
                <MDInput type="text" label="Search Here" />
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: props.columns, rows: props.rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
              <MDBox
                py={1}
                px={2}
                width="100%"
                display="flex"
                flexDirection={{ xs: "row", lg: "row" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <MDButton variant="outlined" color="info" size="small">
                  Export
                </MDButton>
                <MDPagination size="small">
                  <MDPagination item>
                    <Icon>keyboard_arrow_left</Icon>
                  </MDPagination>
                  <MDPagination item active>
                    1
                  </MDPagination>
                  <MDPagination item>2</MDPagination>
                  <MDPagination item>3</MDPagination>
                  <MDPagination item>
                    <Icon>keyboard_arrow_right</Icon>
                  </MDPagination>
                </MDPagination>
              </MDBox>
              <MDBox
                py={1}
                mx={2}
                display="flex"
                flexDirection={{ xs: "row", lg: "row" }}
                justifyContent="end"
                alignItems="center"
              >
                <MDButton variant="contained" color="success" size="small">
                  Submit
                </MDButton>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
