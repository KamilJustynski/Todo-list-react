import React from "react";
import { SearchContainer } from "./styled";
import { FormInput } from "../Form/styled";

const Search = () => {
  return (
    <SearchContainer>
      <FormInput placeholder="Filtruj zadanie..." />
    </SearchContainer>
  );
};

export default Search;
