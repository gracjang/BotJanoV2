import React from "react";
import Header from './../components/atoms/Header/Header';
import GlobalStyle from './../styles/GlobalStyles';
import MainTemplate from "../templates/MainTemplate";
import Main from './Main';

function Root() {
  return (
    <>
      <MainTemplate>
        <Main />
      </MainTemplate>
    </>
  );
}

export default Root;
