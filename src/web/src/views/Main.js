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
 const attrValues = {
    Meeting: 86,
    Programming: 83,
    Daily: 86,
    Analysis: 106.
  };
class Main extends React.Component {
  state = {
    items: [],
  };

  handleSubmit = (e, type) => {
    e.preventDefault();

    const newItem = {
      ticket: e.target[0].value,
      time: e.target[1].value,
      comment: e.target[2].value,
      attrValue: attrValues.Meeting,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  handleOnClick = (items) => {
    console.log(items);
  };

  render() {
    return (
      <>
        <Header>Bot Jano V2</Header>
        <StyledWrapper>
          <Worklog fnSubmit={this.handleSubmit} />
          <Summary items={this.state.items} fnOnClick={this.handleOnClick} />
        </StyledWrapper>
      </>
    );
  }
}

export default Main
