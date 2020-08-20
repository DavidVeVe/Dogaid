import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <Fragment>
      <MainHeader>
        <h1 className={styles.home__link}>
          <Link to="/">Dog-Aid</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
