import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  font-family: inherit;
  height: 48px;
  font-size: 16px;
  border: 0;
  margin-top: 50px;
  border-bottom: 1px solid grey;
  padding: 10px;
  color: blueviolet;
  outline-color: blueviolet;

  &:first-child {
    margin-top: 10px;
  }
`;

export default Input;