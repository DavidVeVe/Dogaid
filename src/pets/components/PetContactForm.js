import React, { useState } from "react";

import Input from "../../UI/FormElements/Input";
import Button from "../../UI/Elements/Button";

const PetContactForm = (props) => {
  const [authenticated, setAuthenticated] = useState(true);

  let askAboutForm;

  !authenticated
    ? (askAboutForm = (
        <form action="">
          <Input
            element="input"
            type="text"
            placeholder="Enter your name"
            id="name"
            label="Your name"
            errorText="Please enter your name"
            onInput={() => {}}
          />
          <Input
            element="input"
            type="text"
            placeholder="Enter your lastname"
            id="lastName"
            label="Your lastname"
            errorText="Please enter your lastname"
            onInput={() => {}}
          />
          <Input
            element="textarea"
            type="text"
            placeholder="Enter your message..."
            id="message"
            label="Message"
            errotText="Please enter your message"
            onInput={() => {}}
          />
        </form>
      ))
    : (askAboutForm = (
        <form action="">
          <Input
            element="textarea"
            type="text"
            placeholder="Enter your message..."
            id="message"
            label="Message"
            errotText="Please enter your message"
            onInput={() => {}}
          />
        </form>
      ));

  return askAboutForm;
};

export default PetContactForm;
