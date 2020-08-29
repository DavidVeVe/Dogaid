import React from "react";

import PetsList from "../components/PetsList";

import petsData from "../../shared/util/Mock/petsData";
import styles from "./Pets.module.css";

const Pets = (props) => {
  return (
    <section className={styles.pets__container}>
      <h1>Pets available for adoption</h1>
      <PetsList items={petsData} />
    </section>
  );
};

export default Pets;
