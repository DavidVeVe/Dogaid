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
    <form action="" onSubmit={submitHandler} className={styles.newPet__form}>
      <p>Información de la mascota:</p>
      <Input
        label="Nombre de la mascota"
        element="input"
        type="text"
        placeholder="Nombre"
        id="petName"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa el nombre del peludo"
      />
      <Input
        label="Edad en meses"
        element="input"
        type="number"
        placeholder="Edad"
        id="age"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la edad del peludo"
      />
      <Input
        label="Historia de la mascota"
        element="textarea"
        type="text"
        placeholder="Acerca de la mascota"
        id="petDescription"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la descripción y/o historia del peludo"
      />
      <p>Contacto</p>

      <Input
        label="Nombre"
        element="input"
        type="text"
        placeholder="Ingresa tu nombre"
        id="rescuerName"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa tu nombre"
      />
      <Input
        label="Email"
        element="input"
        type="email"
        placeholder="Ingresa tu email"
        id="email"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa un email válido"
      />
      <Input
        label="Teléfono"
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
