import React, { Fragment, useState } from "react";

import Button from "../../UI/Elements/Button";
import Input from "../../UI/FormElements/Input";
import PetContactForm from "./PetContactForm";
import Modal from "../../UI/Elements/Modal";

import styles from "./PetContactCta.module.css";

const PetContactCta = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandlerToggler = () => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      <div className={styles.petCta__wrapper}>
        <Button
          onClick={showModalHandlerToggler}
          className={styles.petCta__btn}
        >
          Ask about {props.petData.petName}
        </Button>
        <div className={styles.petCta__bottom__btns}>
          <Button className={styles.petCta__bottom_btn}>Donate</Button>
          <Button className={styles.petCta__bottom_btn}>Share</Button>
        </div>
      </div>
      <Modal show={showModal} clicked={showModalHandlerToggler}>
        <PetContactForm />
      </Modal>
    </Fragment>
  );
};

export default PetContactCta;
