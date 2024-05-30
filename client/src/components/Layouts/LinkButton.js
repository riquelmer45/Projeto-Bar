import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
};

export default LinkButton;
