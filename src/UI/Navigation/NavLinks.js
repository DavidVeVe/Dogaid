import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <Fragment>
      <ul className={styles.nav__links}>
        <li>
          <Link to="/pets">Pets</Link>
        </li>
        {/* <li>
          <Link to="/users">Users</Link>
        </li> */}
        <li>
          <Link to="/user1/pets">My pets</Link>
        </li>
        <li>
          <Link to="/pets/new">Add pet</Link>
        </li>
        <li>
          <Link to="/auth">Login / Signup</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavLinks;
