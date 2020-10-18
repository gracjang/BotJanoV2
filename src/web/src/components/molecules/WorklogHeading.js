import React from 'react'
import styled from 'styled-components';
import Paragraph from './../atoms/Paragraph';

const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  padding: 5px;
  margin: 20px 15px;
  outline: none;
  color: blueviolet;
  background-color: lightgrey;
  border-radius: 10px;
`;

const WorklogHeading = () => {
  return (
    <>
      <Paragraph>Rodzaj pracy:</Paragraph>
      <StyledSelect>
        <option value="Spotkanie">Spotkanie</option>
        <option selected value="Daily">
          Daily
        </option>
        <option value="Programowanie">Programowanie</option>
        <option value="Analiza">Analiza</option>
      </StyledSelect>
    </>
  );
}

export default WorklogHeading
