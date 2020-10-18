import React from 'react'
import Header from '../components/atoms/Header'
import styled from 'styled-components';
import WorklogHeading from '../components/molecules/WorklogHeading';
import Card from './../components/molecules/Card';

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Worklog = () => {
  return (
    <div>
      <Header secondary>Worklog</Header>
      <StyledHeading>
        <WorklogHeading />
      </StyledHeading>
      <StyledCard>
        <Card />
      </StyledCard>
    </div>
  );
}

export default Worklog
