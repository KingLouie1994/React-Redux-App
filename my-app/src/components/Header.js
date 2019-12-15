import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export const Header = (props) => {
  return (
    <Container>
      <h1>Welcome to the Rick and Morty Page</h1>
    </Container>
  );
};

export default connect(state => state, {})(Header);

// Styling here:

const Container = styled.div`
  text-align: center;
  color: white;
  background-color: orange;
  width: 98%;
  margin: 1%;
  padding: 0.5%;
`;
