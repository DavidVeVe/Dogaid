import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <Fragment>
      <ul className={styles.nav__links}>
        <li>
          <Link to="/pets">Adoption</Link>
        </li>
        <li>
          <Link to="/John/pets">My pets</Link>
        </li>
        <li>
          <Link to="/pets/new">Add a pet</Link>
        </li>
        <li>
          <Link to="/auth">Log in / Sign up</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavLinks;
