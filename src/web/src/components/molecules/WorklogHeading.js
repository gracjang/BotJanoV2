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
  font-weight: 600;
`;

const WorklogHeading = ( { types, fnHandleSelectChange, valueType } ) => {
  return (
    <>
      <Paragraph>Rodzaj pracy:</Paragraph>
      <StyledSelect onChange={fnHandleSelectChange} value={valueType}>
        <option value={types.meeting}>{types.meeting}</option>
        <option value={types.daily}>{types.daily}</option>
        <option value={types.programming}>{types.programming}</option>
        <option value={types.analysis}>{types.analysis}</option>
      </StyledSelect>
    </>
  );
}

export default WorklogHeading
