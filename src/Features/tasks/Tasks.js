import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Header from "../../common/Header";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Main from "../../common/Main";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Szukaj zadania"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Main>
  );
}

export default App;
