import styled from "styled-components";

export const StyledCard = styled.div`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 50px #1727467d;
  background: linear-gradient(to top, #a7bfe8, #6190e8);
  transition: transform 0.2s ;

  & > img {
    transition: transform 0.3s ;
    transform: scale(.9);
    transform-origin: bottom;
  }
  &:hover {
    transform: scale(.86);
    & >img{
      
      transform: scale(1.4);
    }
  }
`;
