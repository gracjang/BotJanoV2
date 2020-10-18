import styled, { css } from "styled-components";

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 200;
  background-repeat: no-repeat;
  color: chocolate;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  margin: 0;
  margin-top: 20px;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 26px;
    `};
`;

export default Header;