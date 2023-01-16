import * as React from "react";

import { Box, Typography } from "@mui/material";

export const AddGlobalUnit = ({ setOpen, setCurrentGlobalUnit }) => {
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
      onClick={() => {
        setCurrentGlobalUnit({
          name: "",
          jobs: [],
          depends_on: [],
        });
        setOpen(true);
      }}
    >
      <Box>
        <Typography variant="h3">Add Global Unit</Typography>
      </Box>
    </Box>
  );
};
