import React, { useState } from "react";

import Button from "../../UI/Elements/Button";
import styles from "./PetItem.module.css";

const PetItem = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let pet;
  let petAge;

  if (props.age < 12) {
    petAge = "Cachorro";
  } else if (props.age > 12 && props.age < 84) {
    petAge = "Adulto";
  } else {
    petAge = "Anciano";
  }

  if (props.showInfo) {
    pet = (
      <div className={[styles.petItem__card, props.className].join(" ")}>
        <img src={props.image} alt="pet" />
        <h3>{props.petName}</h3>
        <h4>{petAge}</h4>
        <p>{props.petDescription}</p>
        <div className={styles.petItemBtns}>
          {isAuthenticated && <Button to={`/pets/${props.id}`}>Editar</Button>}
        </div>
      </div>
    );
  } else {
    pet = (
      <Button to={`/${props.id}/pet`} className={styles.petItem__cardWrapper}>
        <div className={[styles.petItem__card, props.className].join(" ")}>
          <img src={props.image} alt="pet" />
          <h3>{props.petName}</h3>
          <div className={styles.petItemBtns}>
            {isAuthenticated && (
              <Button to={`/pets/${props.id}`}>Editar</Button>
            )}
          </div>
        </div>
      </Button>
    );
  }

  return pet;
};

export default PetItem;
