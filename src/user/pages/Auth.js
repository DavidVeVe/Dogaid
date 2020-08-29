import React, { useState } from "react";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import styles from "./Auth.module.css";

const AuthForm = (props) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler] = useForm(
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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <Input
        element="input"
        type="email"
        placeholder="Correo electrónico"
        name="email"
        id="email"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        errorText="Ingresa un correo valido"
      />
      <Input
        element="input"
        type="password"
        placeholder="Contraseña"
        name="password"
        id="password"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
        errorText="Ingresa una contraseña de minimo 8 caracteres"
      />
      <Button>{isLoginMode ? "Log in" : "Registrarme"}</Button>
    </form>
  );
};

export default AuthForm;
