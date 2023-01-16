import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import SchemaIcon from "@mui/icons-material/Schema";

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

export const GlobalUnitForm = ({
  jobs,
  globalUnits,
  open,
  setOpen,
  currentGlobalUnit,
  setGlobalUnits,
}) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [job, setJob] = React.useState([]);
  const [dependsOn, setDependsOn] = React.useState([]);

  const [globalUnit, setGlobalUnit] = React.useState({
    name: "",
    jobs: [],
    depends_on: [],
  });

  React.useEffect(() => {
    setGlobalUnit(currentGlobalUnit);
  }, [currentGlobalUnit]);

  const handleNameChange = (e) => {
    setGlobalUnit({ ...globalUnit, name: e.target.value });
  };

  const handleSubmit = () => {
    console.log(globalUnit);
    let index = globalUnits
      .map((globalUnit) => globalUnit.name)
      .indexOf(globalUnit.name);
    if (index === -1) {
      console.log(index);
      globalUnits.push(globalUnit);
      setGlobalUnits(globalUnits);
    } else {
      console.log(index);
      globalUnits.splice(index, 1);
      globalUnits.push(globalUnit);
      setGlobalUnits(globalUnits);
    }
    setOpen(false);
  };

  const handleDependencySelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setJob(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setGlobalUnit({ ...globalUnit, jobs: value });
  };

  const handleDependsOnSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setDependsOn(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setGlobalUnit({ ...globalUnit, depends_on: value });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h2">Add Global Unit</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={5}>
              <Typography>Name</Typography>
              <TextField
                size="small"
                value={globalUnit.name}
                sx={{ width: 150 }}
                onChange={handleNameChange}
              />
            </Box>
            <Box display="flex" flexDirection="row" gap={5} alignItems="center">
              <Typography>Jobs:</Typography>
              <FormControl sx={{ width: 300 }}>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  size="small"
                  value={job}
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
            <Box display="flex" flexDirection="row" gap={5} alignItems="center">
              <Typography>Depends On:</Typography>
              <FormControl sx={{ width: 300 }}>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  size="small"
                  value={dependsOn}
                  onChange={handleDependsOnSelectChange}
                  input={<OutlinedInput id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          icon={<SchemaIcon />}
                          size="small"
                          color="secondary"
                        />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {globalUnits.map((globalUnit) => (
                    <MenuItem key={globalUnit.name} value={globalUnit.name}>
                      {globalUnit.name}
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
