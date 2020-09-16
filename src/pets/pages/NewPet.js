import React from "react";

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
      <label style={{ color: "white" }}>Información de la mascota:</label>
      <Input
        element="input"
        type="text"
        placeholder="Nombre"
        id="petName"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa el nombre del peludo"
      />
      <Input
        element="input"
        type="number"
        placeholder="Edad"
        id="age"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la edad del peludo"
      />
      <Input
        element="textarea"
        type="text"
        placeholder="Acerca de la mascota"
        id="petDescription"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la descripción y/o historia del peludo"
      />
      <label style={{ color: "white" }}>Contacto</label>
      <Input
        element="input"
        type="email"
        placeholder="Tu email"
        id="email"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa un email válido"
      />
      <Input
        element="input"
        type="tel"
        placeholder="Tu número de teléfono"
        id="phone"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa un número de telefono válido"
      />
      <Button>Publicar</Button>
    </form>
  );
};

export default NewPet;
