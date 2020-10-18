import React from 'react'
import Header from '../components/atoms/Header';
import SummaryCard from './../components/molecules/SummaryCard';
import styled from 'styled-components';
import Paragraph from './../components/atoms/Paragraph';
import Button from '../components/atoms/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;
const Summary = () => {
  return (
    <div>
      <Header secondary>Summary</Header>
      <StyledWrapper>
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </StyledWrapper>
      <StyledInner>
        <Paragraph>Total: x / 7 hours</Paragraph>
        <Button sender>Send</Button>
      </StyledInner>
    </div>
  );
}

export default Summary
