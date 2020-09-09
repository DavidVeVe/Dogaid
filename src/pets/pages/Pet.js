import React from "react";
import { useParams } from "react-router-dom";

import PetsList from "../components/PetsList";

import PETS_DATA from "../../shared/util/Mock/petsData";

import styles from "./Pet.module.css";

const Pet = (props) => {
  const petId = useParams().petId;

  console.log(useParams());

  const loadedPet = PETS_DATA.filter((pet) => {
    return pet.id === +petId;
  });

  return (
    <PetsList
      items={loadedPet}
      className={styles.pet}
      itemClassname={styles.petItem__card}
      showInfo
    />
  );
};

export default Pet;
