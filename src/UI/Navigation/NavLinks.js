import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../shared/context/auth-context";

import styles from "./NavLinks.module.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <Fragment>
      <ul className={styles.nav__links}>
        <li>
          <Link to="/pets">Adoption</Link>
        </li>
        {auth.isLoggedIn ? (
          <li>
            <Link to="/Peter Parker/pets">My shelter</Link>
          </li>
        ) : null}
        {auth.isLoggedIn ? (
          <li>
            <Link to="/pets/new">Add a pet</Link>
          </li>
        ) : null}
        {!auth.isLoggedIn ? (
          <li>
            <Link to="/auth">Log in / Sign up</Link>
          </li>
        ) : null}
        {auth.isLoggedIn && (
          <li>
            <Link onClick={auth.logout} to="/auth">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default NavLinks;
