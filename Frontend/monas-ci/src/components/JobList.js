import { Box, Typography } from "@mui/material";
import * as React from "react";
import { AddJob } from "./AddJob";
import { Job } from "./Job";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const jobs = [
  {
    name: "Job1",
    docker: "ubuntu:latest",
    commands: ["echo 'hello'", "mv hello.txt /test"],
    envVars: [ { name: "TEST", value: "test" } ],
    dependencies: ["Job2"],
  },
  {
    name: "Job2",
    docker: "ubuntu:latest",
    commands: ["echo 'hello'", "echo 'hello'"],
    envVars: [ { name: "TEST", value: "test" }, { name: "TEST2", value: "test2" } ],
    dependencies: ["Job1"],
  },
];

export const JobList = () => {
  const [visibleDesc, setVisibleDesc] = React.useState(false);

  return (
    <Box display="flex" flexDirection="column" sx={{ width: "80%" }} gap={2}>
      <Box display="flex" flexDirection="row" gap={1}>
        <Typography variant="h2">Jobs</Typography>
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
        <Typography>
          A job is a singular execution unit that contains a set commands
        </Typography>
      )}
      {jobs.map((job) => {
        return <Job job={job} />;
      })}
      <AddJob />
    </Box>
  );
};
