import React from "react";

import PetItem from "./PetItem";
import styles from "./PetsList.module.css";

const PetsList = (props) => {
  return (
    <div className={[styles.petList, props.className].join(" ")}>
      {props.items.map((pet) => {
        return (
          <PetItem
            id={pet.id}
            key={pet.id}
            petName={pet.petName}
            image={pet.image}
            age={pet.age}
            rescuerName={pet.rescuerName}
            about={pet.about}
            className={props.itemClassname}
            yearsOld={pet.yearsOld}
            showInfo={props.showInfo}
          />
        );
      })}
    </div>
  );
};

export default PetsList;
