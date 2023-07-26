import React, { useState, useRef } from "react";
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

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={newTaskContent}
        required
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton onClick={focusInput}>Dodaj zadanie</FormButton>
    </FormContainer>
  );
};

export default Form;
