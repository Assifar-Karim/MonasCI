import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";

import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CommandCodeSnippet from "./CommandCodeSnippet";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const JobForm = ({ jobs, open, setOpen, currentJob, setJobs }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dependency, setDependency] = React.useState([]);

  const [job, setJob] = React.useState({
    name: "",
    docker: "",
    commands: [],
    envVars: [],
    dependencies: [],
  });
  const [envVar, setEnvVar] = React.useState({ name: "", value: "" });
  const [command, setCommand] = React.useState({ name: "", task: "" });

  React.useEffect(() => {
    setJob(currentJob);
  }, [currentJob]);

  const handleCommandNameChange = (e) => {
    setCommand({ ...command, name: e.target.value });
  };
  const handleCommandTaskChange = (e) => {
    setCommand({ ...command, task: e.target.value });
  };

  const addCommand = () => {
    setJob({ ...job, commands: [...job.commands, command] });
    setCommand({ name: "", task: "" });
  };

  const handleSubmit = () => {
    console.log(job);
    let index = jobs.map((job) => job.name).indexOf(job.name);
    if (index === -1) {
      console.log(index);
      jobs.push(job);
      setJobs(jobs);
    } else {
      console.log(index);
      jobs.splice(index, 1);
      jobs.push(job);
      setJobs(jobs);
    }
    setOpen(false);
  };

  const handleCommandDelete = (index) => {
    let commands = job.commands;
    commands.splice(index, 1);
    setJob({ ...job, commands });
  };

  const handleEnvVarDelete = (index) => {
    let envVars = job.envVars;
    envVars.splice(index, 1);
    setJob({ ...job, envVars });
  };

  const addEnvVar = () => {
    setJob({ ...job, envVars: [...job.envVars, envVar] });
    setEnvVar({ name: "", value: "" });
  };

  const handleNameChange = (e) => {
    setJob({ ...job, name: e.target.value });
  };
  const handleEnvNameChange = (e) => {
    setEnvVar({ ...envVar, name: e.target.value });
  };
  const handleEnvValueChange = (e) => {
    setEnvVar({ ...envVar, value: e.target.value });
  };

  const handleDockerChange = (e) => {
    setJob({ ...job, docker: e.target.value });
  };
  const handleDependencySelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setDependency(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setJob({ ...job, dependencies: value });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h2">Add Job</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={5}>
              <Typography>Name</Typography>
              <TextField
                size="small"
                value={job.name}
                sx={{ width: 150 }}
                onChange={handleNameChange}
              />
            </Box>
            <Box display="flex" flexDirection="row" gap={5} alignItems="center">
              <Typography>Docker</Typography>
              <TextField
                size="small"
                value={job.docker}
                sx={{ width: 150 }}
                onChange={handleDockerChange}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap={5}
              alignItems={job.commands.length === 0 ? "center" : "flex-start"}
            >
              <Typography>Commands:</Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                {job.commands.map((command, index) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography variant="h4">{command.name}</Typography>
                    <CommandCodeSnippet content={command.task} />
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleCommandDelete(index)}
                    />
                  </Box>
                ))}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={1}
                >
                  <Typography>Name</Typography>
                  <TextField
                    name="commandName"
                    size="small"
                    value={command.name}
                    sx={{ width: 150 }}
                    onChange={handleCommandNameChange}
                  />
                  <Typography>Task</Typography>
                  <TextField
                    size="small"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addCommand();
                      }
                    }}
                    onChange={handleCommandTaskChange}
                    value={command.task}
                  />
                  <AddIcon sx={{ cursor: "pointer" }} onClick={addCommand} />
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap={5}
              alignItems={job.envVars.length === 0 ? "center" : "flex-start"}
            >
              <Typography>Environment Variables:</Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                {job.envVars.map((envVar, index) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography variant="body1">
                      {envVar.name}={envVar.value}
                    </Typography>
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleEnvVarDelete(index)}
                    />
                  </Box>
                ))}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={1}
                >
                  <Typography>Name</Typography>
                  <TextField
                    name="envVarName"
                    size="small"
                    value={envVar.name}
                    sx={{ width: 150 }}
                    onChange={handleEnvNameChange}
                  />
                  <Typography>Value</Typography>
                  <TextField
                    name="envVarValue"
                    size="small"
                    value={envVar.value}
                    sx={{ width: 150 }}
                    onChange={handleEnvValueChange}
                  />
                  <AddIcon sx={{ cursor: "pointer" }} onClick={addEnvVar} />
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" gap={5} alignItems="center">
              <Typography>Dependencies:</Typography>
              <FormControl sx={{ width: 300 }}>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  size="small"
                  value={dependency}
                  onChange={handleDependencySelectChange}
                  input={<OutlinedInput id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          icon={<WorkIcon />}
                          size="small"
                          color="primary"
                        />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {jobs.map((job) => (
                    <MenuItem key={job.name} value={job.name}>
                      {job.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ textTransform: "none" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ textTransform: "none" }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
