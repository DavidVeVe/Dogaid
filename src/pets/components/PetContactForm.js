import React, { useContext } from "react";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";

import styles from "./PetContactForm.module.css";

const PetContactForm = (props) => {
  const auth = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const [formState, inputHandler] = useForm({}, false);

  let askAboutForm;

  !auth.isLoggedIn
    ? (askAboutForm = (
        <form onSubmit={submitHandler}>
          <Input
            validators={[VALIDATOR_REQUIRE()]}
            element="input"
            type="text"
            placeholder="Enter your name"
            id="name"
            label="Your name"
            errorText="Please enter your name"
            value={formState}
            onInput={inputHandler}
          />
          <Input
            validators={[VALIDATOR_REQUIRE()]}
            element="input"
            type="text"
            placeholder="Enter your lastname"
            id="lastName"
            label="Your lastname"
            errorText="Please enter your lastname"
            value={formState}
            onInput={inputHandler}
          />
          <Input
            validators={[VALIDATOR_REQUIRE()]}
            element="textarea"
            type="text"
            placeholder="Enter your message..."
            id="message"
            label="Message"
            errorText="Please enter your message"
            value={formState}
            onInput={inputHandler}
          />
          <div style={styles.contact__form_btns}>
            <Button onClick={props.clickedDelete}>Cancel</Button>
            <Button>Contact</Button>
          </div>
        </form>
      ))
    : (askAboutForm = (
        <form onSubmit={submitHandler}>
          <Input
            validators={[VALIDATOR_REQUIRE()]}
            element="textarea"
            type="text"
            placeholder="Enter your message..."
            id="message"
            label="Message"
            errorText="Please enter your message"
            onInput={inputHandler}
          />
          <div style={styles.contact__form_btns}>
            <Button onClick={props.clickedDelete}>Cancel</Button>
            <Button type="submit">Contact</Button>
          </div>
        </form>
      ));

  return askAboutForm;
};

export default PetContactForm;
