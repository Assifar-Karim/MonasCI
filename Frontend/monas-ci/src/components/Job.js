import { Box, Chip, Stack, Typography } from "@mui/material";
import * as React from "react";
import WorkIcon from "@mui/icons-material/Work";
import CommandCodeSnippet from "./CommandCodeSnippet";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Job = ({ job }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ bgcolor: "#E7E7E7", borderRadius: 2, p: 2 }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="row" gap={1} alignItems="center">
          <WorkIcon color="primary" />
          <Typography color="primary" fontWeight="bold">
            {job.name}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap={1}>
          <EditIcon
            sx={{
              cursor: "pointer",
              title: "Edit job",
              color: "grey.100",
              "&:hover": {
                color: "primary.main",
              },
            }}
            fontSize="small"
          />
          <DeleteIcon
            sx={{
              cursor: "pointer",
              title: "Delete job",
              color: "grey.100",
              "&:hover": {
                color: "secondary.main",
              },
            }}
            fontSize="small"
          />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap={1} alignItems="center">
        <Typography variant="h4">Docker:</Typography>
        <Typography variant="body1" color="secondary" fontStyle="italic">
          {job.docker}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" gap={3} alignItems="flex-start">
        <Typography variant="h4">Commands:</Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          {job.commands.map((command) => (
            <CommandCodeSnippet content={command} />
          ))}
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap={3} alignItems="flex-start">
        <Typography variant="h4">Environment Variables:</Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          {job.envVars.map((envVar) => (
            <Typography variant="body1">
              {envVar.name}={envVar.value}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap={3} alignItems="center">
        <Typography variant="h4">Dependencies:</Typography>
        <Stack direction="row" spacing={1}>
          {job.dependencies.map((globalUnit) => (
            <Chip
              icon={<WorkIcon />}
              size="small"
              label={globalUnit}
              color="primary"
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
