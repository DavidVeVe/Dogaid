import React from "react";

import Button from "../../UI/Elements/Button";

import styles from "./PetDeleteWarning.module.css";

const PetDeleteWarning = (props) => {
  return (
    <div className={styles.PetDeleteWarning}>
      <h1>Are you sure you want to delete {props.petName}</h1>
      <div className={styles.PetDeleteWarning__btns}>
        <Button onClick={props.cancelDeletion}>Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  );
};

export default PetDeleteWarning;
