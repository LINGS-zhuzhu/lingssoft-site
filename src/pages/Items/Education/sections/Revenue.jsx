
import React, { useContext, useMemo } from "react";
import { Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { ThemeModeContext } from "context/ThemeModeContext";

function Revenue() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeModeContext);

  const revenueItems = useMemo(() => {
    return t("solutions.education.revenue.items", { returnObjects: true }) || [];
  }, [t]);

  return (
    <MKBox
      component="section"
      py={{ xs: 6, lg: 10 }}
      sx={{ background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)" }}
    >
      <Container>
        <Grid container item xs={12} lg={6} mb={8}>
          <MKTypography variant="h3" color={darkMode ? "white" : "dark"} mb={2}>
            {t("solutions.education.revenue.title")}
          </MKTypography>
          <MKTypography variant="body1" color={darkMode ? "white" : "text"} opacity={0.8}>
            우리는 기술적인 서포트를 넘어, 함께 성장하는 파트너로서 최선을 다합니다.
          </MKTypography>
        </Grid>
        
        <Grid container spacing={3}>
          {revenueItems.map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <MKBox
                p={3}
                sx={{
                  backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.9)",
                  borderRadius: "16px",
                  height: "100%",
                  border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"}`,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  }
                }}
              >
                <MKTypography
                  variant="h2"
                  color="info"
                  opacity={0.3}
                  sx={{
                    fontFamily: "var(--font-primary)",
                    lineHeight: 1,
                    mb: 2,
                  }}
                >
                  0{index + 1}
                </MKTypography>
                <MKTypography variant="h5" color={darkMode ? "white" : "dark"} mb={2}>
                  {item.title}
                </MKTypography>
                <MKTypography variant="body2" color={darkMode ? "white" : "text"} opacity={0.7}>
                  {item.description}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Revenue;
