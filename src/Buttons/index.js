import React from "react";
import { ButtonsContainer, Key } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsContainer>
    {tasks.length > 0 && (
      <>
        <Key onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Key>
        <Key disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>
          Ukończ wszystkie
        </Key>
      </>
    )}
  </ButtonsContainer>
);

export default Buttons;
