import React from "react";
import { fetchExampleTasks } from "../../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { useDispatch } from "react-redux";

const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    </ButtonsContainer>
  );
};

export default FetchExampleTasksButton;
