import * as React from "react";

import { Box, Typography } from "@mui/material";

export const AddJob = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 100,
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), #FFFFFF",
        border: "1px dashed #000000",
        borderRadius: 2,
        cursor: "pointer",
      }}
      onClick={() => console.log("Add Global Unit")}
    >
      <Box>
        <Typography variant="h3">Add Job</Typography>
      </Box>
    </Box>
  );
};
