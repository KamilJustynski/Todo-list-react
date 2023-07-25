import React, { useState } from "react";
import { FormContainer, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (contentTrimmed.trim() === "") {
      return;
    }
    addNewTask(contentTrimmed);
    setNewTaskContent("");
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <FormInput
        value={newTaskContent}
        required
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </FormContainer>
  );
};

export default Form;
