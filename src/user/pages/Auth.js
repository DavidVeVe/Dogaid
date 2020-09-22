import React, { Fragment, useState } from "react";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
// import styles from "./Auth.module.css";

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
      {!isLoginMode && (
        <Fragment>
          <Input
            label="Nombre"
            element="input"
            type="text"
            placeholder="Ingresa tu nombre"
            id="recuerName"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Ingresa tu nombre"
          />
          <Input
            label="Apellido"
            element="input"
            type="text"
            placeholder="Ingresa tu apellido"
            id="rescuerLastname"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Ingresa tu apellido"
          />
        </Fragment>
      )}
      <Input
        label="Email"
        element="input"
        type="email"
        placeholder="Ingresa tu correo electrónico"
        id="email"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        errorText="Ingresa un correo valido"
      />
      <Input
        label="Contraseña"
        element="input"
        type="password"
        placeholder="Ingresa tu contraseña"
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
