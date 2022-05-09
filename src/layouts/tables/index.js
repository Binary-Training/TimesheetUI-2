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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDPagination from "components/MDPagination";
import MDInput from "components/MDInput";
import Select from "components/Select";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
// import BaiscDatePicker from "examples/Date";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import weeksTableData from "layouts/tables/data/weeksTableData";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const { columns: wColumns, rows: wRows } = weeksTableData();

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
                  Approve By Project
                </MDTypography>
              </MDBox>
              <MDBox
                py={1}
                px={2}
                display="flex"
                flexDirection={{ xs: "row" }}
                justifyContent="space-between"
                alignItems="center"
              >
                {/* <BaiscDatePicker /> */}
                <Select />
              </MDBox>
              <MDBox
                px={2}
                display="flex"
                flexDirection={{ xs: "row" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Select />
                <MDInput label="Search here..." />
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
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
                  Approve By Project
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
              <MDBox
                py={1}
                mx={2}
                display="flex"
                flexDirection={{ xs: "row", lg: "row" }}
                justifyContent="end"
                alignItems="center"
              >
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
                  Approve By Project
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: wColumns, rows: wRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
              <MDBox
                py={1}
                mx={2}
                display="flex"
                flexDirection={{ xs: "row", lg: "row" }}
                justifyContent="end"
                alignItems="center"
              >
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
