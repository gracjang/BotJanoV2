import styled, { css } from "styled-components";

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  background-repeat: no-repeat;
  color: black;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  margin: 0;
  font-family: "Lemonada", cursive;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 36px;
    `};
`;

export default Header;