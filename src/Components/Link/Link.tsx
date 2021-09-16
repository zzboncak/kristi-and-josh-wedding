import React from "react";
import { LinkProps, Link as OGLink } from "react-router-dom";
import "./Link.css";

export const Link: React.FC<LinkProps> = (props) => {
  return <OGLink className="link" {...props} />;
};
