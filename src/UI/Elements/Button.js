import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    );
  }

  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact} className={props.className}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      type={props.type}
      className={[styles.btn__component, props.className].join(" ")}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
