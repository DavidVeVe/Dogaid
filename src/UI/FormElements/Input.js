import React, { useReducer, useEffect } from "react";

import { validate } from "../../shared/util/validators";
import styles from "./Input.module.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload.val,
        isValid: validate(action.payload.val, action.payload.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      payload: { val: e.target.value, validators: props.validators },
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  let inputElement;
  switch (props.element) {
    case "input":
      inputElement = (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          id={props.id}
          rows={props.rows || 3}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className={styles.input}>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && (
        <span>{props.errorText}</span>
      )}
    </div>
  );
};

export default Input;
