import React from "react";
import { useParams } from "react-router-dom";

import PetsList from "../components/PetsList";

import PETS_DATA from "../../shared/util/Mock/petsData";

import styles from "./UserPets.module.css";

const UserPets = (props) => {
  const rescuerName = useParams().userId;

  const loadedPets = PETS_DATA.filter((pet) => pet.rescuerName === rescuerName);

  return (
    <PetsList
      showInfo
      items={loadedPets}
      itemClassname={styles.petItem__cardMargin}
    />
  );
};

export default UserPets;
