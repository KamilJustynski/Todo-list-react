import { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url(https://wallpapers.com/images/high/best-marble-background-6v2qysqi0lvrsu40.webp);
        opacity: 0.9;
        background-size: cover;
        font-family: "Lato", sans-serif;
        margin: 20px;
    }`;

export const NavList = styled.nav`
  background-color: ${({ theme }) => theme.color.teal};
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  align-items: center;
`;

export const NavWrapper = styled.ul`
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

export const NavItem = styled.li`
  list-style: none;
  text-align: center;
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;

  &.active {
    font-weight: 700;
  }
`;
