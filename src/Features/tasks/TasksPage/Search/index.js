import React from "react";
import { SearchContainer } from "./styled";
import { FormInput } from "../Form/styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";

const Search = () => {
  const query = useQueryParameter("szukaj");
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: "szukaj",
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
