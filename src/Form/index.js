import React, { useState } from "react";
import "./style.css";

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
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        required
        placeholder="Co jest do zrobienia?"
        className="form__input"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
