import React, { Fragment, useContext, useState } from "react";

import Button from "../../UI/Elements/Button";
import Modal from "../../UI/Elements/Modal.js";
import PetDeleteWarning from "./PetDeleteWarning";
import { AuthContext } from "../../shared/context/auth-context";
import styles from "./PetItem.module.css";

const PetItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const auth = useContext(AuthContext);

  const modalToggler = () => {
    setShowModal(!showModal);
  };

  let pet;
  let petAge;

  if (props.age < 12) {
    petAge = "Puppy";
  } else if (props.age > 12 && props.age < 84) {
    petAge = "Adult";
  } else {
    petAge = "Senior";
  }

  if (props.showInfo) {
    pet = (
      <Fragment>
        <div className={[styles.petItem__card, props.className].join(" ")}>
          <div
            style={{ backgroundImage: `url(${props.image})` }}
            className={styles.petItem_image}
          ></div>
          <h3>{props.petName}</h3>
          <h4>{petAge}</h4>
          <p className={styles.pet__description}>{props.petDescription}</p>
          <div>
            <p>{props.rescuerName}</p>
            <div>
              <a href={`tel:+${props.phone}`}>{props.phone}</a>
              <br />
              <a href={`mailto:${props.email}`}>{props.email}</a>
            </div>
          </div>
          <div className={styles.petItemBtns}>
            {auth.isLoggedIn && (
              <Button to={`/pets/${props.id}`}>Editar</Button>
            )}
            {auth.isLoggedIn && <Button onClick={modalToggler}>Delete</Button>}
          </div>
        </div>
        <Modal show={showModal} clicked={modalToggler}>
          <PetDeleteWarning
            petName={props.petName}
            cancelDeletion={modalToggler}
          />
        </Modal>
      </Fragment>
    );
  } else {
    pet = (
      <Button to={`/${props.id}/pet`} className={styles.petItem__cardWrapper}>
        <div className={[styles.petItem__card, props.className].join(" ")}>
          <div
            style={{ backgroundImage: `url(${props.image})` }}
            className={styles.petItem__card_image}
          ></div>
          <h3>{props.petName}</h3>
          <div className={styles.petItemBtns}></div>
        </div>
      </Button>
    );
  }

  return pet;
};

export default PetItem;
