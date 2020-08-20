import React from "react";

import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.nav__wrapper}>{props.children}</div>
    </header>
  );
};

export default MainHeader;
