import React from "react";
import BackLink from "../BackLink";

// Component to display an error
const Error = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
      <BackLink />
    </>
  );
};

export default Error;
