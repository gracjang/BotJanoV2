import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import Paragraph from './../atoms/Paragraph';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 10px -10px hsla(0, 0%, 0%, 0.2);
  width: 50%;
  background-color: white;
  max-height: 60px;
  border-radius: 10px;
  display: flex;
  margin-top: 20px;
  padding-left: 20px;
  justify-content: space-around;
  align-items: center;
`;

const SummaryCard = () => {
  return (
    <StyledWrapper>
      <Paragraph>KRD-1200</Paragraph>
      <Paragraph>40 minutes</Paragraph>
      <Paragraph>Retro</Paragraph>
    </StyledWrapper>
  );
};

export default SummaryCard;
