import React from "react";
import { ButtonsContainer, Btn } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsContainer>
    {tasks.length > 0 && (
      <>
        <Btn onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Btn>
        <Btn disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>
          Ukończ wszystkie
        </Btn>
      </>
    )}
  </ButtonsContainer>
);

export default Buttons;
