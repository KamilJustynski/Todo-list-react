import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";

const tasks = [
  { id: 1, content: "wynieść śmieci", done: false },
  { id: 2, content: "zrobić pranie", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Main>
  );
}

export default App;
