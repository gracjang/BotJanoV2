import React from 'react'
import Header from '../components/atoms/Header'
import styled from 'styled-components';

const StyledInput = styled.input`
  position: relative;
  display: inline-block;
  width: 45%;
  border: 0;
  border-bottom: 2px solid grey;
  outline: 0;
  font-size: 1.2rem;
  padding: 5px 0;
  background: transparent;
  transition: border-color 0.5s;
  margin-top: 50px;
  margin-left: 20px;
  &:focus {
    border-bottom: 2px solid blue;
  }
  &::after {
    content: "min";
  }
`;

const StyledTextArea = styled.textarea`
  width: 45%;
  border: 0;
  border-bottom: 2px solid grey;
  outline: 0;
  font-size: 1.3rem;
  padding: 5px 0;
  background: transparent;
  transition: border-color 0.5s;
  margin-top: 50px;
  margin-left: 20px;
  &:focus {
    border-bottom: 2px solid blue;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Worklog = () => {
  return (
    <div>
      <Header secondary>Worklog</Header>
      <StyledWrapper>
        <StyledInput placeholder="Ticket" type="text" />
        <StyledInput placeholder="Time in minutes" type="number" />
        <StyledTextArea placeholder="..." type="textarea" />
      </StyledWrapper>
    </div>
  );
}

export default Worklog
