import React from 'react';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from './state/reducers';
import Counter from './components/counter';

const monsterReducer = combineReducers({
  count: countReducer,
})

export const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk /* ,etc , other middlewares */),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export function App() {
  return (
    <div className="App">
      Hi
      <Counter />
    </div>
  );
}

export default App;
