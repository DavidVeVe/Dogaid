import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";

import PETS_DATA from "../../shared/util/Mock/petsData";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
// import styles from "./UpdatePet.module.css";

const UpdatePet = (props) => {
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

  const identifiedPet = PETS_DATA.find((p) => p.id === +petId);

  useEffect(() => {
    if (identifiedPet) {
      setFormData(
        {
          petName: {
            value: identifiedPet.petName,
            isValid: true,
          },
          age: {
            value: identifiedPet.age,
            isValid: true,
          },
          rescuerName: {
            value: identifiedPet.rescuerName,
            isValid: true,
          },
          petDescription: {
            value: identifiedPet.petDescription,
            isValid: true,
          },
        },
        true
      );
    }
  }, [setFormData, identifiedPet]);

  // const petUpdateSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(formState.inputs);
  // };

  console.log(formState);

  if (!identifiedPet) {
    return <h1>No hay pets</h1>;
  }

  return (
    <form action="">
      <Input
        id="petName"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa el nombre de la mascota"
        onInput={inputHandler}
        initialValue={formState.inputs.petName.value}
        initialValid={formState.inputs.petName.isValid}
      />
      <Input
        id="age"
        element="input"
        type="number"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la edad de la mascota"
        onInput={inputHandler}
        initialValue={formState.inputs.age.value}
        initialValid={formState.inputs.age.isValid}
      />
      <Input
        id="rescuerName"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa tu nombre"
        onInput={inputHandler}
        initialValue={formState.inputs.rescuerName.value}
        initialValid={formState.inputs.rescuerName.isValid}
      />
      <Input
        id="petDescription"
        element="textarea"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingresa la descripción y/o historia del peludo"
        onInput={inputHandler}
        initialValue={formState.inputs.petDescription.value}
        initialValid={formState.inputs.petDescription.isValid}
      />
      <Button>Actualizar</Button>
      <h1>{formState.inputs.petName.value}</h1>
    </form>
  );
};

export default UpdatePet;
