import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { AddGlobalUnit } from "./AddGlobalUnit";
import { GlobalUnit } from "./GlobalUnit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


export const GlobalUnits = ({globalUnits,setOpenGlobalUnitForm}) => {
  const [visibleDesc, setVisibleDesc] = React.useState(false);
  return (
    <Box display="flex" flexDirection="column" sx={{ width: "80%" }} gap={2}>
      <Box display="flex" flexDirection="row" gap={1}>
        <Typography variant="h2">Global Units</Typography>
        {!visibleDesc && (
          <KeyboardArrowDownIcon
            sx={{ cursor: "pointer", title: "Show description" }}
            onClick={() => setVisibleDesc(true)}
          />
        )}
        {visibleDesc && (
          <KeyboardArrowUpIcon
            sx={{ cursor: "pointer", title: "Hide description" }}
            onClick={() => setVisibleDesc(false)}
          />
        )}
      </Box>
      {visibleDesc && (
        <Typography>A global unit is regroupement of jobs</Typography>
      )}
      {globalUnits.map((globalUnit) => {
        return <GlobalUnit globalUnit={globalUnit} />;
      })}
      <AddGlobalUnit setOpen={setOpenGlobalUnitForm} />
    </Box>
  );
};
