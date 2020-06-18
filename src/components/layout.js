import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

import "./global.css";

const Layout = ({ children }) => {
  return (
    <>
    <StyledWrapper>
      <Header />
      {children}
      <StyledPush /> 
    </StyledWrapper>
    <StyledPush>
      <Footer />      
    </StyledPush> 
    </>
  );
};

const StyledWrapper = styled.div`
  min-height: 100%;
  margin-bottom: -168px;

  @media only screen and (min-width: 768px) {
    margin-bottom: -117px;
  }
`;

const StyledPush = styled.div`
  height: 168px;
  
  @media only screen and (min-width: 768px) {
    height: 117px;  
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
