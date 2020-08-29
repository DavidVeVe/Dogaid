import React from "react";

import Button from "../UI/Elements/Button";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.home__title}>
        <h1>Find the right pet for you</h1>
        <h2>or help a pet find a new home</h2>
      </div>
      <Button to="/pets">See pets</Button>
    </section>
  );
};

export default Home;
