// example Layout.js
import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      color: "#2a2135",
      textAlign: "center",
      backgroundColor: "#fbf4ff",
    }}
  >
    {children}
  </div>
);
