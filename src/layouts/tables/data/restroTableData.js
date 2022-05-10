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
// import MDInput from "components/MDInput";
// Images

export default function data() {
  const Restro = ({ name }) => (
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
      { Header: "WBS", accessor: "Restro", width: "15%", align: "center" },
      { Header: "Effort Type", accessor: "lestro", align: "center" },
      { Header: "Sun/Mar/27", accessor: "vestro", align: "center" },
      { Header: "Mon/Mar/28", accessor: "sestro", align: "center" },
      { Header: "Tue/Mar/29", accessor: "pestro", align: "center" },
      { Header: "Wed/Mar/30", accessor: "kestro", align: "center" },
      { Header: "Thu/Mar/31", accessor: "mestro", align: "center" },
      { Header: "Fri/Apr/01", accessor: "nestro", align: "center" },
      { Header: "Sat/Apr/02", accessor: "destro", align: "center" },
      { Header: "Total", accessor: "estro", align: "center" },
    ],

    rows: [
      {
        Restro: <Restro name="3MRCR-301012<Sep02Proj13>" />,
        lestro: <Job description="Overtime" />,
        vestro: <Job description="" />,
        sestro: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8.0+
          </MDTypography>
        ),
        pestro: <Job description="" />,
        kestro: <Job description="" />,
        mestro: <Job description="" />,
        nestro: <Job description="" />,
        destro: <Job description="" />,
        estro: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8
          </MDTypography>
        ),
      },
      {
        Restro: <Restro name="3MRCR-301012<Sep02Proj13>" />,
        lestro: <Job description="Regular" />,
        vestro: <Job description="" />,
        sestro: <Job description="" />,
        pestro: <Job description="" />,
        kestro: <Job description="" />,
        mestro: <Job description="" />,
        nestro: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8.0+
          </MDTypography>
        ),
        destro: <Job description="" />,
        estro: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            16
          </MDTypography>
        ),
      },
      {
        Restro: <Restro name="Total(Regular+Overtime)" />,
        lestro: <Job description="" />,
        vestro: <Job description="" />,
        sestro: <Job description="" />,
        pestro: <Job description="" />,
        kestro: <Job description="" />,
        mestro: <Job description="" />,
        nestro: <Job description="" />,
        destro: <Job description="" />,
        estro: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            16
          </MDTypography>
        ),
      },
    ],
  };
}
