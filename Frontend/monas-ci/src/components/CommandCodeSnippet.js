// @ts-ignore
import { coyWithoutShadows } from "react-syntax-highlighter/dist/cjs/styles/prism";
const React = require("react");
const {
  default: SyntaxHighlighter,
} = require("react-syntax-highlighter/dist/esm/prism");

const CommandCodeSnippet = ({ content }) => {
  return (
    <SyntaxHighlighter
      language="bash"
      style={coyWithoutShadows}
      customStyle={{ margin: 0, borderRadius: 4 }}
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default CommandCodeSnippet;
