import React from "react";
import { SearchContainer } from "./styled";
import { FormInput } from "../Form/styled";
import {
  useHistory,
  useLocation,
} from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <SearchContainer>
      <FormInput
        placeholder="Filtruj zadanie..."
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchContainer>
  );
};

export default Search;
