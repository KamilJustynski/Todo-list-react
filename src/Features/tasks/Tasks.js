import React from "react";
import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList"
import Header from "../../common/Header"
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Main from "../../common/Main";

function App() {
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    hideDone,
    toggleHideDone,
  } = useTasks();

  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            tasks={tasks}
            hideDone={hideDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Main>
  );
}

export default App;
