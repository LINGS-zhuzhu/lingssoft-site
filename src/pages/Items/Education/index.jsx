
import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

// Education page sections
import Header from "pages/Items/Education/sections/Header";
import Themes from "pages/Items/Education/sections/Themes";
import Revenue from "pages/Items/Education/sections/Revenue";

function EducationPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MKBox component="main" bgColor={isDark ? "dark" : "white"} minHeight="100vh">
      <DefaultNavbar
        routes={routes}
        sticky
        light={isDark}
        transparent={true}
      />
      <MKBox>
        <Header />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white, dark }, functions: { rgba } }) =>
              isDark ? rgba(dark.main, 0.8) : rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Themes />
          <Revenue />
        </Card>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

export default EducationPage;
