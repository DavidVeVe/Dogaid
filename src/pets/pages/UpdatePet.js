import React, { useState, useEffect } from "react";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";

import { useForm } from "../../shared/hooks/form-hook";
import PETS_DATA from "../../shared/util/Mock/petsData";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import styles from "./UpdatePet.module.css";
import { useParams } from "react-router-dom";

const UpdatePet = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const petId = useParams().petId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      petName: {
        value: "",
        isValid: false,
      },
      age: {
        value: "",
        isValid: false,
      },
      rescuerName: {
        value: "",
        isValid: false,
      },
      petDescription: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPet = PETS_DATA.find((p) => p.id === petId);

  console.log(identifiedPet);

  useEffect(() => {
    if (identifiedPet) {
      setFormData(
        {
          petName: {
            value: identifiedPet.value,
            isValid: identifiedPet.isValid,
          },
          age: {
            value: "",
            isValid: false,
          },
          rescuerName: {
            value: "",
            isValid: false,
          },
          petDescription: {
            value: "",
            isValid: false,
          },
        },
        true
      );
    }
  }, []);

  const petUpdateSubmitHandler = () => {
    console.log(formState.inputs);
  };

  return (
    <form action="" onSubmit={petUpdateSubmitHandler}>
      <Input
        element="input"
        type="text"
        name="petName"
        id="petName"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa el nombre de la mascota"
        onInput={inputHandler}
        initialValue={formState.inputs.petName.value}
        initialValid={formState.inputs.petName.isValid}
      />
      <Input
        element="input"
        type="number"
        name="age"
        id="age"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la edad de la mascota"
        onInput={inputHandler}
        initialValue={formState.inputs.age.value}
        initialValid={formState.inputs.age.isValid}
      />
      <Input
        element="input"
        type="text"
        name="rescuerName"
        id="rescuerName"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa tu nombre"
        onInput={inputHandler}
        initialValue={formState.inputs.rescuerName.value}
        initialValid={formState.inputs.rescuerName.isValid}
      />
      <Input
        element="textarea"
        type="text"
        name="petDescription"
        id="petDescription"
        placeholder="Ingresa la descripción y/o historia del peludo. Ejemplo: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la descripción y/o historia del peludo"
        onInput={inputHandler}
        initialValue={formState.inputs.petDescription.value}
        initialValid={formState.inputs.petDescription.isValid}
      />
      <Button>Actualizar</Button>
    </form>
  );
};

export default UpdatePet;
