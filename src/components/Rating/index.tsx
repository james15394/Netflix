import React from "react";
import { StyledOuter, StyledInner } from "./Rating";

const Rating = ({ rating }: { rating: number }) => {
  const innerWidth = `${Math.round(rating * 10)}%`;
  return (
    <>
      <StyledOuter>
        <StyledInner width={innerWidth}></StyledInner>
      </StyledOuter>
    </>
  );
};

export default Rating;
