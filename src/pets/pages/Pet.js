import React from "react";

import styles from "./Pet.module.css";
import { useParams } from "react-router-dom";
import PetsList from "../components/PetsList";

const petDataMock = [
  {
    id: 1,
    name: " pet1",
    image:
      "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "1 yo",
    helper: "John",
    about: "this is a description of pet1",
  },
  {
    id: 2,
    name: " pet2",
    image:
      "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "2 yo",
    helper: "John",
    about: "this is a description of pet2",
  },
  {
    id: 3,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 4,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 5,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 6,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 7,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 8,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 9,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 10,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
  {
    id: 11,
    name: "pet3",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    age: "3 yo",
    helper: "John",
    about: "this is a description of pet3",
  },
];

const Pet = (props) => {
  const petId = useParams().petId;

  console.log(typeof petId);

  const loadedPet = petDataMock.filter((pet) => {
    return pet.id === +petId;
  });

  return (
    <PetsList
      items={loadedPet}
      className={styles.pet}
      itemClassname={styles.petItem__card}
    />
  );
};

export default Pet;
