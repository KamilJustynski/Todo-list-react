import React from "react";
import { toAuthor, toTasks } from "../../routes";
import { NavList, NavWrapper, NavItem, StyledNavLink } from "./styled";

export default () => {
  return (
    <NavList>
      <NavWrapper>
        <NavItem>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </NavItem>
      </NavWrapper>
    </NavList>
  );
};
