import React from "react";

import UsersList from "../components/UsersList";
import styles from "./Users.module.css";

const usersMock = [
  {
    id: 1,
    name: "David",
    image:
      "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    pet: {
      petId: 1,
      name: "pet1",
    },
  },
  {
    id: 2,
    name: "John",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    pet: {
      petId: 2,
      name: "pet2",
    },
  },
  {
    id: 3,
    name: "Anna",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    pet: {
      petId: 3,
      name: "pet3",
    },
  },
  {
    id: 4,
    name: "Perla",
    image:
      "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    pet: {
      petId: 4,
      name: "pet4",
    },
  },
  {
    id: 5,
    name: "Dena",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    pet: {
      petId: 5,
      name: "pet5",
    },
  },
];

const Users = () => {
  return (
    <section className={styles.users__container}>
      <UsersList items={usersMock} />
    </section>
  );
};

export default Users;
