import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.payload.inputId) {
          formIsValid = formIsValid && action.payload.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.inputId]: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.payload.inputs,
        isValid: action.payload.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      payload: { value: value, isValid: isValid, inputId: id },
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      payload: {
        inputs: inputData,
        formIsValid: formValidity,
      },
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
