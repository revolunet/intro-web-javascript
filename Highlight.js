import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Highlight = props => (
  <SyntaxHighlighter
    className="highlight"
    customStyle={{ minWidth: 600, fontSize: "0.4em" }}
    {...props}
  />
);

export default Highlight;
