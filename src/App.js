import React from "react";
import { HashRouter, Switch, Route, Redirect, useParams } from "react-router-dom";
import TasksPage from "./Features/tasks/TasksPage/index"
import TaskPage from "./Features/tasks/TaskPage/index"
import AuthorPage from "./Features/author/AuthorPage";
import { NavList, NavWrapper, NavItem, StyledNavLink } from "./globalStyle";

export default () => (
  <HashRouter>
    <NavList>
      <NavWrapper>
        <NavItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </NavItem>
      </NavWrapper>
    </NavList>

    <Switch>
    <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);
