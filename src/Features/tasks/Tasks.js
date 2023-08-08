import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Header from "../../common/Header";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Main from "../../common/Main";

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Main>
  );
}

export default App;
