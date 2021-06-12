import React from "react";
import { StyledSearch } from "../styled/Search";

export default function Search({ placeholder, handleChange }) {
  return (
    <StyledSearch
      type="search"
      name="search"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
