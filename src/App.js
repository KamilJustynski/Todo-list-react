import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TasksPage from "./Features/tasks/TasksPage/index";
import TaskPage from "./Features/tasks/TaskPage/index";
import AuthorPage from "./Features/author/AuthorPage";
import { toTask, toTasks, toAuthor } from "./routes";
import Navigation from "./Features/Navigation";

export default () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);
