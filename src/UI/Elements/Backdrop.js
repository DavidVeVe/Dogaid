import React from "react";

import styles from "./Backdrop.module.css";

const Backdrop = (props) =>
  props.show ? (
    <div onClick={props.clicked} className={styles.backdrop}></div>
  ) : null;

export default Backdrop;
