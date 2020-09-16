import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";

import PETS_DATA from "../../shared/util/Mock/petsData";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const UpdatePet = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const petId = useParams().petId;

  const identifiedPet = PETS_DATA.find((p) => p.id === +petId);

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
    setIsLoading(false);
  }, [setFormData, identifiedPet]);

  if (!identifiedPet) {
    return <h1>No hay pets</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    formState.inputs.petName.value && (
      <form action="">
        <Input
          id="petName"
          element="input"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          placeholder="Nombre"
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
          placeholder="Edad en meses"
          errorText="Ingresa la edad de la mascota"
          onInput={inputHandler}
          initialValue={formState.inputs.age.value}
          initialValid={formState.inputs.age.isValid}
        />
        <Input
          id="petDescription"
          element="textarea"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          placeholder="Descripción o historia del peludo"
          errorText="Ingresa la descripción y/o historia del peludo"
          onInput={inputHandler}
          initialValue={formState.inputs.petDescription.value}
          initialValid={formState.inputs.petDescription.isValid}
        />
        <Button>Actualizar</Button>
      </form>
    )
  );
};

export default UpdatePet;
