import React, { Fragment, useState, useContext } from "react";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
// import styles from "./Auth.module.css";

const AuthForm = (props) => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          lastname: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          lastname: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        {!isLoginMode && (
          <Fragment>
            <Input
              label="Name"
              element="input"
              type="text"
              placeholder="Type your name"
              id="name"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please type your name"
            />
            <Input
              label="Lastname"
              element="input"
              type="text"
              placeholder="Type your lastname"
              id="lastname"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please type your lastname"
            />
          </Fragment>
        )}
        <Input
          label="Email"
          element="input"
          type="email"
          placeholder="Type your email"
          id="email"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Please type a valid email"
        />
        <Input
          label="Password"
          element="input"
          type="password"
          placeholder="Type your password"
          id="password"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
          errorText="Please type a minimum 8 characters password"
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Log in" : "Sign up"}
        </Button>
      </form>
      <span onClick={switchModeHandler}>
        {!isLoginMode ? "Already registered?" : "Need to register?"}
      </span>
    </Fragment>
  );
};

export default AuthForm;
