import React from "react";
import { useParams } from "react-router-dom";

import PetItem from "../components/PetItem";
import PetContactCta from "../components/PetContactCta";

import PETS_DATA from "../../shared/util/Mock/petsData";

import styles from "./Pet.module.css";

const Pet = () => {
  const petId = useParams().petId;

  const loadedPet = PETS_DATA.filter((pet) => {
    return pet.id === +petId;
  });

  return loadedPet.map((pet) => {
    return (
      <div className={styles.petPage__wrapper}>
        <PetItem
          id={pet.id}
          image={pet.image}
          petName={pet.petName}
          age={pet.age}
          petDescription={pet.petDescription}
          className={styles.petItem__card}
          email={pet.email}
          phone={pet.phone}
          rescuerName={pet.rescuerName}
          showInfo
        />
        <PetContactCta petData={pet} />
      </div>
    );
  });
};

export default Pet;
