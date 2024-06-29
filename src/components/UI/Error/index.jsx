import React from "react";
import BackLink from "../BackLink";

// Component to display an error
const Error = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <BackLink title="Go Home" />
    </>
  );
};

export default Error;
