import * as types from "./actionTypes";

const initialCharacters = [];
export function charactersReducer(todos = initialCharacters, action) {
  switch (action.type) {
    case types.SET_CHARACTERS:
      return action.payload;
    default:
      return todos;
  }
}
