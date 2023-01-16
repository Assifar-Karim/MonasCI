import axios from "axios";

export const generateConfigFile = (
  ciConfig = {
    jobs: [],
    globalUnits: [],
  },
  setConfigFileResponse
) => {
  let requestBody = prepareRequestBody(ciConfig);
  console.log(requestBody);
  axios
    .post("http://localhost:8080/forwards", requestBody)
    .then((response) => {
      console.log(response.data);
      setConfigFileResponse(response.data);
    });
};

function prepareRequestBody(ciConfig) {
  let requestBody = {};
  let flexmiGcipm = prepareFlexmiGcipm(ciConfig);
  requestBody.sourceFlexmi = flexmiGcipm;
  requestBody.targetCI = ciConfig.targetCi;
  return requestBody;
}

function prepareFlexmiGcipm(ciConfig) {
  let flexmiGcipm = "<?nsuri gcipm?>";
  flexmiGcipm += "<pipeline>";
  flexmiGcipm += prepareFlexmiGlobalUnits(ciConfig.globalUnits, ciConfig.jobs);
  flexmiGcipm += "</pipeline>";
  return flexmiGcipm;
}

function prepareFlexmiGlobalUnits(globalUnits, jobs) {
  let flexmiGlobalUnits = "";
  globalUnits.forEach((globalUnit) => {
    flexmiGlobalUnits += prepareFlexmiGlobalUnit(globalUnit, jobs);
  });
  return flexmiGlobalUnits;
}

function prepareFlexmiGlobalUnit(globalUnit, jobs) {
  let flexmiGlobalUnit = "";
  flexmiGlobalUnit += `<globalUnit name="${globalUnit.name}">`;
  globalUnit.jobs.forEach((jobName) => {
    let job = getJobByName(jobs, jobName);
    flexmiGlobalUnit += prepareFlexmiJob(job);
  });
  flexmiGlobalUnit += "</globalUnit>";
  return flexmiGlobalUnit;
}

const getJobByName = (jobs, jobName) => {
  return jobs.find((job) => job.name === jobName);
};
function prepareFlexmiJob(job) {
  let flexmiJob = `<job name="${job.name}">`;
  flexmiJob += `<docker imageName="${job.docker}"/>`;
  job.commands.forEach((command) => {
    flexmiJob += `<command name="${command.name}" task="${command.task}"/>`;
  });
  job.envVars.forEach((envVar) => {
    flexmiJob += `<environmentVar key="${envVar.name}" value="${envVar.value}"/>`;
  });
  job.dependencies.forEach((dependency) => {
    flexmiJob += `<dependency dependencies="${dependency.name}"/>`;
  });
  flexmiJob += "</job>";
  return flexmiJob;
}
