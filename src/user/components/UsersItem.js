import React from "react";
import { Link } from "react-router-dom";

import styles from "./UsersItem.module.css";

const UsersItem = (props) => {
  return (
    <div className={[styles.user__card, props.className].join(" ")}>
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
      <h2>Pet: {props.pet.name}</h2>
    </div>
  );
};

export default UsersItem;
