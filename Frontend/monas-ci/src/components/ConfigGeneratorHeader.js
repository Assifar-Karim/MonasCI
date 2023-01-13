import * as React from "react";

import { Box, Typography } from "@mui/material";

import logo from "res/img/MonasCI-logo.png";

export const ConfigGeneratorHeader = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box display="flex" flexDirection="row" gap={1}>
        <Box
          component="img"
          src={logo}
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            height: "30px",
          }}
        />
        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "18px",
            // letterSpacing: '.3rem',
            textDecoration: "none",
          }}
        >
          {"MonasCI"}
        </Typography>
      </Box>
      <Typography variant="h1">Config File Generator</Typography>{" "}
    </Box>
  );
};
