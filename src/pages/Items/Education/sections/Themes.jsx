
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mui/material";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { ThemeModeContext } from "context/ThemeModeContext";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Themes() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeModeContext);

  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid container item xs={12} lg={6} mb={6}>
          <MKTypography variant="h3" color={darkMode ? "white" : "dark"} mb={2}>
            Core Value
          </MKTypography>
          <MKTypography variant="body1" color={darkMode ? "white" : "text"} opacity={0.8}>
            {t("solutions.education.description")}
          </MKTypography>
        </Grid>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon="school"
              title={t("solutions.education.themes.branding.title")}
              description={t("solutions.education.themes.branding.description")}
              color="info"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon="storage"
              title={t("solutions.education.themes.data.title")}
              description={t("solutions.education.themes.data.description")}
              color="info"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon="group"
              title={t("solutions.education.themes.interaction.title")}
              description={t("solutions.education.themes.interaction.description")}
              color="info"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Themes;
