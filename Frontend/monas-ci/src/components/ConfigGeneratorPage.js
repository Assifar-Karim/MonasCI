import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { ConfigGeneratorHeader } from "./ConfigGeneratorHeader";
import { Configuration } from "./Configuration";
import { GlobalUnitForm } from "./GlobalUnitForm";
import { GlobalUnits } from "./GlobalUnits";
import { JobForm } from "./JobForm";
import { JobList } from "./JobList";
import { generateConfigFile } from "service/monasCIService";
import { ConfigFileView } from "./ConfigFileView";

export const ConfigGeneratorPage = () => {
  const [ciConfig, setCiConfig] = React.useState({
    jobs: [],
    globalUnits: [],
    targetCi: "circleCI",
  });
  const [configFileResponse, setConfigFileResponse] = React.useState("");
  const [currentJob, setCurrentJob] = React.useState({
    name: "",
    docker: "",
    commands: [],
    envVars: [],
    dependencies: [],
  });
  const [currentGlobalUnit, setCurrentGlobalUnit] = React.useState({
    name: "",
    jobs: [],
    depends_on: [],
  });
  const [openJobForm, setOpenJobForm] = React.useState(false);
  const [openGlobalUnitForm, setOpenGlobalUnitForm] = React.useState(false);
  const setJobs = (jobs) => setCiConfig({ ...ciConfig, jobs });
  const setGlobalUnits = (globalUnits) =>
    setCiConfig({ ...ciConfig, globalUnits });
  const setTargetCi = (targetCi) => setCiConfig({ ...ciConfig, targetCi });
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ mt: 4, mb: 8, width: "80%", mx: "auto" }}
      alignItems="center"
      gap={5}
    >
      <ConfigGeneratorHeader />
      <JobList
        jobs={ciConfig.jobs}
        setOpenJobForm={setOpenJobForm}
        setJobs={setJobs}
        setCurrentJob={setCurrentJob}
      />
      <JobForm
        open={openJobForm}
        setOpen={setOpenJobForm}
        currentJob={currentJob}
        jobs={ciConfig.jobs}
        setJobs={setJobs}
      />
      <GlobalUnits
        globalUnits={ciConfig.globalUnits}
        setOpenGlobalUnitForm={setOpenGlobalUnitForm}
        setCurrentGlobalUnit={setCurrentGlobalUnit}
        setGlobalUnits={setGlobalUnits}
      />
      <GlobalUnitForm
        jobs={ciConfig.jobs}
        open={openGlobalUnitForm}
        setOpen={setOpenGlobalUnitForm}
        globalUnits={ciConfig.globalUnits}
        currentGlobalUnit={currentGlobalUnit}
        setGlobalUnits={setGlobalUnits}
      />
      <Configuration setTargetCi={setTargetCi} />
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "none", width: "40%" }}
        onClick={() => generateConfigFile(ciConfig, setConfigFileResponse)}
      >
        Generate Config file
      </Button>
      <ConfigFileView configFile={configFileResponse} />
    </Box>
  );
};
