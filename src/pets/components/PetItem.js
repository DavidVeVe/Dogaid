import React from "react";
import { Link } from "react-router-dom";

import styles from "./PetItem.module.css";

const petItem = (props) => {
  let pet;

  if (props.showDescription) {
    pet = (
      <div className={[styles.petItem__card, props.className].join(" ")}>
        <img src={props.image} alt="pet" />
        <h3>{props.name}</h3>
        <h4>{props.age}</h4>
        <h5>
          Rescuer: <span>{props.rescuer}</span>
        </h5>
        <p>{props.about}</p>
      </div>
    );
  } else {
    pet = (
      <Link className={styles.link} to={`/${props.id}/pet`}>
        <div className={[styles.petItem__card, props.className].join(" ")}>
          <img src={props.image} alt="pet" />
          <h3>{props.name}</h3>
          <h4>{props.age}</h4>
        </div>
      </Link>
    );
  }

  return pet;
};

export default petItem;
