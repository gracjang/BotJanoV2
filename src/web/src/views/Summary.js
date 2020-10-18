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

function timeConvert(n) {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return ( rhours + " hour(s) and " + rminutes + " minute(s)."
  );
}

const sumCost = (data) =>
  data.reduce(
    (cost, entry) => cost + (parseFloat(entry.time) || 0),
    0
  );

const Summary = ({ items }) => {
  return (
    <div>
      <Header secondary>Summary</Header>
      <StyledWrapper>
        {items.map((item) => (
          <SummaryCard key={item.ticket} {...item} />
        ))}
      </StyledWrapper>
       {items.length > 0 &&
        <StyledInner>
        <Paragraph>Total: {timeConvert(sumCost(items))}</Paragraph>
        <Button sender>Send</Button>
       </StyledInner> }
    </div>
  );
}

export default Summary
