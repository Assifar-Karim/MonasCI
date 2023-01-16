import { Box, Button } from "@mui/material";
import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

export const ConfigFileView = ({ configFile }) => {
  const [copied, setCopied] = React.useState(false);

  const copyText = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    configFile.length !== 0 && (
      <Box sx={{ width: "80%", position: "relative" }}>
        <SyntaxHighlighter
          language="yaml"
          style={atomDark}
          customStyle={{ fontSize: "14px" }}
        >
          {configFile}
        </SyntaxHighlighter>
        <CopyToClipboard text={configFile} onCopy={copyText}>
          <Button
            sx={{
              position: "absolute",
              minWidth: 0,
              right: 15,
              top: 15,
              p: 0.5,
            }}
            variant="outlined"
          >
            {copied ? <DoneIcon /> : <ContentCopyIcon />}
          </Button>
        </CopyToClipboard>
      </Box>
    )
  );
};
