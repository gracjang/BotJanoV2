import React from 'react'
import Worklog from "./Worklog";
import Summary from "./Summary";
import styled from "styled-components";
import Header from '../components/atoms/Header'

const url = "https://localhost:44359/worklogs";
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
`;
 const attrValues = {
    Meeting: 86,
    Programming: 83,
    Daily: 86,
    Analysis: 106,
  };
class Main extends React.Component {
  state = {
    items: [],
  };

  handleSubmit = (e, type) => {
    e.preventDefault();

    const newItem = {
      ticket: e.target[0].value,
      duration: e.target[1].value,
      comment: e.target[2].value,
      attrValue: attrValues.Meeting,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

   handleOnClick = (items) => {
    fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
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
