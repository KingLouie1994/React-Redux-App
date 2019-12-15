import React from "react";
import styled from "styled-components";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { charactersReducer } from "./state/reducers";
import Header from "./components/Header";
import Characters from "./components/Characters";

const monsterReducer = combineReducers({
  characters: charactersReducer,
});

export const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk /* ,etc , other middlewares */),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export function App() {
  return (
    <Container>
      <Header />
      <Characters />
    </Container>
  );
}

export default App;

// Styling here:

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
