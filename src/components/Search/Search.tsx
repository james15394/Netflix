import React from "react";
import { SearchWrapper } from "./Search.styles";

import Slide from "../Slider/Slider";

const Search = (props: { searchResult: any }) => {
  const { searchResult } = props;

  return (
    <SearchWrapper>
      <Slide arrItems={searchResult} slideNo={6} />
    </SearchWrapper>
  );
};

export default Search;
