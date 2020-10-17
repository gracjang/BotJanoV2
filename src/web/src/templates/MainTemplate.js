import React from 'react'
import PropTypes from "prop-types";
import GlobalStyle from './../styles/GlobalStyles';

const MainTemplate = ( { children } ) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate
