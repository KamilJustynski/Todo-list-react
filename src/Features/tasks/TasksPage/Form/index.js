import React, { useState, useRef } from "react";
import { FormContainer, FormInput, FormButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTasks } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";


const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (contentTrimmed.trim() === "") {
      return;
    }

    dispatch(
      addTasks({
        content: contentTrimmed,
        done: false,
        id: nanoid(),
      })
    );
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
