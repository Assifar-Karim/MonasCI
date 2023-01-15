import * as React from "react";

import {
  Box,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #F8911E",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    color: "#F8911E",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#F8911E",
      boxShadow: "0 0 0 0.2rem rgb(248, 145, 30,.25)",
    },
  },
}));

export const Configuration = ({setTargetCi}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ my: 4, width: "80%", mx: "auto" }}
      gap={5}
    >
      <Typography variant="h2">Configuration</Typography>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Typography>Type</Typography>
        <FormControl variant="standard">
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
            defaultValue="CircleCI"
            sx={{ width: 150 }}
            onChange={(e) => {
              setTargetCi(e.target.value);
            }}
          >
            <MenuItem value="CircleCI">Circle CI</MenuItem>
            <MenuItem value="GitLabCI">GitLab CI</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
