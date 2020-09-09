import React, { useState } from "react";

import Button from "../../UI/Elements/Button";
import styles from "./PetItem.module.css";

const PetItem = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  let pet;

  if (props.showInfo) {
    pet = (
      <div className={[styles.petItem__card, props.className].join(" ")}>
        <img src={props.image} alt="pet" />
        <h3>{props.petName}</h3>
        <h4>{props.age}</h4>
        <h5>
          Rescuer: <span>{props.rescuerName}</span>
        </h5>
        <p>{props.about}</p>
        <div className={styles.petItemBtns}>
          {isAuthenticated && <Button to={`/pets/${props.id}`}>Editar</Button>}
        </div>
      </div>
    );
  } else {
    pet = (
      <div className={[styles.petItem__card, props.className].join(" ")}>
        <img src={props.image} alt="pet" />
        <h3>{props.petName}</h3>
        <h4>{props.age}</h4>
        <div className={styles.petItemBtns}>
          <Button to={`/${props.id}/pet`}>Ver</Button>
          {isAuthenticated && <Button to={`/pets/${props.id}`}>Editar</Button>}
        </div>
      </div>
    );
  }

  return pet;
};

export default PetItem;
