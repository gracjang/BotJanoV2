import React from 'react'
import styled from "styled-components";
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  width: 70%;
  background-color: white;
  min-height: 380px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
  position: relative;
`;

const WorklogCard = ( { type, fnSubmit } ) => {
  return (
    <StyledWrapper>
      <form onSubmit={(e) => fnSubmit(e)}>
        <Input type="text" placeholder="Ticket" />
        <Input type="number" placeholder="Time in minutes" />
        {type === "Meeting" && <TextArea placeholder="Type some comment" />}

        <Button>Dodaj</Button>
      </form>
    </StyledWrapper>
  );
}

export default WorklogCard;
