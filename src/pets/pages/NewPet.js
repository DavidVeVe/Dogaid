import React, { useReducer } from "react";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import styles from "./NewPet.module.css";

const NewPet = (props) => {
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
        type="text"
        placeholder="Nombre"
        name="petName"
        id="petName"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa el nombre del peludo"
      />
      <Input
        element="input"
        type="number"
        placeholder="Edad"
        name="age"
        id="age"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la edad del peludo"
      />
      <Input
        element="input"
        type="text"
        placeholder="Nombre de rescatista"
        name="rescuerName"
        id="rescuerName"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa tu nombre"
      />
      <Input
        element="textarea"
        type="text"
        placeholder="Ingresa la descripción y/o historia del peludo. Ejemplo: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        name="petDescription"
        id="petDescription"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la descripción y/o historia del peludo"
      />
      <Button>Publicar</Button>
    </form>
  );
};

export default NewPet;
