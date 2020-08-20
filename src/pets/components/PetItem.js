import React from "react";
import { Link } from "react-router-dom";

import styles from "./PetItem.module.css";

const petItem = (props) => {
  return (
    <Link className={styles.link} to={`/${props.id}/pet`}>
      <div className={[styles.petItem__card, props.className].join(" ")}>
        <img src={props.image} alt="pet" />
        <h3>{props.name}</h3>
        <h4>{props.age}</h4>
        <h5>
          Helper: <span>{props.helper}</span>
        </h5>
        <p>{props.about}</p>
      </div>
    </Link>
  );
};

export default petItem;
