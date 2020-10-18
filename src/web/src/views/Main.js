import React from 'react'
import Worklog from "./Worklog";
import Summary from "./Summary";
import styled from "styled-components";
import Header from '../components/atoms/Header';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
`;

class Main extends React.Component {
  state = {
    items: []
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ticket: e.target[0].value,
      time: e.target[1].value,
      comment: e.target[2].value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  }

  render() {
    return (
      <>
        <Header>Bot Jano V2</Header>
        <StyledWrapper>
          <Worklog fnSubmit={this.handleSubmit} />
          <Summary items={this.state.items}/>
        </StyledWrapper>
      </>
    );
  }
  
}

export default Main
