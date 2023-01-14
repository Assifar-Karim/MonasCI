import * as React from "react";

export const ConfigFileResult = ({ config }) => {
  return (
    <div>
      <h1>Config File Result</h1>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
};
