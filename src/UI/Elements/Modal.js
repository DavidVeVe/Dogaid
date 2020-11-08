import React, { Fragment, useContext } from "react";

import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.clicked} />
      {props.show ? <div className={styles.modal}>{props.children}</div> : null}
    </Fragment>
  );
};

export default Modal;
