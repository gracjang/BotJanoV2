import React from 'react'
import Worklog from "./Worklog";
import Summary from "./Summary";
import styled from "styled-components";
import Header from './../components/atoms/Header/Header';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
`;

const Main = () => {
  return (
    <>
      <Header>Bot Jano V2</Header>
      <StyledWrapper>
        <Worklog />
        <Summary />
      </StyledWrapper>
    </>
  );
}

export default Main
