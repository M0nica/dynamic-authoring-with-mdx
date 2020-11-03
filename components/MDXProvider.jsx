import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import duotoneSea from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import SlidePage from "../layouts/SlidePage";
import Cover from "./Cover";
import SpeakerNotes from "./SpeakerNotes";
import Callout from "./Callout";
import { CountDown } from "./Countdown";
import { LiveCode } from "mdx-deck-live-code";

const mdComponents = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
  code: (props) => {
    const { className = "" } = props;
    const language = className.replace("language-", "");
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={duotoneSea}
        {...props}
      />
    );
  },
  Callout,
  CountDown,
  Cover,
  LiveCode,
  SlidePage,
  SpeakerNotes,
};

export default ({ children }) => (
  <MDXProvider components={mdComponents}>
    {" "}
    <MdxEmbedProvider>{children}</MdxEmbedProvider>
  </MDXProvider>
);
