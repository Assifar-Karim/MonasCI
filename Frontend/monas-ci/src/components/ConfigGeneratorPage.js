import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { ConfigGeneratorHeader } from "./ConfigGeneratorHeader";
import { Configuration } from "./Configuration";
import { GlobalUnits } from "./GlobalUnits";
import { JobList } from "./JobList";

export const ConfigGeneratorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ my: 4, width: "80%", mx: "auto" }}
      alignItems="center"
      gap={5}
    >
      <ConfigGeneratorHeader />
      <JobList />
      <GlobalUnits />
      <Configuration />
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "none", width: "40%" }}
      >
        Generate Config file
      </Button>
    </Box>
  );
};
