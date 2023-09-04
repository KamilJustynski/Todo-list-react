import React from "react";
import { fetchExampleTasks, selectIsTasksLoading } from "../../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsTasksLoading);

  return (
    <ButtonsContainer>
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
    </ButtonsContainer>
  );
};

export default FetchExampleTasksButton;
