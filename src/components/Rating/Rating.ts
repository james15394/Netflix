import styled from "styled-components";

interface Prop {
  width: string;
}
export const StyledOuter = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
  &::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    width: fit-content;
    color: #e9ecef;
  }
`;

export const StyledInner = styled.div<Prop>`
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => (width ? width : 0)};
  overflow: hidden;
  &::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    color: yellow;
  }
`;
