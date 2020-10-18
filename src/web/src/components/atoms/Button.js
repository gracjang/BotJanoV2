import styled from "styled-components";

const Button = styled.button`
  padding: 7px;
  border-radius: 50px;
  color: white;
  width: 120px;
  height: 38px;
  background-color: blueviolet;
  border: 0;
  outline: none;
  font-size: 0.2rem;
  font: inherit;
  position: absolute;
  right: 20px;
  bottom: 20px;

  &:hover {
    color:black;
  }
`;

export default Button;
