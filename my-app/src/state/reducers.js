import * as types from "./actionTypes";

const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREASE:
      return count + 1;
    case types.DECREASE:
      return count - 1;
    default:
      return count;
  }
}
