// A reducer takes in two things:
// 1. The action (info about what happened)
// 2. A copy of the current state
// The reducer eturns copy of the updated store

export default function posts(state = [], action) {
  console.log(state, action);
  return state;
}
