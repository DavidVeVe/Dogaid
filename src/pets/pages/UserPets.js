import React from "react";

import PetsList from "../components/PetsList";

import PETS_DATA from "../../shared/util/Mock/petsData";

import "./UserPets.module.css";

const UserPets = (props) => {
  return <PetsList showInfo items={PETS_DATA} />;
};

export default UserPets;
