import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, onClick, children, className, ...props }) => {
  return (
    <Link to={to} className={`btn ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default Button;
