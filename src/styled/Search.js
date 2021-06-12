import styled from "styled-components";

export const StyledSearch = styled.input`
  padding: 0px 10px;
  border: 3px solid #a7bfe8;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 35vw;
  border-radius: 7px;
  height: 40px;
  outline: none;
  transition:.2s;
  font-size: 18px;
  font-weight:500;

  &:focus {
      transform:scaleX(1.05);
      outline: none;
      box-shadow: 0 0 11px -5px #1727467d  }
`;
