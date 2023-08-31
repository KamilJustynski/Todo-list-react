import React from "react";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Main from "../../../common/Main";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { SectionBox } from "./styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Main>
      <Header title="Szczególy zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          <SectionBox><>
          <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
        </></SectionBox>
        }
      />
    </Main>
  );
}

export default TaskPage;
