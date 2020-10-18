import React from 'react'
import Header from '../components/atoms/Header'
import styled from 'styled-components';
import WorklogHeading from '../components/molecules/WorklogHeading';
import WorklogCard from './../components/molecules/WorklogCard';

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

const types = {
  daily: "Daily",
  meeting: "Meeting",
  programming: "Programming",
  analysis: "Analysis",
};

class Worklog extends React.Component {
  state = {
    value: types.meeting,
  };
  
  handleSelectChange = (event) => {
    this.setState({value: event.target.value});
  };
 
  render() {
    return (
      <div>
        <Header secondary>Worklog</Header>
        <StyledHeading>
          <WorklogHeading
            types={types}
            fnHandleSelectChange={this.handleSelectChange}
            valueType={this.state.value}
          />
        </StyledHeading>
        <StyledCard>
          <WorklogCard type={this.state.value} fnSubmit={this.props.fnSubmit} />
        </StyledCard>
      </div>
    );
  }
}

export default Worklog
