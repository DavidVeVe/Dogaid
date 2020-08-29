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
            name={pet.name}
            image={pet.image}
            age={pet.age}
            rescuer={pet.rescuer}
            about={pet.about}
            className={props.itemClassname}
            yearsOld={pet.yearsOld}
            showDescription={props.showDescription}
          />
        );
      })}
    </div>
  );
};

export default PetsList;
