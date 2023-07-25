import React from "react";
import { HeaderTitle, MainHeader } from "./styled";

const Header = ({ title }) => (
  <MainHeader>
    <HeaderTitle>{title}</HeaderTitle>
  </MainHeader>
);

export default Header;
