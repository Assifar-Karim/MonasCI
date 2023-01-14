import { Box, Chip, Stack, Typography } from "@mui/material";
import * as React from "react";
import SchemaIcon from "@mui/icons-material/Schema";
import WorkIcon from "@mui/icons-material/Work";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const GlobalUnit = ({ globalUnit }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ bgcolor: "#E7E7E7", borderRadius: 2, height: 100, p: 2 }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="row" gap={1}>
          <SchemaIcon color="primary" />
          <Typography color="primary" fontWeight="bold">
            {globalUnit.name}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap={1}>
          <EditIcon
            sx={{
              cursor: "pointer",
              title: "Edit Global Unit",
              color: "grey.100",
              "&:hover": {
                color: "primary.main",
              },
            }}
            fontSize="small"
            color="primary"
          />
          <DeleteIcon
            sx={{
              cursor: "pointer",
              title: "Delete Global Unit",
              color: "grey.100",
              "&:hover": {
                color: "secondary.main",
              },
            }}
            fontSize="small"
            color="secondary"
          />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        <Typography variant="h4">Jobs</Typography>
        <Stack direction="row" spacing={1}>
          {globalUnit.jobs.map((job) => (
            <Chip
              icon={<WorkIcon />}
              size="small"
              label={job}
              color="primary"
            />
          ))}
        </Stack>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        <Typography variant="h4">Depends On</Typography>
        <Stack direction="row" spacing={1}>
          {globalUnit.depends_on.map((globalUnit) => (
            <Chip
              icon={<SchemaIcon />}
              size="small"
              label={globalUnit}
              color="secondary"
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
