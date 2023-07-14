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

const hideDone = false;

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />
    </Main>
  );
}

export default App;
