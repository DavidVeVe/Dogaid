import React, { Fragment, useState } from "react";

import Button from "../../UI/Elements/Button";
import PetContactForm from "./PetContactForm";
import Modal from "../../UI/Elements/Modal";

import styles from "./PetContactCta.module.css";

const PetContactCta = (props) => {
  const [showModal, setShowModal] = useState(false);

  const modalToggler = () => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      <div className={styles.petCta__wrapper}>
        <Button onClick={modalToggler} className={styles.petCta__btn}>
          Ask about {props.petData.petName}
        </Button>
        <div className={styles.petCta__bottom__btns}>
          <Button className={styles.petCta__bottom_btn}>Donate</Button>
          <Button className={styles.petCta__bottom_btn}>Share</Button>
        </div>
      </div>
      <Modal show={showModal} clicked={modalToggler}>
        <PetContactForm clickedDelete={modalToggler} />
      </Modal>
    </Fragment>
  );
};

export default PetContactCta;
