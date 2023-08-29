import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./Features/tasks/Tasks";
import Author from "./Features/author/Author";
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
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);
