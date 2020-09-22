import React from "react";

import Button from "../../UI/Elements/Button";

import styles from "./PetContactCta.module.css";

const PetContactCta = (props) => {
  return (
    <div className={styles.petCta__wrapper}>
      <Button className={styles.petCta__btn}>Ask about {props.petName}</Button>
      <div className={styles.petCta__bottom__btns}>
        <Button className={styles.petCta__bottom_btn}>Donate</Button>
        <Button className={styles.petCta__bottom_btn}>Share</Button>
      </div>
    </div>
  );
};

export default PetContactCta;
