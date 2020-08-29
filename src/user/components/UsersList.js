import React from "react";

import UsersItem from "./UsersItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <section className={[styles.usersList, props.className].join(" ")}>
      {props.items.map((user) => {
        return (
          <UsersItem
            key={user.id}
            name={user.name}
            image={user.image}
            pet={user.pet}
          />
        );
      })}
    </section>
  );
};

export default UsersList;
