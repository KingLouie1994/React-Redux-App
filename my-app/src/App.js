import React from "react";
import styled from "styled-components";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { countReducer } from "./state/reducers";
import Counter from "./components/Counter";
import Header from "./components/Header";

const monsterReducer = combineReducers({
  count: countReducer
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
      <Counter />
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
